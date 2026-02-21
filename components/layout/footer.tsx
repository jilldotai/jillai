import Link from "next/link";

const links = [
  ["Products", "/products"],
  ["Research", "/research"],
  ["Alpha", "/alpha"],
  ["Partners", "/partners"],
  ["About", "/about"],
  ["Privacy", "/privacy-pledge"],
  ["Contact", "/partners"],
  ["Investor Brief", "/investors"],
] as const;

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-white/10 py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-sm text-zinc-300">Jill.ai — Safety without surveillance.</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="hover:text-zinc-200">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
