import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Strategiya",
    title: "Niyə hər biznesin veb saytı olmalıdır?",
    desc: "2026-cı ildə veb sayt artıq əsas satış və etibar vasitəsidir.",
    content:
      "Veb sayt artıq sadəcə onlayn kartvizit deyil. O, 24/7 işləyən satış və təqdimat vasitəsidir. Müştərilər qərar verməzdən əvvəl ilk olaraq sizin saytınıza baxır. Peşəkar veb sayt etibar yaradır və satışları artırır.",
    read: "4 dəq oxu",
    hue: 18,
  },
  {
    tag: "Dizayn",
    title: "Müasir veb dizayn trendləri",
    desc: "Glass effektlər, minimal UI və yumşaq animasiyalar artıq standartdır.",
    content:
      "Müasir dizaynın əsası sadəlikdir. İstifadəçini yormayan, sürətli və aydın interfeyslər daha çox nəticə verir. Soft UI, micro-interactions və clean layout əsas trendlərdir.",
    read: "6 dəq oxu",
    hue: 12,
  },
  {
    tag: "Brend",
    title: "Peşəkar sayt etibarı necə artırır?",
    desc: "İlk təəssürat birbaşa müştəri qərarına təsir edir.",
    content:
      "İnsanlar bir sayta daxil olduqda ilk 3 saniyədə qərar verirlər. Yaxşı dizayn edilmiş sayt brendin ciddi və etibarlı olduğunu göstərir. Bu isə birbaşa satışa və müştəri çevrilməsinə təsir edir.",
    read: "5 dəq oxu",
    hue: 26,
  },
];

export function Blog() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="blog" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Bloq" title="Studio qeydləri" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => {
            const isOpen = openIndex === i;

            return (
              <article
                key={p.title}
                onClick={() => {
                  if (isOpen) {
                    setOpenIndex(null);
                  } else {
                    setOpenIndex(i);
                  }
                }}
                className="soft-card soft-card-hover group relative cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 50% 50%, oklch(0.70 0.22 ${p.hue} / 0.45), transparent 60%)`,
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="text-primary">{p.tag}</span>
                    <span>{p.read}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-medium leading-snug">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.desc}
                  </p>

                  <div
                    className={`mt-4 text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                      isOpen
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {p.content}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary">
                    {isOpen ? "Bağla" : "Daha çox oxu"}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
