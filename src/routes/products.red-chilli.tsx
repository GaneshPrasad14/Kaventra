import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import img from "@/assets/chilli.png";

export const Route = createFileRoute("/products/red-chilli")({
  head: () => ({
    meta: [
      { title: "Red Chilli — Teja S17, Guntur & Byadgi | Kaventra" },
      {
        name: "description",
        content:
          "Teja S17 (65-90k SHU), Guntur Sannam S4/334 (18-30k SHU) and Byadgi (100-220 ASTA). 0% Sudan dyes, IPM-certified options.",
      },
      { property: "og:title", content: "Red Chilli — Teja, Guntur & Byadgi" },
      { property: "og:description", content: "Distinct varieties for distinct end uses. IPM options available." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Product · 04"
      name="Red Chilli"
      botanical="Capsicum annuum L.  ·  HS 0904 2110"
      intro="Distinct varieties for distinct end uses — from the super-hot Teja S17 that dominates export volumes, to the low-heat, colour-rich Byadgi favoured by extractors. Every lot certified 0.0% Sudan dyes."
      image={img}
      imageAlt="Dried red chillies"
      standardSpecs={[
        { label: "Botanical Name", value: "Capsicum annuum L." },
        { label: "HS Code", value: "0904 2110" },
        { label: "Moisture", value: "≤ 11 %" },
        { label: "Powder Mesh", value: "30 – 60" },
        { label: "Sudan Dyes", value: "0.0 % — Certified" },
        { label: "Aflatoxin B1", value: "≤ 5 ppb" },
        { label: "Sorting", value: "Colour-sort, destone, sieve" },
        { label: "Packing", value: "25 / 50 kg PP with inner liner" },
      ]}
      varieties={[
        {
          name: "Teja S17",
          tagline: "The Export King — thin-skinned, bright red, super hot.",
          tier: "flagship",
          highlight: "65k – 90k SHU",
          specs: [
            { label: "Origin", value: "Warangal / Khammam" },
            { label: "Length", value: "5 – 7 cm" },
            { label: "Colour", value: "Bright red" },
            { label: "Skin", value: "Thin" },
            { label: "Heat", value: "Super hot" },
          ],
        },
        {
          name: "Guntur Sannam S4 / 334",
          tagline: "The Commercial Benchmark for bulk blending.",
          tier: "standard",
          highlight: "18k – 30k SHU",
          specs: [
            { label: "Origin", value: "Guntur, Andhra Pradesh" },
            { label: "Length", value: "6 – 12 cm" },
            { label: "Colour", value: "Deep red" },
            { label: "Heat", value: "Medium hot" },
          ],
        },
        {
          name: "Byadgi",
          tagline: "Premium colour extract — long, highly wrinkled, mild heat.",
          tier: "premium",
          highlight: "100 – 220 ASTA",
          specs: [
            { label: "Origin", value: "Byadgi, Karnataka" },
            { label: "Length", value: "8 – 15 cm" },
            { label: "Colour Value", value: "100 – 220 ASTA" },
            { label: "Heat", value: "8k – 15k SHU (mild)" },
            { label: "Use", value: "Oleoresin, colour extract" },
          ],
        },
        {
          name: "Powder & Flakes",
          tagline: "30-60 mesh, strict 0.0% Sudan, IPM-certified options.",
          tier: "premium",
          highlight: "IPM Certified",
          specs: [
            { label: "Mesh (powder)", value: "30 – 60" },
            { label: "Flakes", value: "3 – 8 mm" },
            { label: "Sudan Dyes", value: "0.0 %" },
            { label: "Options", value: "Steam-sterilised, IPM" },
          ],
        },
      ]}
    />
  ),
});
