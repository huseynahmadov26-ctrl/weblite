import {
  Sparkles,
  Smartphone,
  Zap,
  Search,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Sparkles,
    t: "Müasir Dizayn",
    d: "Aydınlıq və peşəkarlıq üzərində qurulan trendə uyğun estetika.",
  },
  {
    icon: Smartphone,
    t: "Mobil Uyğunluq",
    d: "Telefondan ultra-geniş ekranlara qədər hər ölçüdə dəqiq görünüş.",
  },
  {
    icon: Zap,
    t: "Sürətli Təhvil",
    d: "Sadə proses və çevik iş axını ilə saytların çoxu bir neçə həftəyə hazır olur.",
  },
  {
    icon: Search,
    t: "SEO Uyğun",
    d: "Semantik struktur, sürətli yüklənmə və təmiz metadata əsasdan qurulur.",
  },
  {
    icon: Layers,
    t: "Ölçülə Bilən Həllər",
    d: "Sizinlə birlikdə böyüyən, sizi məhdudlaşdırmayan arxitektura.",
  },
  {
    icon: HeartHandshake,
    t: "Davamlı Dəstək",
    d: "Yayımdan sonra da saytınızın inkişafına kömək etmək üçün yanınızdayıq.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Niyə Web Lite"
          title="Çətinliksiz premium keyfiyyət"
          sub="Hər detal yüngül, sürətli və rahat modern hiss yaratmaq üçün hazırlanır."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.t}
              className="group relative bg-background p-7 hover:bg-surface transition-soft"
            >
              <it.icon className="h-5 w-5 text-primary transition-soft group-hover:scale-110" />
              <h3 className="mt-5 text-base font-medium">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
