import WireframePage from "@/components/shared/wireframe-page";

export default function ProductsPage() {
  return (
    <WireframePage
      title="Products Overview"
      subtitle="Explore the IOkT suite and how each module integrates into one privacy-first safety stack."
      sections={[
        { heading: "Module Grid", content: "Four product cards with capability highlights and target users." },
        { heading: "Integration Map", content: "Visual showing how products run together or independently." },
        { heading: "Deployment Modes", content: "Family mode, school mode, and platform mode configuration." },
      ]}
    />
  );
}
