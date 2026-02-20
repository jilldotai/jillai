import WireframePage from "@/components/shared/wireframe-page";

export default function ProductTemplatePage() {
  return (
    <WireframePage
      title="Individual Product Template"
      subtitle="Reusable blueprint for IOkT (ID), IOkT (Key), IOkT (Net), and IOkT (Tutor)."
      sections={[
        { heading: "Hero", content: "Product statement, one-line value proposition, and primary CTA." },
        { heading: "How It Works", content: "Step-by-step technical behavior without exposing proprietary architecture." },
        { heading: "Compliance + Privacy", content: "Structured safety pledges and operational constraints." },
      ]}
    />
  );
}
