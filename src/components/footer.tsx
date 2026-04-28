import Link from "next/link";
import { BrandMark } from "./icons/brand-mark";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Features", href: "/#features" },
      { label: "Confidence", href: "/#confidence" },
      { label: "Compare", href: "/#compare" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Customer stories", href: "/customer-stories" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Compare briefs", href: "/compare" },
      { label: "Security", href: "/security" },
      { label: "Trust center", href: "/trust-center" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col foot-brand">
            <Link className="brand" href="/">
              <BrandMark className="mark" />
              ledge
            </Link>
            <div className="d">
              AI-native bookkeeping for firms — not instead of them.
            </div>
          </div>
          {COLS.map((c) => (
            <div className="foot-col" key={c.title}>
              <h5>{c.title}</h5>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-base">
          <span>© {new Date().getFullYear()} Spur Global Ventures Inc.</span>
          <span>Ledge is a brand/division of Spur Global Ventures Inc. · getledge.ai</span>
        </div>

        <div className="foot-lockup">
          ledge<span className="foot-lockup-mark" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
