import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow-sm">
                <span className="font-display text-lg text-primary-foreground leading-none">
                  W
                </span>
              </span>
              <span className="font-semibold tracking-tight text-lg">
                Web<span className="text-primary"> Lite</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Modern websites for modern businesses. Crafted with care,
              engineered for speed.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#services", "Services"],
                ["#process", "Process"],
                ["#pricing", "Pricing"],
                ["#work", "Work"],
                ["#faq", "FAQ"],
                ["#contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  href="mailto:hello@weblite.studio"
                >
                  <Mail className="h-4 w-4" /> weblite280@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  href="https://wa.me/15550100420"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  href="https://instagram.com/weblite.studio"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Web Lite. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
