import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";

/**
 * Brand typography (locked in `docs/brand/DESIGN.md` §5).
 *
 * Marketing surfaces use **Geist** (display + body) and **Geist Mono** (eyebrows /
 * numerals / changelog). The product UI uses **Inter** — kept here so any
 * embedded product preview matches the in-app type. Geist on marketing,
 * Inter in product is the same intentional split Vercel uses.
 *
 * CSS variables exposed:
 *   --font-sans     → body + headlines + wordmark (Geist)
 *   --font-display  → wordmark / hero display     (Geist, alias)
 *   --font-mono     → labels / eyebrows / numerals (Geist Mono)
 *   --font-inter    → reserved for product-style data tables / forms
 */
export const geistSans = GeistSans;
export const geistMono = GeistMono;

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
