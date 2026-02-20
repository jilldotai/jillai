import WireframePage from "@/components/shared/wireframe-page";

export default function PrivacyPledgePage() {
  return (
    <WireframePage
      title="Privacy Pledge"
      subtitle="Structured commitments that define non-negotiable product boundaries."
      sections={[
        { heading: "What We Never Collect", content: "No child identity vaulting, no hidden content scraping, no ad-tech tracking." },
        { heading: "What We Return", content: "Verification outcomes and minimal safety signals required for intervention." },
        { heading: "How We Govern", content: "Auditability, legal alignment, and guardian visibility by default." },
      ]}
    />
  );
}
