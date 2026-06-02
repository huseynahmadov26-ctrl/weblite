import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most landing pages launch within 1–2 weeks. Multi-page sites typically take 3–6 weeks depending on scope and content readiness.",
  },
  {
    q: "Is hosting included?",
    a: "We can recommend and set up hosting that fits your project — from edge platforms like Vercel and Cloudflare to traditional providers. Hosting costs are billed separately.",
  },
  {
    q: "Can I request changes later?",
    a: "Absolutely. Every project includes a revision window, and we offer ongoing support plans for continuous improvements after launch.",
  },
  {
    q: "How does payment work?",
    a: "We usually split projects into a 50% deposit to start and the remaining balance on launch. Larger projects can be broken into milestone-based payments.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-12 divide-y divide-border/70 rounded-3xl glass">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-soft hover:bg-surface/40"
                >
                  <span className="font-medium">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full glass transition-soft ${isOpen ? "rotate-45 bg-gradient-primary text-primary-foreground" : ""}`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-soft ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
