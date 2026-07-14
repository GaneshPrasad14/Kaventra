import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import img from "@/assets/moringa.png";

export const Route = createFileRoute("/products/moringa")({
  head: () => ({
    meta: [
      { title: "Moringa — Leaf Powder, Whole Leaf & Drumstick Pods | Kaventra" },
      {
        name: "description",
        content:
          "Shade-dried moringa leaf powder (≥25% protein, 80-100 mesh), whole dried leaf and fresh drumstick pods. Grown across Tamil Nadu.",
      },
      { property: "og:title", content: "Moringa — Leaf, Powder & Pods" },
      { property: "og:description", content: "Moringa oleifera Lam. from Tamil Nadu — wellness grade." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Product · 05"
      name="Moringa"
      botanical="Moringa oleifera Lam.  ·  HS 1211 9029"
      intro="Grown across the dry belts of Tamil Nadu and shade-dried at low temperature to preserve chlorophyll, protein and micronutrient content — for wellness, food-supplement and nutraceutical buyers."
      image={img}
      imageAlt="Moringa leaves and drumstick pods"
      standardSpecs={[
        { label: "Botanical Name", value: "Moringa oleifera Lam." },
        { label: "HS Code", value: "1211 9029" },
        { label: "Protein Content", value: "≥ 25 %" },
        { label: "Powder Mesh", value: "80 – 100" },
        { label: "Moisture", value: "≤ 8 %" },
        { label: "Drying", value: "Shade-dried, ≤ 45 °C" },
        { label: "Colour", value: "Vivid green" },
        { label: "Packing", value: "10 / 25 kg cartons or PP" },
      ]}
      varieties={[
        {
          name: "Shade-Dried Leaf Powder",
          tagline: "The flagship wellness grade — vivid green, high-protein.",
          tier: "flagship",
          highlight: "≥ 25% Protein",
          specs: [
            { label: "Mesh", value: "80 – 100" },
            { label: "Moisture", value: "≤ 8 %" },
            { label: "Colour", value: "Vivid green" },
            { label: "Drying", value: "Shade-dried" },
          ],
        },
        {
          name: "Whole Dried Leaf",
          tagline: "For tea blenders and extract producers.",
          tier: "premium",
          highlight: "Whole leaf",
          specs: [
            { label: "Moisture", value: "≤ 9 %" },
            { label: "Foreign Matter", value: "≤ 1 %" },
            { label: "Colour", value: "Deep green" },
          ],
        },
        {
          name: "Fresh Drumstick Pods",
          tagline: "IQF and fresh consignments to Middle East retail.",
          tier: "standard",
          highlight: "Fresh / IQF",
          specs: [
            { label: "Length", value: "25 – 45 cm" },
            { label: "Grade", value: "A / B" },
            { label: "Cold chain", value: "Reefer 4 – 8 °C" },
          ],
        },
      ]}
    />
  ),
});
