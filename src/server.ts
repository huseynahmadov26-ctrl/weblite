import "./lib/error-capture";

import process from "node:process";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

function getEnvValue(env: unknown, key: string) {
  if (env != null && typeof env === "object" && key in env) {
    const value = (env as Record<string, unknown>)[key];
    return typeof value === "string" ? value : undefined;
  }

  return process.env[key];
}

async function verifyRecaptcha(request: Request, env: unknown) {
  const secretKey = getEnvValue(env, "RECAPTCHA_SECRET_KEY");

  if (!secretKey) {
    return Response.json(
      { success: false, message: "reCAPTCHA secret key is not configured." },
      { status: 500 },
    );
  }

  let token = "";

  try {
    const body = (await request.json()) as { token?: unknown };
    token = typeof body.token === "string" ? body.token : "";
  } catch {
    return Response.json(
      { success: false, message: "Invalid reCAPTCHA request." },
      { status: 400 },
    );
  }

  if (!token) {
    return Response.json(
      { success: false, message: "Please complete the reCAPTCHA check." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const result = (await response.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };

    if (!response.ok || !result.success) {
      return Response.json(
        {
          success: false,
          message: "reCAPTCHA verification failed. Please try again.",
        },
        { status: 400 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("reCAPTCHA verification failed", error);
    return Response.json(
      {
        success: false,
        message: "reCAPTCHA verification is unavailable. Please try again.",
      },
      { status: 502 },
    );
  }
}

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(
  response: Response,
): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (
    !body.includes('"unhandled":true') ||
    !body.includes('"message":"HTTPError"')
  ) {
    return response;
  }

  console.error(
    consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`),
  );
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      if (url.pathname === "/api/verify-recaptcha") {
        return await verifyRecaptcha(request, env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
