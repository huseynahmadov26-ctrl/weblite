import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const siteUrl = "https://weblite.az";
const siteName = "Web Lite";
const defaultTitle =
  "Web Lite | Website Making, Web Design and SEO Optimization";
const defaultDescription =
  "Web Lite creates fast, modern and SEO optimized websites for businesses that need web design, website making, landing pages, e-commerce and technical support.";
const previewImage = `${siteUrl}/weblite-logo.jpeg`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: defaultTitle },
        {
          name: "description",
          content: defaultDescription,
        },
        { name: "author", content: siteName },
        {
          name: "keywords",
          content:
            "Web Lite, weblite, web site, website making, website design, web design, web development, sayt hazirlanmasi, veb sayt hazirlanmasi, SEO optimization, landing page, e-commerce website",
        },
        { name: "robots", content: "index, follow" },
        {
          name: "googlebot",
          content: "index, follow, max-image-preview:large",
        },
        { name: "theme-color", content: "#ef4444" },
        {
          property: "og:title",
          content: defaultTitle,
        },
        {
          property: "og:description",
          content: defaultDescription,
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: siteName },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: previewImage },
        { property: "og:image:alt", content: "Web Lite logo" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: defaultTitle },
        { name: "twitter:description", content: defaultDescription },
        { name: "twitter:image", content: previewImage },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "canonical", href: siteUrl },
        { rel: "icon", href: "/weblite-logo-160.jpeg", type: "image/jpeg" },
        { rel: "apple-touch-icon", href: "/weblite-logo-160.jpeg" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
