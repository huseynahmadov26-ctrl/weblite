export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-primary shadow-glow-sm" />
              Haqqımızda
            </span>

            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-gradient">
              Rəqəmsal dünyada brendləri daha güclü edən studiya
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Web Lite — müasir dizaynı, sürətli performansı və funksional veb həlləri birləşdirən fokuslanmış rəqəmsal agentlikdir. Məqsədimiz sadəcə sayt hazırlamaq deyil, bizneslər üçün real dəyər yaradan rəqəmsal təcrübələr qurmaqdır.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              İstər yeni başlanğıc, istərsə də mövcud brendin yenilənməsi olsun — hər layihədə aydınlıq, sadəlik və premium hiss əsas prioritetimizdir.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-10"
              aria-hidden
            />

            <div className="relative grid grid-cols-2 gap-3">
              {[
                { k: "Fokus", v: "Sadə və məqsədyönlü həllər" },
                { k: "Sürət", v: "Optimallaşdırılmış yüksək performans" },
                { k: "Keyfiyyət", v: "Detallara diqqət və test edilmiş nəticə" },
                { k: "Əməkdaşlıq", v: "Uzunmüddətli və etibarlı tərəfdaşlıq" },
              ].map((b) => (
                <div key={b.k} className="soft-card soft-card-hover p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-primary">
                    {b.k}
                  </div>
                  <div className="mt-2 font-medium">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
