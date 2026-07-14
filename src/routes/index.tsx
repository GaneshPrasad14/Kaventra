import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Package,
  MessageSquare,
  Award,
  Leaf,
  Globe2,
} from "lucide-react";
import heroFields from "@/assets/hero-fields.jpg";
import turmericImg from "@/assets/turmeric.png";
import pepperImg from "@/assets/pepper.png";
import cardamomImg from "@/assets/cardamom.png";
import chilliImg from "@/assets/chilli.png";
import moringaImg from "@/assets/moringa.png";
import apedaImg from "@/assets/apeda.png";
import spicesBoardImg from "@/assets/spicesboard.png";
import fssaiImg from "@/assets/fssai.png";
import msmeImg from "@/assets/msme.png";
import worldMapImg from "@/assets/world_map_routes.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    body: "Every lot is checked against declared specs — moisture, curcumin/piperine/volatile oil, mesh, Aflatoxin — before it leaves our facility.",
  },
  {
    icon: Package,
    title: "Freight-Grade Packaging",
    body: "Moisture-barrier liners and re-inforced bags built for the 30–45 day ocean freight to Rotterdam, New York or Yokohama.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    body: "One accountable point of contact from RFQ to bill of lading. No agents, no telephone game, no surprises at the port.",
  },
];

const products = [
  { to: "/products/turmeric", name: "Turmeric", meta: "Erode · Alleppey · Salem", img: turmericImg, accent: "from-turmeric/40" },
  { to: "/products/black-pepper", name: "Black Pepper", meta: "Malabar · Tellicherry", img: pepperImg, accent: "from-ink/50" },
  { to: "/products/cardamom", name: "Green Cardamom", meta: "Idukki · Cardamom Hills", img: cardamomImg, accent: "from-cardamom/40" },
  { to: "/products/red-chilli", name: "Red Chilli", meta: "Teja · Guntur · Byadgi", img: chilliImg, accent: "from-chilli/40" },
  { to: "/products/moringa", name: "Moringa", meta: "Tamil Nadu", img: moringaImg, accent: "from-cardamom/40" },
] as const;

const badges = [
  { name: "APEDA", note: "Registered exporter", img: apedaImg },
  { name: "Spices Board", note: "Certificate holder", img: spicesBoardImg },
  { name: "FSSAI", note: "Licensed facility", img: fssaiImg },
  { name: "MSME", note: "Registered Enterprise", img: msmeImg },
];

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          setValue(Math.round(v));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, end]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function HomePage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            y: backgroundY,
            scale: 1.1,
            backgroundImage: `linear-gradient(180deg, oklch(0.19 0.03 260 / 0.75) 0%, oklch(0.19 0.03 260 / 0.5) 60%, oklch(0.19 0.03 260 / 0.85) 100%), url(${heroFields})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-x relative flex min-h-[92vh] flex-col justify-between pb-14 pt-32 text-bone md:pb-20 md:pt-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium tracking-widest text-bone/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-turmeric" />
              CHENNAI · TAMIL NADU · EST. FOR GLOBAL BUYERS
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
              Spices sourced with integrity —{" "}
              <span className="italic text-turmeric">from the fields of India</span> to
              the tables of the world.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/80 md:text-lg">
              Bridging India's rich agricultural heritage with global markets
              through rigorous quality control, batch-level traceability and
              freight-grade packaging — for buyers in Europe, the USA, Japan
              and the Middle East.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-turmeric px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-bone backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore the catalogue
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 text-bone/80 md:grid-cols-4">
            {[
              { end: 5, suffix: "", v: "Product families" },
              { end: 4, suffix: "", v: "Continents served" },
              { end: 100, suffix: "%", v: "Lab-tested lots" },
              { end: 1, suffix: " MT", v: "Minimum order" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-4xl text-bone md:text-5xl">
                  <AnimatedNumber end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-bone/60">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow text-turmeric">Why Kaventra</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Built to fix what still frustrates buyers of Indian spices.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.19_0.03_260_/_0.25)]"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-turmeric to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-x py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-turmeric">The Catalogue</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Five product families, <br className="hidden md:block" />
                one accountable supplier.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-turmeric"
            >
              View full catalogue <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((p) => (
              <motion.div key={p.name} variants={itemVariants}>
                <Link
                  to={p.to}
                  className="group relative flex h-full overflow-hidden rounded-2xl border border-border bg-card"
                >
                <div className="aspect-[4/5] w-full overflow-hidden sm:aspect-square md:aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} via-ink/20 to-ink/85`} />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-bone">
                  <p className="text-[11px] font-semibold uppercase tracking-widest opacity-75">
                    {p.meta}
                  </p>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{p.name}</h3>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold opacity-80 transition-opacity group-hover:opacity-100">
                      View grades <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GLOBAL REACH MAP */}
      <section className="border-t border-border bg-ink">
        <div className="container-x py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turmeric">Global Export Network</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-bone">
              From the fields of India to major ports worldwide.
            </h2>
          </div>
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_80px_-20px_rgba(233,160,57,0.15)]">
            <img 
              src={worldMapImg} 
              alt="World map showing shipping routes originating from India" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="container-x py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="eyebrow text-turmeric">Compliance & Certifications</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Every shipment ready for regulated import markets.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              We operate against the standards importers care about — EU MRLs,
              US FDA guidelines, JAS-JIS, and GCC food safety norms — and
              document it batch by batch.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-muted-foreground">
              <span className="inline-flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-turmeric" /> Third-party lab tested
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Leaf className="h-4 w-4 text-cardamom" /> IPM-certified options
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Globe2 className="h-4 w-4 text-turmeric" /> Serving 4 continents
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {badges.map((b) => (
              <div
                key={b.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-20 w-full items-center justify-center">
                  <img src={b.img} alt={b.name} loading="lazy" className="max-h-full max-w-[120px] object-contain opacity-90" />
                </div>
                <p className="mt-4 font-display text-lg text-foreground">{b.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {b.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
