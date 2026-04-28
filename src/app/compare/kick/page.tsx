import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Ledge vs Kick",
  description:
    "A firm-first comparison of Ledge and Kick focused on workflow fit, distribution model, and operational controls.",
};

const DIFFERENCES = [
  {
    title: "Go-to-market orientation",
    ledge: "Built for bookkeeping firms running multi-client operations and reviewer-heavy workflows.",
    other: "Strong SMB self-serve narrative with expanding accountant channel and distribution partnerships.",
  },
  {
    title: "Operational control",
    ledge: "Focuses on confidence thresholds, review queues, and explicit exception handling.",
    other: "Positions around speed and autonomous bookkeeping outcomes with simpler onboarding motions.",
  },
  {
    title: "Firm adoption path",
    ledge: "Designed to layer into existing service operations while preserving established client process.",
    other: "Can favor a replacement path for firms standardizing on a new workflow stack.",
  },
];

const CONTENT_TO_ADD = [
  "Partner workflow walkthrough from intake to month-end close handoff",
  "Control matrix showing which tasks are auto-posted vs reviewer-approved",
  "Firm KPI benchmarks: hours saved per client, reviewer load, close-cycle reduction",
  "Case study focused on preserving client process while upgrading throughput",
];

export default function CompareKickPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare · Kick"
        title="Ledge vs Kick:"
        italic="firm operating model first."
        lead="For firms, this choice is less about AI claims and more about who controls the workflow: your team with explicit guardrails, or a replacement-first operating path."
      />

      <section className="prose-section">
        <div className="container">
          <div className="tile-grid">
            {DIFFERENCES.map((item) => (
              <article className="tile" key={item.title}>
                <div className="tile-kicker">{item.title}</div>
                <div className="tile-title">Ledge</div>
                <p className="tile-body">{item.ledge}</p>
                <div className="tile-title" style={{ marginTop: 10 }}>
                  Kick
                </div>
                <p className="tile-body">{item.other}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section" style={{ background: "var(--brand-bone)" }}>
        <div className="container prose-grid">
          <h2>How to position Ledge</h2>
          <div className="prose-body">
            <p>
              Position around reviewer productivity and firm governance, not only categorization
              accuracy. Emphasize that firm owners can enforce policy while still accelerating close.
            </p>
            <ul>
              {CONTENT_TO_ADD.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
