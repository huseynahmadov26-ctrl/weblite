import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "SaaS",
    title: "Nimbus Analytics",
    desc: "Müasir analitika platforması üçün dashboard konsepti.",
    hue: 18,
  },
  {
    tag: "E-ticarət",
    title: "Maison Noir",
    desc: "Lüks moda brendi üçün editorial üslubda mağaza konsepti.",
    hue: 12,
  },
  {
    tag: "Studiya",
    title: "Atelier 22",
    desc: "Müstəqil dizayn studiyası üçün portfolio saytı.",
    hue: 26,
  },
  {
    tag: "Startup",
    title: "Orbit Mobile",
    desc: "Produktivlik tətbiqinin təqdimatı üçün marketinq saytı.",
    hue: 8,
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Konsept Layihələr"
          title="Sizin üçün nələr qura biləcəyimizə qısa baxış"
          sub="Dizayn və texniki imkanlarımızı göstərən seçilmiş konsept saytlar."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className="soft-card soft-card-hover group relative overflow-hidden px-5 py-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-primary">{p.tag}</span>
                  <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full glass transition-soft group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
