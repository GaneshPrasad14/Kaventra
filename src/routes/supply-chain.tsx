import { createFileRoute } from "@tanstack/react-router";
import {
  Sprout,
  Filter,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import spices from "@/assets/spices-flatlay.jpg";

export const Route = createFileRoute("/supply-chain")({
  head: () => ({
    meta: [
      { title: "Supply Chain — Kaventra Global Traders" },
      {
        name: "description",
        content:
          "Five steps, one accountable trail. See how we source, grade, test, pack and ship.",
      },
      { property: "og:title", content: "Supply Chain — Kaventra Global Traders" },
      {
        property: "og:description",
        content:
          "Each step generates a document. You receive them all — nothing about your shipment lives inside a black box.",
      },
    ],
  }),
  component: SupplyChainPage,
});

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

function SupplyChainPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-ink text-bone">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow text-turmeric">Supply Chain</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Five steps, <span className="italic text-turmeric">one accountable trail.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone/70">
            Each step generates a document. You receive them all —
            nothing about your shipment lives inside a black box.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-secondary/20">
        <div className="container-x py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <img
                src={spices}
                alt="Indian spices flat lay"
                loading="lazy"
                width={1600}
                height={1200}
                className="rounded-3xl border border-border"
              />
            </div>

            <ol className="relative border-l border-border pl-8 ml-4 lg:ml-0">
              {workflow.map((w, i) => (
                <li key={w.title} className="relative pb-16 last:pb-0">
                  <span className="absolute -left-[49px] grid h-10 w-10 place-items-center rounded-full border-4 border-background bg-border">
                    <ShieldCheck className="h-4 w-4 text-turmeric" />
                  </span>
                  <p className="font-mono text-xs text-muted-foreground">
                    STEP {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-card border border-border shadow-sm">
                      <w.icon className="h-5 w-5 text-turmeric" />
                    </div>
                    <h3 className="font-display text-3xl">{w.title}</h3>
                  </div>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground pl-15">
                    {w.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
