import WireframePage from "@/components/shared/wireframe-page";

export default function ResearchPage() {
  return (
    <WireframePage
      title="Research"
      subtitle="Article feed for technical essays, lab notes, and policy commentary."
      sections={[
        { heading: "Featured Essay", content: "Large featured article card with summary and published date." },
        { heading: "Topic Filters", content: "Privacy, verification, mobile safety, policy, and field deployment." },
        { heading: "Archive", content: "Chronological list view with concise metadata and reading time." },
      ]}
    />
  );
}
