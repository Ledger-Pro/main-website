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
    summary:
      "When to choose a ledger-replacement model vs a firm-first workflow layer that coexists with your current stack.",
  },
  {
    title: "Ledge vs Kick",
    href: "/compare/kick",
    summary:
      "Compare replacement-first bookkeeping automation against review-first workflows designed for bookkeeping firms.",
  },
  {
    title: "Ledge vs Uplinq",
    href: "/compare/uplinq",
    summary:
      "Service-led automation versus software that helps firms keep client relationships while expanding margins.",
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
                <h2 className="tile-title">{item.title}</h2>
                <p className="tile-body">{item.summary}</p>
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
