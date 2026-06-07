import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tiers = [
  {
    name: "Basic",
    price: "300₼-600₼",
    desc: "Kiçik bizneslər üçün sürətli və peşəkar veb sayt həlli.",
    features: [
      "Əsas səhifə, Haqqımızda, Xidmətlər, Qalereya, Əlaqə",
      "Mobil uyğun (Responsive) dizayn",
      "Müasir və səliqəli interfeys",
      "WhatsApp və Zəng düymələri",
      "Sosial şəbəkə inteqrasiyası",
      "Əlaqə forması",
      "SSL təhlükəsizliyi (HTTPS)",
      "Domain və hosting qoşulması",
    ],
  },
  {
    name: "Standart",
    price: "900₼-1,700₼",
    featured: true,
    desc: "Böyüyən bizneslər üçün modern və SEO optimizəli həll.",
    features: [
      "Premium UI/UX dizayn",
      "SEO əsas optimizasiya",
      "Google title və meta description",
      "Sürət optimizasiyası",
      "WhatsApp, Zəng və Email düymələri",
      "Əlaqə forması",
      "Portfolio / Qalereya sistemi",
      "Animasiyalar və modern keçidlər",
      "SSL təhlükəsizliyi",
      "Domain və hosting tam konfiqurasiyası",
    ],
  },
  {
    name: "Premium",
    price: "2,000₼-3,000₼+",
    desc: "Admin panel və xüsusi funksiyalarla tam peşəkar sistem.",
    features: [
      "Fərdi UI/UX dizayn",
      "Admin İdarəetmə Paneli",
      "Məhsul və xidmət idarəetməsi",
      "Qiymət, şəkil və video yeniləmələri",
      "Blog sistemi",
      "Onlayn sifariş / müraciət sistemi",
      "Tam SEO optimizasiya",
      "Yüksək performans optimizasiyası",
      "Təhlükəsizlik həlləri",
      "Çoxdilli dəstək (AZ / RU / EN)",
      "Google Analytics inteqrasiyası",
      "Hosting və domain idarəetməsi",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-8xl px-6">
        <SectionHeading
          eyebrow="Qiymətlər"
          title="Sadə paketlər, şəffaf dəyər"
          sub="Final qiymət layihənin tələblərindən asılıdır — hər plan sizin layihənin miqyasına uyğun şəkildə fərdiləşdirilir."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`soft-card soft-card-hover relative p-9 flex flex-col justify-between min-h-[520px] ${
                t.featured
                  ? "border-primary/40 shadow-glow-sm scale-[1.02]"
                  : "border-border/70"
              }`}
            >
              {/* badge */}
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-medium text-primary-foreground shadow-glow-sm">
                  Ən çox seçilən
                </div>
              )}

              {/* title */}
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {t.name}
              </h3>

              {/* price (FIXED OVERFLOW) */}
              <div className="mt-5 flex items-baseline">
                <span className="font-display text-4xl md:text-5xl text-gradient leading-tight break-words whitespace-normal">
                  {t.price}
                </span>
              </div>

              {/* desc */}
              <p className="mt-4 text-sm text-muted-foreground">
                {t.desc}
              </p>

              {/* features */}
              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15 flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              {/* button */}
              <a
                href="#contact"
                className={`mt-9 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-soft ${
                  t.featured
                    ? "soft-button bg-gradient-primary text-primary-foreground hover:bg-primary-hover hover:bg-none"
                    : "glass hover:bg-surface-elevated"
                }`}
              >
                {t.name} paketini seç
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}