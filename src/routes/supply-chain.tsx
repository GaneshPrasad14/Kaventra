import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Filter,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import img1 from "@/assets/supply_sourcing.png";
import img2 from "@/assets/supply_grading.png";
import img3 from "@/assets/supply_testing.png";
import img4 from "@/assets/supply_packaging.png";
import img5 from "@/assets/supply_shipping.png";

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
    img: img1
  },
  {
    icon: Filter,
    title: "Grading & Cleaning",
    body:
      "Machine grading, gravity separation and destoning to the mesh and bulk-density spec each customer requires.",
    img: img2
  },
  {
    icon: FlaskConical,
    title: "Lab Testing",
    body:
      "Curcumin, piperine, volatile oil, Aflatoxin, ETO residue, Sudan dyes and pesticide MRLs — tested per shipment.",
    img: img3
  },
  {
    icon: PackageCheck,
    title: "Export Packaging",
    body:
      "Barrier-liner bagging, container fumigation where required, and pallet/loading plans that match your CFS.",
    img: img4
  },
  {
    icon: Truck,
    title: "Shipment & Docs",
    body:
      "Full export doc pack — Phyto, COO, COA, packing list, BL — with pre-alerts sent as the container leaves Chennai.",
    img: img5
  },
];

function SupplyChainPage() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        <div className="container-x py-24" ref={containerRef}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            
            <div className="sticky top-24 z-30 lg:top-28 lg:self-start overflow-hidden rounded-3xl border border-border shadow-2xl lg:shadow-none bg-background">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={workflow[activeStep].img}
                  alt={workflow[activeStep].title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  loading="lazy"
                  className="w-full aspect-video lg:aspect-[4/3] object-cover bg-ink"
                />
              </AnimatePresence>
            </div>

            <div className="relative ml-4 lg:ml-0">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              <motion.div 
                className="absolute left-0 top-0 w-0.5 bg-turmeric origin-top z-10"
                style={{ height: lineHeight }}
              />
              <ol className="relative pl-8">
                {workflow.map((w, i) => (
                  <motion.li 
                    key={w.title} 
                    className="relative pb-16 last:pb-0"
                    onViewportEnter={() => setActiveStep(i)}
                    viewport={{ amount: 0.5, margin: "-10% 0px -40% 0px" }}
                  >
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute -left-[49px] z-20 grid h-10 w-10 place-items-center rounded-full border-4 border-background bg-card shadow-sm"
                    >
                      <ShieldCheck className="h-4 w-4 text-turmeric" />
                    </motion.span>
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
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
