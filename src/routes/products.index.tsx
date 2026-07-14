import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import turmericImg from "@/assets/turmeric.png";
import pepperImg from "@/assets/pepper.png";
import cardamomImg from "@/assets/cardamom.png";
import chilliImg from "@/assets/chilli.png";
import moringaImg from "@/assets/moringa.png";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Kaventra Global Traders" },
      {
        name: "description",
        content:
          "Five product families, one accountable supplier — turmeric, black pepper, green cardamom, red chilli and moringa, exported from Chennai.",
      },
      { property: "og:title", content: "Products — Kaventra Global Traders" },
      {
        property: "og:description",
        content:
          "Five product families, one accountable supplier. See grades, technical specs and origins.",
      },
    ],
  }),
  component: ProductsIndex,
});

const products = [
  {
    to: "/products/turmeric",
    name: "Turmeric",
    tagline: "Erode fingers, bulbs and Alleppey premium powder.",
    origin: "Tamil Nadu — Erode, Salem, Alleppey belt",
    hs: "0910 3010 / 3020",
    img: turmericImg,
    accent: "turmeric",
  },
  {
    to: "/products/black-pepper",
    name: "Black Pepper",
    tagline: "Malabar Garbled and Tellicherry Extra Bold.",
    origin: "Kerala — Malabar Coast, Wayanad, Idukki",
    hs: "0904 1140",
    img: pepperImg,
    accent: "ink",
  },
  {
    to: "/products/cardamom",
    name: "Green Cardamom",
    tagline: "8mm+ Extra Bold to 6-7mm AGEB grades.",
    origin: "Kerala — Idukki / Cardamom Hills",
    hs: "0908 3110",
    img: cardamomImg,
    accent: "cardamom",
  },
  {
    to: "/products/red-chilli",
    name: "Red Chilli",
    tagline: "Teja S17, Guntur S4/334 and Byadgi.",
    origin: "Andhra Pradesh · Karnataka",
    hs: "0904 2110",
    img: chilliImg,
    accent: "chilli",
  },
  {
    to: "/products/moringa",
    name: "Moringa",
    tagline: "Shade-dried leaf powder, whole leaf, drumstick pods.",
    origin: "Tamil Nadu",
    hs: "1211 9029",
    img: moringaImg,
    accent: "cardamom",
  },
] as const;

function ProductsIndex() {
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
      <section className="border-b border-border bg-ink text-bone">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow text-turmeric">The Catalogue</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Five product families, <br />
            <span className="italic text-turmeric">one accountable supplier.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone/70">
            Every SKU below ships lab-tested, batch-traceable and packed for the
            long ocean route. Click through for the full technical data sheet
            and grade options.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5"
        >
          {products.map((p, i) => (
            <motion.div key={p.name} variants={itemVariants}>
              <Link
                to={p.to}
                className="group relative grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[1fr_1.6fr]"
              >
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="grid grid-rows-[auto_1fr_auto] gap-6 p-8 md:p-12">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-muted-foreground">
                    0{i + 1} — {p.origin}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    HS {p.hs}
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-4xl md:text-6xl">{p.name}</h2>
                  <p className="mt-3 max-w-lg text-base text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <span className="text-sm font-semibold text-foreground">
                    View grades & specs
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
