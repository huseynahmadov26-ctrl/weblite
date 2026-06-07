import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36"
    >
      {/* Fon layları */}
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.24), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-40 -left-20 h-72 w-72 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 113, 133, 0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-60 -right-20 h-80 w-80 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Müasir bizneslər üçün müasir veb saytlar
        </div>

        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-gradient">
  Sürətli, müasir və nəticə yönümlü <br className="hidden md:block" />
  veb saytlarla{" "}
  <em className="not-italic text-gradient-red">
    biznesinizi növbəti səviyyəyə daşıyırıq
  </em>
</h1>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          Web Lite olaraq bizneslərin rəqəmsal dünyada fərqlənməsi üçün sürətli, premium və istifadəçi yönümlü veb saytlar hazırlayırıq. Məqsədimiz sadəcə gözəl görünən deyil, nəticə verən saytlar yaratmaqdır.

        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="soft-button group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover hover:bg-none"
          >
            Başlayaq
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-surface-elevated transition-soft"
          >
            Bizimlə əlaqə
          </a>
        </div>

      </div>
    </section>
  );
}
