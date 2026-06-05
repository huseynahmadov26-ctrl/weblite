import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "Questions" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    let last = window.scrollY > 12;
    setScrolled(last);

    const update = () => {
      raf = 0;
      const next = window.scrollY > 12;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-soft ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-soft ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-primary shadow-glow-sm">
              <span className="absolute inset-0 rounded-xl bg-gradient-primary opacity-30 group-hover:opacity-50 transition-soft" />
              <span className="relative text-primary-foreground font-display text-lg leading-none">
                W
              </span>
            </span>
            <span className="font-semibold tracking-tight">
              Web<span className="text-primary"> Lite</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow-sm hover:shadow-glow transition-soft"
            >
              Get Started
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-9 w-9 grid place-items-center rounded-lg border border-border/60"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1">
                <span
                  className={`h-px w-4 bg-foreground transition-soft ${open ? "translate-y-1 rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-4 bg-foreground transition-soft ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-px w-4 bg-foreground transition-soft ${open ? "-translate-y-1 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <nav className="flex flex-col gap-3 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-gradient-primary px-4 py-2 font-medium text-primary-foreground"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
