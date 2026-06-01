import { motion } from "motion/react";
import {
  Code2,
  Layout,
  Palette,
  RefreshCcw,
  Search,
  LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Custom-built sites engineered for speed, accessibility, and clean code.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    desc: "High-converting pages designed to launch products and capture attention.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Soft, refined interfaces with intuitive flows and a premium feel.",
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign",
    desc: "Modernize outdated sites with new layouts, performance, and polish.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical and on-page SEO so your site is found and trusted by Google.",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    desc: "Reliable post-launch maintenance, updates and ongoing improvements.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to launch online"
          sub="From a single landing page to a full digital presence — Web Lite covers every step."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-gradient-card border border-border/70 p-6 transition-soft hover:border-primary/40 hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-soft pointer-events-none"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.68 0.20 22 / 0.10), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass shadow-inner-soft group-hover:shadow-glow-sm transition-soft">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
