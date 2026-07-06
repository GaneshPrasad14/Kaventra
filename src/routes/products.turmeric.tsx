import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import img from "@/assets/turmeric.webp";

export const Route = createFileRoute("/products/turmeric")({
  head: () => ({
    meta: [
      { title: "Turmeric — Erode, Alleppey & Premium Grades | Kaventra" },
      {
        name: "description",
        content:
          "Erode single & double polished fingers, Alleppey fingers (up to 6.5% curcumin) and pure powder (5%+ curcumin, Aflatoxin < 4 ppb). Full technical data sheet.",
      },
      { property: "og:title", content: "Turmeric — Erode, Alleppey & Premium Grades" },
      {
        property: "og:description",
        content:
          "Curcuma longa L. sourced from the Erode, Salem and Alleppey belts of Tamil Nadu.",
      },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Product · 01"
      name="Turmeric"
      botanical="Curcuma longa L.  ·  HS 0910 3010 / 0910 3020"
      intro="Sourced principally from the Erode and Salem belts of Tamil Nadu, plus the deep-orange Alleppey variety from Kerala. Offered as whole finger, bulb (round) and cryo-milled powder — polished to your preferred finish."
      image={img}
      imageAlt="Turmeric fingers and powder"
      standardSpecs={[
        { label: "Botanical Name", value: "Curcuma longa L." },
        { label: "HS Code", value: "0910 3010 (whole) / 0910 3020 (powder)" },
        { label: "Moisture", value: "≤ 10–12 %" },
        { label: "Mesh Size (powder)", value: "40 – 80" },
        { label: "Foreign Matter", value: "≤ 1 %" },
        { label: "Aflatoxin B1", value: "≤ 5 ppb" },
        { label: "Total Aflatoxin", value: "≤ 10 ppb" },
        { label: "Packing", value: "25 / 50 kg PP + inner LDPE liner" },
      ]}
      varieties={[
        {
          name: "Erode Fingers — Single Polished",
          tagline: "The cost-effective bulk standard for private-label houses.",
          tier: "standard",
          highlight: "2.5 – 3.5% Curcumin",
          specs: [
            { label: "Origin", value: "Erode, Tamil Nadu" },
            { label: "Length", value: "4 – 7 cm" },
            { label: "Colour", value: "Bright yellow-orange" },
            { label: "Polish", value: "Single-pass" },
            { label: "Moisture", value: "≤ 11 %" },
          ],
        },
        {
          name: "Erode Fingers — Double Polished",
          tagline: "Mirror-smooth, our flagship for Europe.",
          tier: "premium",
          highlight: "3.0 – 4.0% Curcumin",
          specs: [
            { label: "Origin", value: "Erode, Tamil Nadu" },
            { label: "Length", value: "4 – 8 cm" },
            { label: "Colour", value: "Deep golden-orange" },
            { label: "Polish", value: "Double-pass, mirror finish" },
            { label: "Moisture", value: "≤ 10 %" },
          ],
        },
        {
          name: "Alleppey Fingers",
          tagline: "The luxury tier — unpolished, deep-orange core, favoured by the US market.",
          tier: "flagship",
          highlight: "4.5 – 6.5% Curcumin",
          specs: [
            { label: "Origin", value: "Alleppey, Kerala" },
            { label: "Length", value: "5 – 9 cm" },
            { label: "Colour", value: "Intense orange-red core" },
            { label: "Polish", value: "Unpolished (natural)" },
            { label: "Moisture", value: "≤ 10 %" },
          ],
        },
        {
          name: "Pure Powder — Alleppey Grade",
          tagline: "Premium wellness grade — steam-sterilised, low-microbial.",
          tier: "flagship",
          highlight: "5.0%+ Curcumin",
          specs: [
            { label: "Mesh", value: "80 – 100" },
            { label: "Colour Value (ASTA)", value: "≥ 120" },
            { label: "Aflatoxin B1", value: "< 4 ppb" },
            { label: "Total Aflatoxin", value: "< 8 ppb" },
            { label: "Moisture", value: "≤ 8 %" },
          ],
        },
      ]}
    />
  ),
});
