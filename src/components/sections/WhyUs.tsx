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
    t: "Modern Design",
    d: "Trend-aware aesthetics built around clarity and craft.",
  },
  {
    icon: Smartphone,
    t: "Mobile Responsive",
    d: "Pixel-perfect on every screen, from phones to ultra-wide.",
  },
  {
    icon: Zap,
    t: "Fast Delivery",
    d: "Lean process and tight loops — most sites ship in weeks.",
  },
  {
    icon: Search,
    t: "SEO Friendly",
    d: "Semantic markup, fast loads, and clean metadata baked in.",
  },
  {
    icon: Layers,
    t: "Scalable Solutions",
    d: "Architectures that grow with you, not against you.",
  },
  {
    icon: HeartHandshake,
    t: "Ongoing Support",
    d: "We stay around after launch to help your site evolve.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Why Web Lite"
          title="Premium quality, without the friction"
          sub="Every detail is engineered to feel light, fast, and effortlessly modern."
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
