import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import img from "@/assets/cardamom.jpg";

export const Route = createFileRoute("/products/cardamom")({
  head: () => ({
    meta: [
      { title: "Green Cardamom — 8mm+ Extra Bold | Kaventra" },
      {
        name: "description",
        content:
          "8mm+ Extra Bold Gulf-grade, 7-8mm Bold commercial premium, 6-7mm AGEB and cryo-milled powder. Elettaria cardamomum from Idukki.",
      },
      { property: "og:title", content: "Green Cardamom — 8mm+ Extra Bold" },
      { property: "og:description", content: "Grown in Idukki / Cardamom Hills. Machine-cleaned, screen-graded." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Product · 03"
      name="Green Cardamom"
      botanical="Elettaria cardamomum  ·  HS 0908 3110"
      intro="Grown in the mist-fed Idukki and Cardamom Hills of Kerala. Machine-cleaned, screen-graded and colour-sorted to preserve the deep emerald green that Gulf and European buyers demand."
      image={img}
      imageAlt="Green cardamom pods"
      standardSpecs={[
        { label: "Botanical Name", value: "Elettaria cardamomum" },
        { label: "HS Code", value: "0908 3110" },
        { label: "Moisture", value: "≤ 11 %" },
        { label: "Colour", value: "Deep parrot / emerald green" },
        { label: "Foreign Matter", value: "≤ 1 %" },
        { label: "Volatile Oil", value: "3.5 – 5.5 %" },
        { label: "Packing", value: "10 / 25 kg cartons with liner" },
      ]}
      varieties={[
        {
          name: "8mm+ Extra Bold",
          tagline: "The Gold Standard — heavily preferred in Gulf markets.",
          tier: "flagship",
          highlight: "≥ 8mm",
          specs: [
            { label: "Bulk Density", value: "430 – 450 g/L" },
            { label: "Volatile Oil", value: "3.5 – 5.5 %" },
            { label: "Colour", value: "Deep green" },
            { label: "Screen", value: "8 mm + only" },
          ],
        },
        {
          name: "7 – 8 mm Bold",
          tagline: "High-volume commercial premium.",
          tier: "premium",
          highlight: "7 – 8mm",
          specs: [
            { label: "Bulk Density", value: "410 – 430 g/L" },
            { label: "Volatile Oil", value: "3.0 – 4.5 %" },
            { label: "Colour", value: "Green" },
          ],
        },
        {
          name: "6 – 7 mm AGEB",
          tagline: "Moderate bold — perfect for baking and hotel supply.",
          tier: "standard",
          highlight: "6 – 7mm",
          specs: [
            { label: "Bulk Density", value: "380 – 410 g/L" },
            { label: "Volatile Oil", value: "≥ 3.0 %" },
            { label: "Colour", value: "Light-to-medium green" },
          ],
        },
        {
          name: "Pure Powder — Cryo-milled",
          tagline: "Cryogenically milled to lock in the aroma.",
          tier: "premium",
          highlight: "Cryo-milled",
          specs: [
            { label: "Mesh", value: "40 – 80" },
            { label: "Volatile Oil", value: "≥ 3.0 %" },
            { label: "Moisture", value: "≤ 9 %" },
          ],
        },
      ]}
    />
  ),
});
