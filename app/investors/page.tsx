import WireframePage from "@/components/shared/wireframe-page";

export default function InvestorsPage() {
  return (
    <WireframePage
      title="Investors"
      subtitle="Infrastructure thesis, market timing, and secure briefing request flow."
      sections={[
        { heading: "Thesis", content: "Privacy-first compliance infrastructure is becoming mandatory digital plumbing." },
        { heading: "Brief Request Form", content: "Fund profile, region, and focus area fields." },
        { heading: "NDA Process", content: "Technical architecture and deeper product data shared only after NDA." },
      ]}
    />
  );
}
