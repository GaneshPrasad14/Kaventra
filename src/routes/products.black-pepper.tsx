import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";
import img from "@/assets/pepper.jpg";

export const Route = createFileRoute("/products/black-pepper")({
  head: () => ({
    meta: [
      { title: "Black Pepper — Malabar Garbled & Tellicherry TGEB | Kaventra" },
      {
        name: "description",
        content:
          "Malabar Garbled (MG-1) and Tellicherry Garbled Extra Bold (TGEB, 6-8.5% piperine, 4.75mm+). Steam-sterilised options and cryo-milled powder.",
      },
      { property: "og:title", content: "Black Pepper — Malabar & Tellicherry" },
      {
        property: "og:description",
        content:
          "Piper nigrum L. from Kerala's Malabar Coast and the Wayanad/Idukki highlands.",
      },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Product · 02"
      name="Black Pepper"
      botanical="Piper nigrum L.  ·  HS 0904 1140"
      intro="Drawn from Kerala's Malabar coast and the Wayanad and Idukki highlands. Graded by size and density, cleaned by gravity separation and offered as whole berries, industrial-grade lights, and cryo-milled powder with optional steam sterilisation."
      image={img}
      imageAlt="Black peppercorns on dark slate"
      standardSpecs={[
        { label: "Botanical Name", value: "Piper nigrum L." },
        { label: "HS Code", value: "0904 1140" },
        { label: "Moisture", value: "≤ 12 %" },
        { label: "Total Ash", value: "≤ 7 %" },
        { label: "Foreign Matter", value: "≤ 0.5 %" },
        { label: "Pinheads / Light Berries", value: "≤ 2 %" },
        { label: "Sterilisation", value: "Steam / ETO-free available" },
        { label: "Packing", value: "25 / 50 kg PP + inner food-grade liner" },
      ]}
      varieties={[
        {
          name: "Malabar Garbled (MG-1)",
          tagline: "Our highest-volume bulk export grade.",
          tier: "standard",
          highlight: "4.5 – 6.0% Piperine",
          specs: [
            { label: "Origin", value: "Malabar Coast, Kerala" },
            { label: "Bulk Density", value: "550 – 580 g/L" },
            { label: "Berry Size", value: "3.5 – 4.25 mm" },
            { label: "Colour", value: "Uniform blackish-brown" },
          ],
        },
        {
          name: "Tellicherry Garbled Extra Bold (TGEB)",
          tagline: "The absolute crown jewel — bold, aromatic, single-origin.",
          tier: "flagship",
          highlight: "6.0 – 8.5% Piperine",
          specs: [
            { label: "Origin", value: "Wayanad / Idukki highlands" },
            { label: "Bulk Density", value: "500 – 530 g/L" },
            { label: "Berry Size", value: "≥ 4.75 mm" },
            { label: "Volatile Oil", value: "≥ 3.0 %" },
          ],
        },
        {
          name: "Light Berries / Industrial",
          tagline: "Extractor-grade for piperine and oleoresin producers.",
          tier: "standard",
          highlight: "For extractors",
          specs: [
            { label: "Bulk Density", value: "500 – 530 g/L" },
            { label: "Application", value: "Oleoresin, essential oil" },
            { label: "Moisture", value: "≤ 12 %" },
          ],
        },
        {
          name: "Pure Powder — Cryo-milled",
          tagline: "Aroma-locking cryogenic mill; steam-sterilised on request.",
          tier: "premium",
          highlight: "Cryo-milled",
          specs: [
            { label: "Mesh", value: "40 – 100" },
            { label: "Volatile Oil", value: "≥ 2.5 %" },
            { label: "Piperine", value: "≥ 4.0 %" },
            { label: "Microbial", value: "Steam-sterilised option" },
          ],
        },
      ]}
    />
  ),
});
