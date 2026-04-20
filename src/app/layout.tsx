import type { Metadata, Viewport } from "next";
import { inter, interTight, jetbrainsMono } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ledgerai.com"),
  title: {
    default: "LedgerAI — Bookkeeping on autopilot",
    template: "%s · LedgerAI",
  },
  description:
    "AI-native bookkeeping for firms that want to scale without hiring. Auto-categorize, reconcile, and close the books in under 24 hours — with a confidence score on every entry.",
  keywords: [
    "bookkeeping automation",
    "AI bookkeeping",
    "accounting software",
    "QuickBooks automation",
    "Xero automation",
    "month-end close",
    "reconciliation",
  ],
  authors: [{ name: "LedgerAI" }],
  openGraph: {
    type: "website",
    url: "https://ledgerai.com",
    title: "LedgerAI — Bookkeeping on autopilot",
    description:
      "AI-native bookkeeping for firms that want to scale without hiring. Close the books in under 24 hours with a confidence score on every entry.",
    siteName: "LedgerAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "LedgerAI — Bookkeeping on autopilot",
    description:
      "AI-native bookkeeping for firms that want to scale without hiring.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a54d6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
