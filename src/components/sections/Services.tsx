import {
  Code2,
  Layout,
  Palette,
  RefreshCcw,
  Search,
  LifeBuoy,
  ShieldCheck
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Biznes Saytlarının Hazırlanması",
    desc: "Brendinizi peşəkar təqdim edən, sürətli və müasir biznes veb saytları hazırlayırıq.",
  },
  {
    icon: Layout,
    title: "Landing Page & E-commerce ",
    desc: "Satış yönümlü landing səhifələr və tam funksional onlayn mağazalar yaradırıq.",
  },
  {
    icon: ShieldCheck,
    title: "Admin panel, Login/Register sistemi",
    desc: "Login/Register və idarəetmə panelləri ilə tam funksional veb sistemlər hazırlayırıq.",
  },
  {
    icon: Palette,
    title: "Responsive UI/UX Dizayn",
    desc: "Bütün cihazlara uyğun, müasir və istifadəçi yönümlü interfeyslər dizayn edirik.",
  },
  {
    icon: Search,
    title: "SEO optimizasiya & Sayt sürəti",
    desc: "Google görünürlüğünü artırır, sayt sürətini və texniki keyfiyyəti optimallaşdırırıq.",
  },
  {
    icon: LifeBuoy,
    title: "Domain-hosting & Texniki dəstək",
    desc: "Saytın yayımlanması, hosting qurulumu və davamlı texniki dəstək göstəririk.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Xidmətlər"
          title="Onlayn biznesə başlamaq üçün lazım olan hər şey"
          sub="Tək bir landing səhifəsindən tam rəqəmsal sistemə qədər Web Lite bütün prosesi sizin üçün hazırlayır."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="soft-card soft-card-hover group relative p-6"
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