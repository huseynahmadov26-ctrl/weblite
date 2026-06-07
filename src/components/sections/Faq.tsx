import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Veb sayt hazırlanması nə qədər çəkir?",
    a: "Əksər landing səhifələr 1–2 həftəyə hazır olur. Çoxsəhifəli və daha kompleks layihələr isə 3–6 həftə arası vaxt ala bilər.",
  },
  {
    q: "Hosting daxildirmi?",
    a: "Biz layihənizə uyğun hosting seçimini tövsiyə edir və quraşdırmanı edirik. Vercel, Cloudflare və ya digər providerlərdən istifadə edilə bilər. Hosting xərcləri ayrıca hesablanır.",
  },
  {
    q: "Sonradan dəyişiklik etmək mümkündürmü?",
    a: "Bəli. Hər layihədə müəyyən düzəliş müddəti mövcuddur. Bundan əlavə, istəyinizə uyğun davamlı dəstək xidmətləri də təklif edirik.",
  },
  {
    q: "Ödəniş necə həyata keçirilir?",
    a: "Adətən 50% öncədən ödəniş, qalan hissə isə sayt tamamlandıqdan sonra ödənilir. Böyük layihələr mərhələli ödənişlə bölünə bilər.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="FAQ" title="Tez-tez verilən suallar" />

        <div className="soft-card mt-12 divide-y divide-border/70 overflow-hidden">
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
                    className={`grid h-8 w-8 place-items-center rounded-full glass transition-soft ${
                      isOpen
                        ? "rotate-45 bg-gradient-primary text-primary-foreground"
                        : ""
                    }`}
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
