import WireframePage from "@/components/shared/wireframe-page";

export default function AboutPage() {
  return (
    <WireframePage
      title="About Jill.ai"
      subtitle="Manifesto-style page articulating mission, constraints, and long-term direction."
      sections={[
        { heading: "Why Jill.ai Exists", content: "Child safety must be systemic, not performative or invasive." },
        { heading: "Operating Philosophy", content: "Minimal data exposure, explicit authority, and accountable intervention." },
        { heading: "Field Commitment", content: "Built for low-bandwidth, Android-first, globally diverse contexts." },
      ]}
    />
  );
}
