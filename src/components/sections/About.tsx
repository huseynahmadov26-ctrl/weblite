import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-primary shadow-glow-sm" />
              About
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-gradient">
              A growing studio shaping the modern web
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Web Lite is a small, focused digital agency helping businesses
              build a strong online presence through refined design and modern
              engineering. We believe great websites aren't loud — they're
              clear, fast, and effortlessly premium.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're launching your first site or rethinking an existing
              brand, we partner with you end-to-end to deliver work that feels
              considered in every pixel.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-25 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-3">
              {[
                { k: "Craft", v: "Design-led approach" },
                { k: "Speed", v: "Lightweight delivery" },
                { k: "Quality", v: "Audited & tested" },
                { k: "Care", v: "Long-term partner" },
              ].map((b) => (
                <div key={b.k} className="rounded-2xl glass p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-primary">
                    {b.k}
                  </div>
                  <div className="mt-2 font-medium">{b.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
