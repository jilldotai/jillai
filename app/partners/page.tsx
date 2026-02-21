import WireframePage from "@/components/shared/wireframe-page";

export default function PartnersPage() {
  return (
    <WireframePage
      title="Partners"
      subtitle="Form-first page for platforms and developers integrating true/false verification outcomes."
      sections={[
        { heading: "Use Cases", content: "Gaming, education, social platforms, and youth-first services." },
        { heading: "Partner Intake Form", content: "Organization profile, region, traffic volume, and compliance needs." },
        { heading: "API Overview Request", content: "Secure pathway for technical package request and onboarding." },
      ]}
    />
  );
}
