import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.22 18 / 0.45), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-40 -left-20 h-72 w-72 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 25 / 0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-60 -right-20 h-80 w-80 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.22 14 / 0.30), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Modern Websites for Modern Businesses
        </div>

        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-gradient">
          We Build Modern Websites <br className="hidden md:block" />
          That Help{" "}
          <em className="not-italic text-gradient-red">Businesses Grow</em>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          Web Lite designs and develops fast, responsive and high-performance
          websites - crafted to make your brand feel premium from the very first
          scroll.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow-sm hover:shadow-glow transition-soft"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-surface-elevated transition-soft"
          >
            Contact Us
          </a>
        </div>

        {/* Mock browser frame */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          <div
            className="absolute -inset-x-10 -inset-y-6 rounded-[2rem] bg-gradient-primary opacity-10"
            aria-hidden
          />
          <div className="relative glass-strong rounded-2xl p-3 shadow-elevated">
            <div className="flex items-center gap-1.5 px-2 py-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
              <span className="ml-3 text-[11px] text-muted-foreground">
                weblite.studio
              </span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-surface">
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="absolute inset-0 bg-radial-glow" />
              <div className="relative grid h-full grid-cols-3 gap-4 p-6">
                <div className="col-span-2 space-y-3">
                  <div className="h-3 w-32 rounded-full bg-foreground/15" />
                  <div className="h-6 w-3/4 rounded-full bg-foreground/25" />
                  <div className="h-6 w-2/3 rounded-full bg-foreground/15" />
                  <div className="mt-6 flex gap-2">
                    <div className="h-8 w-24 rounded-full bg-gradient-primary shadow-glow-sm" />
                    <div className="h-8 w-24 rounded-full bg-foreground/10" />
                  </div>
                </div>
                <div className="glass rounded-xl p-3 flex flex-col gap-2">
                  <div className="h-2 w-12 rounded-full bg-primary/60" />
                  <div className="h-2 w-20 rounded-full bg-foreground/15" />
                  <div className="h-2 w-16 rounded-full bg-foreground/15" />
                  <div className="mt-auto h-20 rounded-lg bg-gradient-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
