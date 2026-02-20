import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Jill.ai — Safety infrastructure for the next internet",
  description:
    "Privacy-first safety infrastructure for children, families, educators, and platforms.",
  metadataBase: new URL("https://jill.ai"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          sfPro.variable,
          inter.variable,
          "bg-[#06070b] text-zinc-100 antialiased",
        )}
      >
        <div className="fixed inset-0 -z-20 bg-[#06070b]" />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center pt-24">{children}</main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
