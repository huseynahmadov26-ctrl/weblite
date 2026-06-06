import {
  Code2,
  Layout,
  Palette,
  RefreshCcw,
  Search,
  LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Veb Sayt Hazırlanması",
    desc: "Sürət, əlçatanlıq və təmiz kod üçün xüsusi hazırlanmış veb saytlar.",
  },
  {
    icon: Layout,
    title: "Landing Səhifələri",
    desc: "Məhsulları təqdim etmək və diqqət cəlb etmək üçün yüksək nəticəli səhifələr.",
  },
  {
    icon: Palette,
    title: "UI / UX Dizayn",
    desc: "Rahat axınlara və premium hissə malik yumşaq, səliqəli interfeyslər.",
  },
  {
    icon: RefreshCcw,
    title: "Veb Sayt Yenilənməsi",
    desc: "Köhnə saytları yeni struktur, performans və peşəkar görünüşlə modernləşdiririk.",
  },
  {
    icon: Search,
    title: "SEO Optimizasiyası",
    desc: "Saytınızın Google-da tapılması və etibar qazanması üçün texniki və səhifədaxili SEO.",
  },
  {
    icon: LifeBuoy,
    title: "Texniki Dəstək",
    desc: "Yayımdan sonra etibarlı baxım, yeniləmələr və davamlı təkmilləşdirmələr.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Xidmətlər"
          title="Onlayn başlamaq üçün lazım olan hər şey"
          sub="Tək bir landing səhifəsindən tam rəqəmsal mövcudluğa qədər Web Lite hər addımı əhatə edir."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl bg-gradient-card border border-border/70 p-6 transition-soft hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass shadow-inner-soft transition-soft group-hover:bg-surface-elevated">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
