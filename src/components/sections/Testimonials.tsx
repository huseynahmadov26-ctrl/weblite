import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    q: "Web Lite delivered a site that finally matches our brand. It feels fast, polished, and unmistakably us.",
    n: "Amelia Hart",
    r: "Founder, North & Field",
  },
  {
    q: "Working with the team felt effortless. Crisp design, clear communication and an obsession with detail.",
    n: "Daniel Okafor",
    r: "CEO, Layer Studio",
  },
  {
    q: "Our conversion rate doubled within a month. The new site is genuinely a business asset.",
    n: "Sara Lindqvist",
    r: "Marketing Lead, Mosaic",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="Words from the people we work with"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.n}
              className="rounded-3xl glass p-7 flex flex-col gap-6"
            >
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="text-base leading-relaxed text-foreground/90">
                "{t.q}"
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 rounded-full bg-gradient-primary shadow-glow-sm grid place-items-center text-primary-foreground font-display">
                  {t.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
