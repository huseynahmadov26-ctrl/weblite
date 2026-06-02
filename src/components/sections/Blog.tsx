import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Strategy",
    title: "Why Every Business Needs a Website",
    desc: "In 2026, your website is your most important sales asset. Here's why.",
    read: "4 min read",
    hue: 18,
  },
  {
    tag: "Design",
    title: "Modern Web Design Trends",
    desc: "Soft UI, glass surfaces and restrained motion are defining the new web.",
    read: "6 min read",
    hue: 12,
  },
  {
    tag: "Brand",
    title: "How a Professional Website Increases Trust",
    desc: "First impressions translate directly into conversions and credibility.",
    read: "5 min read",
    hue: 26,
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Journal" title="Notes from the studio" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-card transition-soft hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, oklch(0.70 0.22 ${p.hue} / 0.45), transparent 60%)`,
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-primary">{p.tag}</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="mt-3 text-lg font-medium leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary">
                  Read more{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
