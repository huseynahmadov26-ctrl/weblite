const stats = [
  {
    v: 7,
    s: "gün",
    label: "Sürətli təhvil",
    sub: "Landing səhifələrin orta hazırlanma müddəti",
  },
  {
    v: 100,
    s: "%",
    label: "Responsive dizayn",
    sub: "Bütün cihazlarda mükəmməl uyğun görünüş",
  },
  {
    v: 100,
    s: "%",
    label: "Müştəri məmnuniyyəti",
    sub: "Başdan sona fokuslanmış əməkdaşlıq prosesi",
  },
  {
    v: 12,
    s: "+",
    label: "Texnologiya və alətlər",
    sub: "Müasir və etibarlı development stack",
  },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">

        <div className="soft-card relative overflow-hidden p-8 md:p-12">

          <div
            className="absolute inset-0 bg-gradient-primary opacity-5"
            aria-hidden
          />

          <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">

            {stats.map((s) => (
              <div key={s.label} className="relative">

                {/* value */}
                <div className="font-display text-5xl md:text-6xl text-gradient-red leading-none">
                  {s.v}
                  <span className="text-3xl md:text-4xl ml-1 text-foreground">
                    {s.s}
                  </span>
                </div>

                {/* label */}
                <div className="mt-3 text-sm font-medium text-foreground">
                  {s.label}
                </div>

                {/* sub */}
                <div className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                  {s.sub}
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
