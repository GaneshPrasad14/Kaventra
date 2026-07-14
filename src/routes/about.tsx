import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FlaskConical,
  MapPinned,
  PackageCheck,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import shipping from "@/assets/shipping.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kaventra Global Traders" },
      {
        name: "description",
        content:
          "A Chennai-based export house built on quality control, batch traceability, freight-grade packaging and direct communication with international buyers.",
      },
      { property: "og:title", content: "About Us — Kaventra Global Traders" },
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


function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="container-x grid gap-14 py-24 md:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="animate-fade-up">
            <p className="eyebrow text-turmeric">Who we are</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              A Chennai-based export house built around one problem worth solving
            </h1>
            <div className="mt-10 space-y-6 text-sm leading-relaxed text-bone/80 md:text-base">
              <p>
                Kaventra Global Traders was founded in Chennai to give international buyers of Indian spices and botanicals something the industry has historically made difficult to find: a supplier that is consistent, transparent, and easy to work with across every shipment — not just the first one.
              </p>
              <p>
                We work directly with growers and regional aggregators across South India's principal spice belts — the turmeric fields of Erode, the pepper and cardamom estates of Kerala's high ranges, and the chilli tracts of Andhra Pradesh — and manage cleaning, grading, packaging, and export documentation in-house, so buyers deal with one accountable partner rather than a chain of intermediaries.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
            <div>
              <p className="eyebrow text-turmeric">Our Vision</p>
              <p className="mt-4 text-base leading-relaxed text-bone sm:text-lg">
                To become a premium global exporter — evolving with the times and exploring new horizons in agriculture, spices, and wellness, to deliver uncompromising quality to the world.
              </p>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <p className="eyebrow text-turmeric">Our Mission</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/80 sm:text-base">
                At Kaventra Global Traders, we bridge India's rich agricultural heritage with global markets — delivering responsibly sourced spices, produce, and wellness ingredients through rigorous quality control, complete traceability, and export-grade packaging. We build lasting partnerships rooted in trust, consistency, and mutual growth.
              </p>
            </div>
          </div>
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
