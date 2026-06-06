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
              Müasir vebi formalaşdıran inkişaf edən studiya
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Web Lite bizneslərə səliqəli dizayn və müasir texniki həllərlə
              güclü onlayn mövcudluq qurmağa kömək edən kiçik və fokuslanmış
              rəqəmsal agentlikdir. Biz inanırıq ki, yaxşı veb sayt səs-küylü
              olmur; aydın, sürətli və rahat şəkildə premium hiss yaradır.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              İstər ilk saytınızı yayıma çıxarırsınız, istər mövcud brendi
              yenidən düşünürsünüz, hər pikseli düşünülmüş hiss edən nəticə
              təqdim etmək üçün sizinlə başdan sona əməkdaşlıq edirik.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-10"
              aria-hidden
            />
            <div className="relative grid grid-cols-2 gap-3">
              {[
                { k: "Ustalıq", v: "Dizayn yönümlü yanaşma" },
                { k: "Sürət", v: "Yüngül və çevik təhvil" },
                { k: "Keyfiyyət", v: "Yoxlanılmış və test edilmiş" },
                { k: "Qayğı", v: "Uzunmüddətli tərəfdaş" },
              ].map((b) => (
                <div key={b.k} className="rounded-2xl glass p-5">
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
