import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "See how Ledge compares across automation depth, control, and firm workflow fit.",
};

const BRIEFS = [
  {
    title: "Ledge vs Digits",
    href: "/compare/digits",
    logo: "https://www.google.com/s2/favicons?domain=digits.com&sz=64",
    summary: "AGL model with 95%+ auto-booking claim, 12,000+ integrations, and public SMB pricing.",
    facts: ["95%+ auto-booking claim", "Essentials $65/mo, Core $100/mo", "SOC 2 Type II listed"],
  },
  {
    title: "Ledge vs Kick",
    href: "/compare/kick",
    logo: "https://www.google.com/s2/favicons?domain=kick.co&sz=64",
    summary: "Self-driving bookkeeping with free plan (up to $25k expenses) and custom plan from $200/mo.",
    facts: ["Raised $20M (Kick announcement)", "Free tier up to $25k expenses", "14-day trial messaging"],
  },
  {
    title: "Ledge vs Uplinq",
    href: "/compare/uplinq",
    logo: "https://www.google.com/s2/favicons?domain=uplinq.com&sz=64",
    summary: "Managed bookkeeping + tax model with human oversight and pricing from $250/mo starter.",
    facts: ["Bookkeeping starts at $250/mo", "Tax plans from $150/mo", "Claims 1,000+ organizations"],
  },
];

export default function CompareHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Evaluate options with"
        italic="firm-first criteria."
        lead="These briefs are built for bookkeeping and accounting firm owners reviewing automation tools for scale, control, and audit readiness."
      />

      <section className="prose-section">
        <div className="container">
          <div className="tile-grid">
            {BRIEFS.map((item) => (
              <article className="tile" key={item.href}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <img
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={32}
                    height={32}
                    style={{ borderRadius: 8, border: "1px solid var(--line)" }}
                    loading="lazy"
                  />
                  <h2 className="tile-title" style={{ margin: 0 }}>
                    {item.title}
                  </h2>
                </div>
                <p className="tile-body">{item.summary}</p>
                <ul style={{ margin: "0 0 14px", paddingLeft: 18 }}>
                  {item.facts.map((fact) => (
                    <li key={fact} className="tile-body" style={{ marginBottom: 6 }}>
                      {fact}
                    </li>
                  ))}
                </ul>
                <Link className="btn btn-ghost btn-sm" href={item.href}>
                  Open brief
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
