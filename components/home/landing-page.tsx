"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

const principles = [
  ["Privacy by design", "Identity stays compartmentalized."],
  ["Local-first intelligence", "Risk scored on device, first."],
  ["Verification before access", "Trust issued before exposure."],
  ["Human accountability", "Critical moments route to people."],
];

const products = [
  {
    name: "IOkT (ID)",
    line: "Verification-first identity for minors.",
    bullets: ["Age brackets, not birthdates", "Zero-knowledge checks", "Guardian-linked authority"],
  },
  {
    name: "IOkT (Key)",
    line: "The Guardian Keyboard.",
    bullets: ["Works across apps", "No message logging", "Local risk scoring only"],
  },
  {
    name: "IOkT (Net)",
    line: "A safer browser layer.",
    bullets: ["On-device content scoring", "Safe browsing overlays", "Parent-configurable rules"],
  },
  {
    name: "IOkT (Tutor)",
    line: "Native-language AI learning.",
    bullets: ["Native language first", "Curriculum-aligned", "Safety boundaries by design"],
  },
];

const logs = [
  "Why surveillance is not safety",
  "The verification trap",
  "Offline authority systems",
  "The problem with AI moderation",
  "Designing for low-cost devices",
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={target} className="relative w-full overflow-hidden pb-24">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[#05060a]" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(120,140,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(120,140,255,0.09)_1px,transparent_1px)] [background-size:88px_88px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.26),transparent_30%),radial-gradient(circle_at_75%_10%,rgba(147,51,234,0.16),transparent_28%),radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.06),transparent_35%)]" />
      </motion.div>

      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={item} className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Jill.ai · Applied research lab
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-7xl sm:leading-[0.98]"
          >
            Safety infrastructure for the next internet.
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-3xl text-lg text-zinc-300">
            Privacy-first verification and protection systems for families, platforms,
            and educators.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Link href="/alpha" className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950">
              Join the Alpha
            </Link>
            <Link href="/partners" className="rounded-full border border-white/20 px-6 py-3 text-sm text-zinc-100">
              Partner With Us
            </Link>
            <Link href="/investors" className="inline-flex items-center gap-2 px-2 py-3 text-sm text-blue-300">
              Request Investor Brief <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.p variants={item} className="mt-8 text-sm text-zinc-400">
            Built in South Africa. Designed for the world.
          </motion.p>
          <motion.p variants={item} className="mt-3 text-sm text-zinc-500">
            We don’t store child identity. We don’t sell data. We don’t build surveillance.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100">The internet wasn’t built for children.</h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:pt-4">
          <p className="text-zinc-300">Grooming, manipulation, addiction loops. Surveillance is not the answer.</p>
          <p className="mt-4 text-lg text-blue-300">Safety shouldn’t require surveillance.</p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100">Our principles are non-negotiable.</h2>
        </Reveal>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {principles.map(([title, text]) => (
            <motion.article key={title} variants={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl text-zinc-100">{title}</h3>
              <p className="mt-2 text-zinc-400">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="products" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <h2 className="text-center text-4xl font-medium tracking-tight text-zinc-100">The Jill.ai ecosystem</h2>
          <p className="mt-3 text-center text-zinc-400">A modular system designed to work together — or stand alone.</p>
        </Reveal>
        <div className="mt-12 space-y-6 lg:snap-y lg:snap-mandatory">
          {products.map((product, index) => (
            <Reveal key={product.name} className="lg:snap-start">
              <article className="grid min-h-[82vh] items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 lg:grid-cols-12 lg:p-12">
                <div className="lg:col-span-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">0{index + 1}</p>
                  <h3 className="mt-4 text-4xl font-medium text-zinc-100">{product.name}</h3>
                  <p className="mt-3 text-zinc-300">{product.line}</p>
                  <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                    {product.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                  <button className="mt-8 rounded-full border border-blue-400/60 px-5 py-2 text-sm text-blue-200">Explore</button>
                </div>
                <div className="relative h-[380px] overflow-hidden rounded-3xl border border-white/15 bg-[#0b1020] lg:col-span-7 lg:h-[520px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.28),transparent_45%)]" />
                  <div className="absolute inset-5 rounded-2xl border border-white/10" />
                  <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-zinc-400">Video placeholder</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100">Safety without surveillance.</h2>
        </Reveal>
        <Reveal className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="grid gap-4 text-sm text-zinc-300 md:grid-cols-5">
            {["Verify Guardian", "Issue Child Credential", "Protect On Device", "Intervene Early", "Alert When Needed"].map((step) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-black/40 p-4">{step}</div>
            ))}
          </div>
          <p className="mt-6 text-zinc-400">The system does not need to watch your child to keep them safe.</p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100">We’re building the SSL layer for child safety.</h2>
          <p className="mt-4 max-w-4xl text-zinc-300">HTTPS made the web safer by default. Jill.ai is building the next layer — where protection is designed into the system itself.</p>
          <p className="mt-5 text-xl text-blue-300">Not monitoring. Not surveillance. Infrastructure.</p>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100">Designed for compliance. Built for reality.</h2>
          <ul className="mt-6 space-y-2 text-zinc-300">
            <li>• POPIA-first architecture</li>
            <li>• COPPA-aligned design principles</li>
            <li>• UK Online Safety Act awareness</li>
            <li>• Built for low bandwidth environments</li>
            <li>• Designed for Android-first regions</li>
          </ul>
        </Reveal>
        <Reveal>
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100">Research logs</h2>
          <p className="mt-4 text-zinc-400">Notes from a lab building privacy-first safety infrastructure.</p>
          <div className="mt-6 grid gap-3">
            {logs.map((title) => (
              <Link key={title} href="/research" className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-blue-400/50">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Log</p>
                <p className="mt-2 text-zinc-200">{title}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="alpha" className="mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal className="rounded-[2rem] border border-blue-400/25 bg-gradient-to-b from-blue-500/10 to-transparent p-8 sm:p-10">
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100">Join the Founding Families Alpha</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">Early access. Real environments. Privacy stays yours.</p>
          <form className="mt-8 grid gap-3 md:grid-cols-2">
            <input className="rounded-xl border border-white/15 bg-black/30 px-4 py-3" placeholder="Name" />
            <input className="rounded-xl border border-white/15 bg-black/30 px-4 py-3" placeholder="Email" />
            <input className="rounded-xl border border-white/15 bg-black/30 px-4 py-3" placeholder="Country" />
            <select className="rounded-xl border border-white/15 bg-black/30 px-4 py-3"><option>Child age group</option></select>
            <select className="rounded-xl border border-white/15 bg-black/30 px-4 py-3"><option>Device type</option></select>
            <textarea className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 md:col-span-2" rows={4} placeholder="Optional message" />
            <button className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 md:col-span-2 md:w-fit">Apply for Alpha Access</button>
          </form>
          <p className="mt-4 text-xs text-zinc-500">No spam. No ads. No selling. Ever.</p>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-24 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-3xl font-medium text-zinc-100">For platforms and developers</h3>
          <p className="mt-4 text-zinc-300">We return only what matters: true / false.</p>
          <div className="mt-7 flex gap-3">
            <Link href="/partners" className="rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950">Apply as Partner</Link>
            <Link href="/partners" className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-zinc-100">Request API Overview</Link>
          </div>
        </Reveal>
        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-3xl font-medium text-zinc-100">For investors</h3>
          <p className="mt-4 text-zinc-300">Jill.ai is infrastructure — not a feature.</p>
          <Link href="/investors" className="mt-7 inline-block rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950">Request Investor Brief</Link>
          <p className="mt-3 text-xs text-zinc-500">Technical architecture shared under NDA.</p>
        </Reveal>
      </section>

      <Link
        href="/alpha"
        className="fixed bottom-6 right-6 z-50 rounded-full border border-blue-300/60 bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_45px_rgba(59,130,246,0.6)]"
      >
        Join Alpha
      </Link>
    </div>
  );
}
