import { useMemo, useState } from "react";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const contacts = [
  {
    name: "Huseyn Ahmadov",
    phone: "+994 70 436 20 11",
    wa: "994704362011",
  },
  {
    name: "Omar Atakishiyev",
    phone: "+994 55 997 40 17",
    wa: "994559974017",
  },
];

export function Contact() {
  const [showChoices, setShowChoices] = useState(false);
  const [showWhatsappChoices, setShowWhatsappChoices] = useState(false);
  const [form, setForm] = useState({
    name: "John Doe",
    email: "kjhfda@gmail.com",
    subject: "Website project",
    details:
      "Hello Web Lite, I want a modern website for my business. Please contact me with details.",
  });

  const message = useMemo(
    () =>
      [
        `Ad: ${form.name}`,
        `Email: ${form.email}`,
        `Mövzu: ${form.subject}`,
        "",
        form.details,
      ].join("\n"),
    [form],
  );

  const encodedSubject = encodeURIComponent(form.subject);
  const encodedMessage = encodeURIComponent(message);
  const emailHref = `mailto:weblite280@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;

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
              setShowChoices(true);
              setShowWhatsappChoices(false);
            }}
            className="soft-card lg:col-span-3 p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Ad Soyad"
                name="name"
                value={form.name}
                onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
              />
            </div>

            <div className="mt-4">
              <Field
                label="Mövzu"
                name="subject"
                value={form.subject}
                onChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="details"
                className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
              >
                Layihə detalları
              </label>

              <textarea
                id="details"
                name="details"
                rows={5}
                required
                value={form.details}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, details: e.target.value }))
                }
                className="mt-2 w-full rounded-xl bg-input/60 border border-border/70 px-4 py-3 text-sm outline-none transition-soft focus:border-primary/60 focus:ring-glow"
              />
            </div>

            <button
              type="submit"
              className="soft-button mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover hover:bg-none"
            >
              Mesaj göndər
              <Send className="h-4 w-4" />
            </button>

            {showChoices && (
              <div className="mt-6 rounded-2xl border border-border/70 bg-surface/60 p-4">
                <p className="text-sm font-medium">Mesajı necə göndərmək istəyirsiniz?</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={emailHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition-soft hover:border-primary/40 hover:bg-surface-elevated"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowWhatsappChoices(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition-soft hover:border-primary/40 hover:bg-surface-elevated"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    WhatsApp
                  </button>
                </div>

                {showWhatsappChoices && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {contacts.map((contact) => (
                      <a
                        key={contact.name}
                        href={`https://wa.me/${contact.wa}?text=${encodedMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-border/70 bg-background/40 p-4 transition-soft hover:border-primary/40 hover:bg-surface-elevated"
                      >
                        <div className="text-sm font-medium">{contact.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {contact.phone}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
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
              href="https://wa.me/994704362011"
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp / Telefon - Omar Atakishiyev"
              value="+994 55 997 40 17"
              href="https://wa.me/994559974017"
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
  value,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
