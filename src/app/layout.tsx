import type { Metadata, Viewport } from "next";
import { geistSans, geistMono, inter } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CrispChat } from "@/components/crisp-chat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getledge.ai"),
  robots: {
    index: false,
    follow: false,
  },
  title: {
    default: "Ledge — The ledger, leveled.",
    template: "%s · Ledge",
  },
  description:
    "AI bookkeeping for firms — not instead of them. Auto-categorize, reconcile, and close client books with a confidence score on every entry.",
  keywords: [
    "bookkeeping automation",
    "AI bookkeeping",
    "bookkeeping firm software",
    "QuickBooks automation",
    "Xero automation",
    "month-end close",
    "reconciliation",
  ],
  authors: [{ name: "Ledge" }],
  openGraph: {
    type: "website",
    url: "https://getledge.ai",
    title: "Ledge — The ledger, leveled.",
    description:
      "AI bookkeeping for firms — not instead of them. Close client books with a confidence score on every entry.",
    siteName: "Ledge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ledge — The ledger, leveled.",
    description: "AI bookkeeping for firms — not instead of them.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2D24",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <body>
        <Nav />
        <main className="site-main">{children}</main>
        <Footer />
        <CrispChat />
      </body>
    </html>
  );
}
