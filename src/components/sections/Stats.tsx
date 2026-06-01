import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

const stats = [
  {
    v: 7,
    s: "d",
    label: "Fast Delivery",
    sub: "Average time to launch a landing page",
  },
  {
    v: 100,
    s: "%",
    label: "Responsive Design",
    sub: "Across every screen and device",
  },
  {
    v: 100,
    s: "%",
    label: "Client Focused",
    sub: "Dedicated partnership end-to-end",
  },
  {
    v: 12,
    s: "+",
    label: "Modern Technologies",
    sub: "Trusted, production-grade stack",
  },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <div className="absolute -inset-x-20 -top-32 h-72 bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl md:text-6xl text-gradient-red">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm font-medium">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
