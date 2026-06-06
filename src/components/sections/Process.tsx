import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    t: "Kəşf",
    d: "Dizayna başlamazdan əvvəl məqsədlərinizi, auditoriyanızı və brendinizi öyrənirik.",
  },
  {
    n: "02",
    t: "Dizayn",
    d: "Hekayənizə uyğun yumşaq və səliqəli interfeyslər hazırlayırıq.",
  },
  {
    n: "03",
    t: "Hazırlanma",
    d: "Sürət, təhlükəsizlik və böyümə üçün müasir texnologiyalarla qurulur.",
  },
  {
    n: "04",
    t: "Test",
    d: "Fərqli cihazlarda yoxlama, performans auditi və son cilalama edilir.",
  },
  {
    n: "05",
    t: "Yayım və Dəstək",
    d: "Rahat yayım və istifadəyə verildikdən sonra davamlı əməkdaşlıq.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Proses"
          title="İdeyadan yayıma qədər düşünülmüş və rahat yol"
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden md:block h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="relative z-10 mx-auto md:mx-0 grid h-14 w-14 place-items-center rounded-full glass-strong ring-glow">
                  <span className="font-display text-lg text-gradient-red">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
