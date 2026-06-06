import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tiers = [
  {
    name: "Əsas",
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

const extras = [
  {
    name: "Logo Dizayn",
    price: "30₼-120₼",
  },
  {
    name: "Vizitkart Dizayn",
    price: "20₼-60₼",
  },
  {
    name: "Instagram Dizayn Paketi",
    price: "40₼ - 150₼",
  },
];
export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Qiymətlər"
          title="Sadə paketlər, şəffaf dəyər"
          sub="Final pricing depends on project requirements — every plan is tailored to your scope."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-7 border transition-soft ${
                t.featured
                  ? "border-primary/40 bg-gradient-card shadow-glow-sm"
                  : "border-border/70 bg-gradient-card hover:border-primary/30"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-medium text-primary-foreground shadow-glow-sm">
                  Ən çox seçilən
                </div>
              )}
              <h3 className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl text-gradient">
                  {t.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-soft ${
                  t.featured
                    ? "bg-gradient-primary text-primary-foreground shadow-glow-sm hover:bg-primary-hover hover:bg-none"
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
