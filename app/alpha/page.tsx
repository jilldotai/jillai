import WireframePage from "@/components/shared/wireframe-page";

export default function AlphaPage() {
  return (
    <WireframePage
      title="Alpha Program"
      subtitle="Application page for founding families and pilot testers."
      sections={[
        { heading: "Eligibility", content: "Region, device readiness, and participation expectations." },
        { heading: "Application Form", content: "Name, contact, family profile, and usage environment details." },
        { heading: "Privacy Terms", content: "No advertising, no data sale, no silent data extraction commitments." },
      ]}
    />
  );
}
