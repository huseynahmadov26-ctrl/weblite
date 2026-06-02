import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    desc: "A polished single-page presence for new ventures.",
    features: [
      "1-page modern site",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "1 round of revisions",
    ],
  },
  {
    name: "Business",
    price: "$1,499",
    featured: true,
    desc: "A complete multi-page website for growing brands.",
    features: [
      "Up to 6 pages",
      "Custom UI design",
      "On-page SEO",
      "CMS integration",
      "Performance tuning",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    price: "$3,499+",
    desc: "Tailored experiences with advanced features.",
    features: [
      "Unlimited pages",
      "Custom animations",
      "Advanced SEO + analytics",
      "Integrations & APIs",
      "Ongoing support plan",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans, transparent value"
          sub="Final pricing depends on project requirements — every plan is tailored to your scope."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-7 border transition-soft ${
                t.featured
                  ? "border-primary/40 bg-gradient-card shadow-glow"
                  : "border-border/70 bg-gradient-card hover:border-primary/30"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-medium text-primary-foreground shadow-glow-sm">
                  Most Popular
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
                    ? "bg-gradient-primary text-primary-foreground shadow-glow-sm hover:shadow-glow"
                    : "glass hover:bg-surface-elevated"
                }`}
              >
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
