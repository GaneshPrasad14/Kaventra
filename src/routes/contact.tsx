import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kaventra Global Traders" },
      {
        name: "description",
        content:
          "Let's talk about your sourcing requirements. Chennai, Tamil Nadu · Info@kaventraglobal.com",
      },
      { property: "og:title", content: "Contact — Kaventra Global Traders" },
      {
        property: "og:description",
        content: "Share your product interest and volume — we'll revert within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

const products = [
  "Turmeric",
  "Black Pepper",
  "Green Cardamom",
  "Red Chilli",
  "Moringa",
  "Multiple / Not sure",
] as const;

const volumes = ["Under 1 MT (sample)", "1 – 5 MT", "5 – 20 MT", "20 MT+ / Ongoing"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  company: z.string().trim().min(2, "Enter your company").max(120),
  email: z.string().trim().email("Enter a valid email").max(160),
  country: z.string().trim().min(2, "Enter destination country").max(80),
  product: z.enum(products),
  volume: z.enum(volumes),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-border bg-ink text-bone">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow text-turmeric">Contact</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Let's talk about your{" "}
            <span className="italic text-turmeric">sourcing requirements.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone/70">
            Share what you need — grade, destination port, order volume and
            timing. We'll revert within one business day with pricing, a lead
            sample and shipping windows.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          {/* Left column: contact details */}
          <aside className="space-y-8">
            <div>
              <p className="eyebrow text-turmeric">Head office</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-turmeric" />
                  <div>
                    <p className="font-medium text-foreground">Chennai, Tamil Nadu</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-turmeric" />
                  <a
                    href="mailto:Info@kaventraglobal.com"
                    className="text-sm font-medium text-foreground hover:text-turmeric"
                  >
                    Info@kaventraglobal.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-turmeric" />
                  <p className="text-sm text-muted-foreground">
                    +91 90031 70907
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow text-turmeric">Response time</p>
              <p className="mt-3 font-display text-3xl">≤ 1 business day</p>
              <p className="mt-2 text-sm text-muted-foreground">
                English · IST business hours (GMT+5:30). Prompt replies on
                WhatsApp for existing buyers.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow text-turmeric">Serving buyers in</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Germany", "Netherlands", "France", "United Kingdom", "USA", "Canada", "Japan", "UAE", "Saudi Arabia", "Qatar"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right column: form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-start rounded-3xl border border-border bg-card p-10">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-cardamom/15 text-cardamom">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-3xl">Thank you.</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Your enquiry has been received. A member of our trade desk
                  will revert within one business day with pricing and a
                  sample plan.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-border bg-card p-8 md:p-10"
                noValidate
              >
                <div className="grid gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name" name="name" error={errors.name} placeholder="Elena Müller" />
                    <Field label="Company" name="company" error={errors.company} placeholder="Global Spice Co." />
                    <Field label="Email" name="email" type="email" error={errors.email} placeholder="you@company.com" />
                    <Field label="Destination country" name="country" error={errors.country} placeholder="Germany" />
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Select label="Product interest" name="product" options={products as unknown as string[]} />
                    <Select label="Order volume" name="volume" options={volumes as unknown as string[]} />
                  </div>
                  <div>
                    <Label>Message (optional)</Label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={1200}
                      placeholder="Target specs, destination port, timeline…"
                      className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-turmeric"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink-2 sm:w-auto sm:self-start"
                  >
                    Send enquiry
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by our trade desk regarding your enquiry.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-turmeric ${
          error ? "border-chilli" : "border-input"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-chilli">{error}</p>}
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        defaultValue={options[0]}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-turmeric"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
