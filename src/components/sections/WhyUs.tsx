import {
  Sparkles,
  Zap,
  Palette,
  TrendingUp,
  DollarSign,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Zap,
    t: "Sürətli İnkişaf",
    d: "Fikirlərinizi gecikdirmədən real, işlək və nəticə verən veb həllərə çeviririk.",
  },
  {
    icon: Sparkles,
    t: "Müasir Texnologiyalar",
    d: "Ən yeni texnologiyalarla rəqabətdə sizi bir addım öndə saxlayırıq.",
  },
  {
    icon: Palette,
    t: "Premium Dizayn",
    d: "Brendinizə uyğun, estetik və istifadəçi yönümlü interfeyslər hazırlayırıq.",
  },
  {
    icon: ShieldCheck,
    t: "Gələcək Yönümlü Sistemlər",
    d: "Dayanıqlı və genişlənə bilən sistemlər quraraq uzunmüddətli istifadə təmin edirik.",
  },
  {
    icon: TrendingUp,
    t: "Satışda Artım",
    d: "Dizayn və struktur optimizasiyası ilə müştəri çevirmə (conversion) səviyyəsini artırırıq.",
  },
  {
    icon: DollarSign,
    t: "Münasib Qiymət",
    d: "Yüksək keyfiyyəti büdcəyə uyğun şəkildə təqdim edirik.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Niyə Web Lite"
          title="Niyə bizimlə çalışmalısınız?"
          sub="Sizin brendiniz üçün sürətli, müasir və nəticə yönümlü veb həllər təqdim edirik."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.t}
              className="soft-card soft-card-hover group relative p-7"
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
