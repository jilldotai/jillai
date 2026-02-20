import Link from "next/link";

export default function WireframePage({
  title,
  subtitle,
  sections,
}: {
  title: string;
  subtitle: string;
  sections: { heading: string; content: string }[];
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-28">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-zinc-300">{subtitle}</p>
      <div className="mt-10 space-y-4">
        {sections.map((section) => (
          <section key={section.heading} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-medium text-zinc-100">{section.heading}</h2>
            <p className="mt-3 text-zinc-300">{section.content}</p>
          </section>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/" className="text-sm text-blue-300 hover:text-blue-200">← Back to homepage</Link>
      </div>
    </div>
  );
}
