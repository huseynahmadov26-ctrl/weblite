import { useState } from "react";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Əlaqə"
          title="Gəlin birlikdə premium bir layihə yaradaq"
          sub="Layihəniz haqqında bizə yazın. Adətən 1 iş günü ərzində cavab veririk."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="soft-card lg:col-span-3 p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ad Soyad" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>

            <div className="mt-4">
              <Field label="Mövzu" name="subject" />
            </div>

            <div className="mt-4">
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Layihə detalları
              </label>

              <textarea
                rows={5}
                required
                className="mt-2 w-full rounded-xl bg-input/60 border border-border/70 px-4 py-3 text-sm outline-none transition-soft focus:border-primary/60 focus:ring-glow"
                placeholder="Hədəfinizi, auditoriyanızı və nə istədiyinizi yazın…"
              />
            </div>

            <button
              type="submit"
              className="soft-button mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover hover:bg-none"
            >
              {sent ? "Mesaj göndərildi — təşəkkür edirik" : "Mesaj göndər"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="lg:col-span-2 grid gap-4 content-start">
            <ContactCard
              icon={Mail}
              label="Email"
              value="weblite280@gmail.com"
              href="mailto:weblite280@gmail.com"
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp / Telefon - Huseyn Ahmadov"
              value="+994 70 436 20 11"
              href="https://wa.me/9940704362011"
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp / Telefon - Omar Atakishiyev"
              value="+994 55 997 40 17"
              href="https://wa.me/9940559974017"
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value="@weblite.az"
              href="https://instagram.com/weblite.az"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl bg-input/60 border border-border/70 px-4 py-3 text-sm outline-none transition-soft focus:border-primary/60 focus:ring-glow"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="soft-card soft-card-hover group flex items-center gap-4 p-5"
    >
      <Icon className="h-5 w-5 text-primary" />

      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}
