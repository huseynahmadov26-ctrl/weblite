import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Xidmətlər" },
  { href: "#process", label: "Proses" },
  { href: "#pricing", label: "Qiymətlər" },
  { href: "#faq", label: "Suallar" },
  { href: "#about", label: "Haqqında" },
  { href: "#contact", label: "Əlaqə" },
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
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-black shadow-glow-sm transition-soft group-hover:border-primary/40">
              <img
                src="/weblite-logo-160.jpeg"
                alt="Web Lite logo"
                width="40"
                height="40"
                decoding="async"
                className="h-full w-full object-cover"
              />
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
              className="soft-button hidden sm:inline-flex items-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover hover:bg-none"
            >
              Başlayaq
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-9 w-9 grid place-items-center rounded-lg border border-border/60"
            >
              <span className="sr-only">Menyu</span>
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
                className="soft-button mt-2 inline-flex justify-center rounded-full bg-gradient-primary px-4 py-2 font-medium text-primary-foreground"
              >
                Başlayaq
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
