const stats = [
  {
    v: 7,
    s: "d",
    label: "Sürətli Təhvil",
    sub: "Landing səhifəsinin yayıma çıxması üçün orta müddət",
  },
  {
    v: 100,
    s: "%",
    label: "Responsive Dizayn",
    sub: "Hər ekran və cihaz üçün uyğun görünüş",
  },
  {
    v: 100,
    s: "%",
    label: "Müştəri Yönümlü",
    sub: "Başdan sona xüsusi əməkdaşlıq",
  },
  {
    v: 12,
    s: "+",
    label: "Müasir Texnologiyalar",
    sub: "Etibarlı və real layihələr üçün hazır texnoloji baza",
  },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <div
            className="absolute -inset-x-20 -top-32 h-72 bg-gradient-primary opacity-10"
            aria-hidden
          />
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl md:text-6xl text-gradient-red">
                  {s.v}
                  {s.s}
                </div>
                <div className="mt-2 text-sm font-medium">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">
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
