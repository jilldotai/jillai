"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

const links = [
  { label: "Products", href: "/products" },
  { label: "Research", href: "/research" },
  { label: "Alpha", href: "/alpha" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

export default function NavBar() {
  const scrolled = useScroll(18);

  return (
    <header className="fixed top-0 z-40 flex w-full justify-center px-4 pt-4">
      <div
        className={`w-full max-w-6xl rounded-full border px-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-white/20 bg-black/80 backdrop-blur-2xl"
            : "border-white/10 bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="flex h-14 items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-100">
            Jill.ai
          </Link>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.16em] text-zinc-400 lg:flex">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-zinc-100">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/alpha" className="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-950">
            Join Alpha
          </Link>
        </div>
      </div>
    </header>
  );
}
