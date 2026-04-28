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

const FACTS = [
  ["Funding claim", "Raised $20M", "https://kick.co/"],
  ["Social proof claim", "Used by 4k+ owners/accountants", "https://kick.co/"],
  ["Free tier", "$0/mo up to $25k annual business expenses", "https://kick.co/pricing"],
  ["Custom tier", "Starts at $200/mo", "https://kick.co/pricing"],
  ["Trial", "14-day trial noted in pricing FAQ", "https://kick.co/pricing"],
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
          <div
            className="tile"
            style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="https://www.google.com/s2/favicons?domain=kick.co&sz=64"
                alt="Kick logo"
                width={36}
                height={36}
                style={{ borderRadius: 8, border: "1px solid var(--line)" }}
                loading="lazy"
              />
              <div>
                <div className="tile-title" style={{ margin: 0 }}>
                  Kick snapshot
                </div>
                <div className="tile-body">Public claims from Kick homepage and pricing page.</div>
              </div>
            </div>
            <a className="btn btn-ghost btn-sm" href="https://kick.co/" target="_blank" rel="noreferrer">
              Visit website
            </a>
          </div>
        </div>
      </section>

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

      <section className="prose-section" style={{ background: "var(--bg-elev)" }}>
        <div className="container prose-grid">
          <h2>Sourced competitor facts</h2>
          <div className="prose-body">
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "10px 8px" }}>Metric</th>
                    <th style={{ textAlign: "left", padding: "10px 8px" }}>Kick</th>
                    <th style={{ textAlign: "left", padding: "10px 8px" }}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {FACTS.map(([metric, value, source]) => (
                    <tr key={metric}>
                      <td style={{ padding: "10px 8px", borderTop: "1px solid var(--line)" }}>{metric}</td>
                      <td style={{ padding: "10px 8px", borderTop: "1px solid var(--line)" }}>{value}</td>
                      <td style={{ padding: "10px 8px", borderTop: "1px solid var(--line)" }}>
                        <a href={source} target="_blank" rel="noreferrer">
                          {source.replace("https://", "")}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
