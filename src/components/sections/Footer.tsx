import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-white/10 bg-black shadow-glow-sm">
                <img
                  src="/weblite-logo-160.jpeg"
                  alt="Web Lite logo"
                  width="44"
                  height="44"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="font-semibold tracking-tight text-lg">
                Web<span className="text-primary"> Lite</span>
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Müasir bizneslər üçün sürətli, estetik və nəticə yönümlü veb həllər hazırlayırıq.
              Hər layihə diqqətlə dizayn edilir və performans üçün optimallaşdırılır.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Bölmələr
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#services", "Xidmətlər"],
                ["#process", "Proses"],
                ["#pricing", "Qiymətlər"],
                ["#work", "İşlərimiz"],
                ["#faq", "FAQ"],
                ["#contact", "Əlaqə"],
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

          {/* Contact */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Əlaqə
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  href="mailto:weblite280@gmail.com"
                >
                  <Mail className="h-4 w-4" /> weblite280@gmail.com
                </a>
              </li>

              <li>
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  href="https://wa.me/9940704362011"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>

              <li>
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  href="https://instagram.com/weblite.az"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-border/60 pt-6 text-xs text-muted-foreground">
          
          <div>
            © {new Date().getFullYear()} Web Lite. Bütün hüquqlar qorunur.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">
              Məxfilik
            </a>
            <a href="#" className="hover:text-foreground">
              Şərtlər
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
