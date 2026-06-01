import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "We learn your goals, audience and brand before touching pixels.",
  },
  {
    n: "02",
    t: "Design",
    d: "Soft, refined interfaces shaped around your story.",
  },
  {
    n: "03",
    t: "Development",
    d: "Built with modern stacks for speed, security and scale.",
  },
  {
    n: "04",
    t: "Testing",
    d: "Cross-device QA, performance audits and polish.",
  },
  {
    n: "05",
    t: "Launch & Support",
    d: "Smooth deploy and continued partnership after go-live.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Process"
          title="A calm, considered path from idea to launch"
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden md:block h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto md:mx-0 grid h-14 w-14 place-items-center rounded-full glass-strong ring-glow">
                  <span className="font-display text-lg text-gradient-red">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
