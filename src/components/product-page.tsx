import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export type SpecRow = { label: string; value: string };
export type Variety = {
  name: string;
  tagline: string;
  highlight?: string;
  specs: SpecRow[];
  tier?: "standard" | "premium" | "flagship";
};

export type ProductPageProps = {
  eyebrow: string;
  name: string;
  botanical: string;
  intro: string;
  image: string;
  imageAlt: string;
  standardSpecs: SpecRow[];
  varieties: Variety[];
  notes?: ReactNode;
};

const tierStyles: Record<NonNullable<Variety["tier"]>, { chip: string; edge: string }> = {
  standard: { chip: "bg-muted text-muted-foreground", edge: "" },
  premium: {
    chip: "bg-cardamom/15 text-cardamom",
    edge: "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-cardamom",
  },
  flagship: {
    chip: "bg-turmeric/20 text-ink",
    edge: "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-turmeric",
  },
};

export function ProductPage(p: ProductPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `linear-gradient(90deg, oklch(0.19 0.03 260 / 0.95) 0%, oklch(0.19 0.03 260 / 0.55) 45%, transparent 100%), url(${p.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-x relative grid gap-8 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr]">
          <div className="animate-fade-up">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-bone/60 hover:text-bone"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All products
            </Link>
            <p className="eyebrow mt-6 text-turmeric">{p.eyebrow}</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl">{p.name}</h1>
            <p className="mt-3 text-sm italic text-bone/60">{p.botanical}</p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/80">
              {p.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Standard technical data */}
      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow text-turmeric">Technical Data — Standard</p>
            <h2 className="mt-3 font-display text-4xl">
              The baseline every shipment meets.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Lab-tested against declared specs before packing. Third-party
              verification available on request.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <dl className="divide-y divide-border">
              {p.standardSpecs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[1fr_1.5fr] items-baseline gap-4 px-6 py-5 md:grid-cols-[1fr_2fr]"
                >
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="font-mono text-sm text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Varieties */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-x py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-turmeric">Grades & Varieties</p>
              <h2 className="mt-3 font-display text-4xl">
                Choose the grade for your market.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Every grade ships with its own COA, batch traceability record and
              freight-grade moisture-barrier liner.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {p.varieties.map((v) => {
              const tier = v.tier ?? "standard";
              const s = tierStyles[tier];
              return (
                <article
                  key={v.name}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.19_0.03_260_/_0.25)] ${s.edge}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${s.chip}`}
                      >
                        {tier === "flagship" ? "Flagship" : tier === "premium" ? "Premium" : "Standard"}
                      </span>
                      <h3 className="mt-4 font-display text-2xl leading-tight">{v.name}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{v.tagline}</p>
                    </div>
                    {v.highlight && (
                      <div className="text-right">
                        <p className="font-display text-3xl leading-none text-turmeric">
                          {v.highlight.split(" ")[0]}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                          {v.highlight.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    )}
                  </div>

                  <dl className="mt-8 divide-y divide-border rounded-xl bg-secondary/60">
                    {v.specs.map((sp) => (
                      <div
                        key={sp.label}
                        className="grid grid-cols-[1fr_1.4fr] items-baseline gap-3 px-4 py-3"
                      >
                        <dt className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                          {sp.label}
                        </dt>
                        <dd className="font-mono text-sm text-foreground">{sp.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              );
            })}
          </div>

          {p.notes && (
            <div className="mt-12 rounded-2xl border border-border bg-card p-8">
              {p.notes}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-bone md:p-16">
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-turmeric/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cardamom/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-turmeric">Request pricing</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Ready to source {p.name.toLowerCase()}?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/70">
                Share your target grade, destination port and volume. We'll
                revert within one business day with FOB / CIF pricing, a lead
                sample and available shipping windows.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-bone/80 sm:grid-cols-2">
                {[
                  "Pre-shipment sample",
                  "Full COA + origin record",
                  "FOB Chennai / CIF terms",
                  "MOQ 1MT and above",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-turmeric" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-turmeric px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
