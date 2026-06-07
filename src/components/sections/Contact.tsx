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
    name: "",
    email: "",
    subject: "",
    details:
      "",
  });

  const message = useMemo(() => {
    return [
      `Ad: ${form.name}`,
      `Email: ${form.email}`,
      `Mövzu: ${form.subject}`,
      "",
      form.details,
    ].join("\n");
  }, [form]);

  const encodedSubject = encodeURIComponent(form.subject);
  const encodedMessage = encodeURIComponent(message);

  // ✅ stable gmail url
  const gmailUrl = useMemo(() => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=weblite280@gmail.com&su=${encodedSubject}&body=${encodedMessage}`;
  }, [encodedSubject, encodedMessage]);

  // 🔥 IMPORTANT: stable open function
  const openGmail = () => {
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = gmailUrl;
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Əlaqə"
          title="Gəlin birlikdə premium bir layihə yaradaq"
          sub="Layihəniz haqqında bizə yazın. Adətən 1 iş günü ərzində cavab veririk."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* FORM */}
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
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, name: value }))
                }
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, email: value }))
                }
              />
            </div>

            <div className="mt-4">
              <Field
                label="Mövzu"
                name="subject"
                value={form.subject}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, subject: value }))
                }
              />
            </div>

            <div className="mt-4">
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Layihə detalları
              </label>

              <textarea
                rows={5}
                value={form.details}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, details: e.target.value }))
                }
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white"
            >
              Mesaj göndər
              <Send className="h-4 w-4" />
            </button>

            {/* CHOICES */}
            {showChoices && (
              <div className="mt-6 rounded-2xl border p-4">
                <p className="text-sm font-medium">
                  Mesajı necə göndərmək istəyirsiniz?
                </p>

                <div className="mt-4 flex gap-3">
                  {/* EMAIL FIXED */}
                  <button
                    type="button"
                    onClick={openGmail}
                    className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    Gmail
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowWhatsappChoices(true)}
                    className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </button>
                </div>

                {showWhatsappChoices && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {contacts.map((c) => (
                      <a
                        key={c.name}
                        href={`https://wa.me/${c.wa}?text=${encodedMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border p-4"
                      >
                        <div className="text-sm font-medium">{c.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {c.phone}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </form>

          {/* CONTACT CARDS */}
          <div className="lg:col-span-2 grid gap-4">
            <ContactCard
              icon={Mail}
              label="Email"
              value="weblite280@gmail.com"
              onClick={openGmail}
            />

            <ContactCard
              icon={MessageCircle}
              label="WhatsApp - Huseyn"
              value="+994 70 436 20 11"
              href="https://wa.me/994704362011"
            />

            <ContactCard
              icon={MessageCircle}
              label="WhatsApp - Omar"
              value="+994 55 997 40 17"
              href="https://wa.me/994559974017"
            />

            <ContactCard
              icon={Instagram}
              label="Instagram"
              value="@weblite.az"
              href="https://instagram.com/weblite.az"
            />
            <ContactCard
              icon={Instagram}
              label="TikTok"
              value="@weblite.az"
              href="https://www.tiktok.com/@weblite.az?_r=1&_t=ZS-970uFWa6aNZ"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* FIELD */
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
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border px-4 py-3 text-sm"
      />
    </div>
  );
}

/* CONTACT CARD */
function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  onClick,
}: any) {
  const props = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : { onClick };

  return (
    <a
      {...props}
      className="flex items-center gap-4 rounded-xl border p-5 cursor-pointer"
    >
      <Icon className="h-5 w-5 text-primary" />
      <div>
        <div className="text-xs uppercase text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}