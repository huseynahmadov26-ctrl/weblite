import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "SaaS",
    title: "Nimbus Analytics",
    desc: "Dashboard concept for a modern analytics platform.",
    hue: 18,
  },
  {
    tag: "E-Commerce",
    title: "Maison Noir",
    desc: "Editorial storefront for a luxury fashion label.",
    hue: 12,
  },
  {
    tag: "Studio",
    title: "Atelier 22",
    desc: "Portfolio site for an independent design studio.",
    hue: 26,
  },
  {
    tag: "Startup",
    title: "Orbit Mobile",
    desc: "Marketing site for a productivity app launch.",
    hue: 8,
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Concept Projects"
          title="A glimpse of what we can build for you"
          sub="A curated set of concept sites that showcase our design and engineering capabilities."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-card p-5 transition-soft hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 30% 20%, oklch(0.70 0.22 ${p.hue} / 0.55), transparent 60%), radial-gradient(ellipse at 80% 90%, oklch(0.50 0.18 ${p.hue} / 0.45), transparent 65%)`,
                  }}
                />
                <div className="absolute inset-6 glass rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-destructive/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/60" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="h-2 w-24 rounded-full bg-foreground/30" />
                  <div className="h-2 w-40 rounded-full bg-foreground/15" />
                  <div className="mt-auto flex gap-2">
                    <div className="h-6 w-20 rounded-full bg-gradient-primary/70 shadow-glow-sm" />
                    <div className="h-6 w-16 rounded-full bg-foreground/10" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-primary">
                    {p.tag}
                  </span>
                  <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full glass transition-soft group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
