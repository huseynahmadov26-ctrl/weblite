import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    q: "Web Lite nəhayət brendimizə uyğun gələn bir sayt hazırladı. Sayt sürətli, səliqəli və tam bizim üslubumuzdadır.",
    n: "Amelia Hart",
    r: "Təsisçi, North & Field",
  },
  {
    q: "Komanda ilə işləmək çox rahat idi. Təmiz dizayn, aydın ünsiyyət və detallara xüsusi diqqət.",
    n: "Daniel Okafor",
    r: "CEO, Layer Studio",
  },
  {
    q: "Konversiya göstəricimiz bir ay ərzində iki dəfə artdı. Yeni sayt həqiqətən biznes üçün dəyərli aktivdir.",
    n: "Sara Lindqvist",
    r: "Marketinq rəhbəri, Mosaic",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Rəylər"
          title="Birlikdə işlədiyimiz insanların fikirləri"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.n}
              className="soft-card soft-card-hover p-7 flex flex-col gap-6"
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
