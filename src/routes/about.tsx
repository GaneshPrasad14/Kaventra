import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FlaskConical,
  MapPinned,
  PackageCheck,
  MessageSquare,
  Sprout,
  Filter,
  ShieldCheck,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import shipping from "@/assets/shipping.jpg";
import spices from "@/assets/spices-flatlay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Supply Chain — Kaventra Global Traders" },
      {
        name: "description",
        content:
          "A Chennai-based export house built on quality control, batch traceability, freight-grade packaging and direct communication with international buyers.",
      },
      { property: "og:title", content: "About & Supply Chain — Kaventra Global Traders" },
      {
        property: "og:description",
        content:
          "Consistent, transparent and easy to work with across every shipment. See how we source, grade, test, pack and ship.",
      },
    ],
  }),
  component: AboutPage,
});

const commitments = [
  {
    icon: FlaskConical,
    title: "Quality Control",
    body:
      "Every lot is lab-checked against the declared spec sheet before it is packed — moisture, active compound, mesh, microbial load and Aflatoxin.",
  },
  {
    icon: MapPinned,
    title: "Traceability",
    body:
      "Batch-level origin records travel with every shipment — farm cluster, harvest window, processing lot and export date.",
  },
  {
    icon: PackageCheck,
    title: "Freight-Grade Packaging",
    body:
      "Moisture-barrier liners inside food-grade jute or PP bags — engineered to survive a 30–45 day ocean journey without absorbing container humidity.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    body:
      "One accountable point of contact from RFQ to bill of lading. English, WhatsApp, email, video call — whichever way you work.",
  },
];

const workflow = [
  {
    icon: Sprout,
    title: "Sourcing",
    body:
      "Direct relationships with grower clusters in Tamil Nadu and Kerala — Erode, Alleppey, Wayanad, Idukki, Guntur, Byadgi.",
  },
  {
    icon: Filter,
    title: "Grading & Cleaning",
    body:
      "Machine grading, gravity separation and destoning to the mesh and bulk-density spec each customer requires.",
  },
  {
    icon: FlaskConical,
    title: "Lab Testing",
    body:
      "Curcumin, piperine, volatile oil, Aflatoxin, ETO residue, Sudan dyes and pesticide MRLs — tested per shipment.",
  },
  {
    icon: PackageCheck,
    title: "Export Packaging",
    body:
      "Barrier-liner bagging, container fumigation where required, and pallet/loading plans that match your CFS.",
  },
  {
    icon: Truck,
    title: "Shipment & Docs",
    body:
      "Full export doc pack — Phyto, COO, COA, packing list, BL — with pre-alerts sent as the container leaves Chennai.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="container-x grid gap-14 py-24 md:py-32 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div className="animate-fade-up">
            <p className="eyebrow text-turmeric">Who we are</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
              A Chennai-based export house — built to be{" "}
              <span className="italic text-turmeric">consistent, transparent</span>{" "}
              and easy to work with across every shipment.
            </h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-bone/70">
            Kaventra Global Traders was formed to fix what still frustrates
            buyers of Indian spices: inconsistent quality across lots, poor
            packaging that arrives compromised, and layers of intermediaries
            that make simple communication hard. We do the opposite.
          </p>
        </div>
        <div className="container-x pb-24">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={shipping}
              alt="Container port at night with spice shipment loading"
              width={1600}
              height={900}
              className="h-[280px] w-full object-cover md:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-turmeric">Our four commitments</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              The promises that ship in every container.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {commitments.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.19_0.03_260_/_0.25)]"
            >
              <div className="flex items-start gap-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    0{i + 1} / 04
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-x py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-turmeric">How we work</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Five steps, one accountable trail.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Each step generates a document. You receive them all —
                nothing about your shipment lives inside a black box.
              </p>
              <img
                src={spices}
                alt="Indian spices flat lay"
                loading="lazy"
                width={1600}
                height={1200}
                className="mt-10 hidden rounded-2xl border border-border lg:block"
              />
            </div>

            <ol className="relative border-l border-border pl-8">
              {workflow.map((w, i) => (
                <li key={w.title} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border border-border bg-background">
                    <ShieldCheck className="h-3.5 w-3.5 text-turmeric" />
                  </span>
                  <p className="font-mono text-xs text-muted-foreground">
                    STEP {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <w.icon className="h-5 w-5 text-turmeric" />
                    <h3 className="font-display text-2xl">{w.title}</h3>
                  </div>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-bone md:p-16">
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-turmeric/25 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-turmeric">Work with us</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Tell us what you need — we'll send a lead sample.
              </h2>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-turmeric px-6 py-3.5 text-sm font-semibold text-ink hover:scale-[1.02]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
