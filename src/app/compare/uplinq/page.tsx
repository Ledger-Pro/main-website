import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Ledge vs Uplinq",
  description:
    "A firm-first comparison of Ledge and Uplinq focused on software-led vs managed-service-led outcomes.",
};

const DIFFERENCES = [
  {
    title: "Business model",
    ledge: "Software platform helping firms expand margin while retaining ownership of client service.",
    other: "Managed bookkeeping and tax service model that can substitute for firm-delivered bookkeeping.",
  },
  {
    title: "Relationship ownership",
    ledge: "Firm keeps direct client relationship and service delivery control.",
    other: "Service vendor relationship can become the primary fulfillment layer for bookkeeping.",
  },
  {
    title: "Scalability economics",
    ledge: "Per-business software pricing aligns with operational leverage inside existing firm teams.",
    other: "Service-led model may provide convenience but can limit long-term firm process ownership.",
  },
];

const CONTENT_TO_ADD = [
  "Narrative section: 'How firms defend against managed-service disruption'",
  "ROI model: software-assisted margin expansion versus outsourced service margin profile",
  "Client-communication template firms can use to explain AI + human review model",
  "Partner story showing increased capacity without reducing service quality",
];

const FACTS = [
  ["Positioning", "SMB bookkeeping + tax AI with human oversight", "https://uplinq.com/"],
  ["Bookkeeping starter", "$250/mo (annual) / $300/mo (monthly)", "https://uplinq.com/pricing"],
  ["Growth tier", "$450/mo (annual) / $500/mo (monthly)", "https://uplinq.com/pricing"],
  ["Scale tier", "$700/mo (annual) / $750/mo (monthly)", "https://uplinq.com/pricing"],
  ["Tax plan entry", "$150/mo essential tax filings", "https://uplinq.com/pricing"],
  ["Customer volume claim", "Over 1,000 organizations", "https://uplinq.com/pricing"],
];

export default function CompareUplinqPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare · Uplinq"
        title="Ledge vs Uplinq:"
        italic="software vs managed service."
        lead="This comparison is mostly about strategy. If a firm wants to scale while keeping client ownership, software-led workflow leverage is a different path than managed-service substitution."
      />

      <section className="prose-section">
        <div className="container">
          <div
            className="tile"
            style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="https://www.google.com/s2/favicons?domain=uplinq.com&sz=64"
                alt="Uplinq logo"
                width={36}
                height={36}
                style={{ borderRadius: 8, border: "1px solid var(--line)" }}
                loading="lazy"
              />
              <div>
                <div className="tile-title" style={{ margin: 0 }}>
                  Uplinq snapshot
                </div>
                <div className="tile-body">Public claims from Uplinq homepage and pricing page.</div>
              </div>
            </div>
            <a className="btn btn-ghost btn-sm" href="https://uplinq.com/" target="_blank" rel="noreferrer">
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
                  Uplinq
                </div>
                <p className="tile-body">{item.other}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section" style={{ background: "var(--brand-bone)" }}>
        <div className="container prose-grid">
          <h2>Sourced competitor facts</h2>
          <div className="prose-body">
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "10px 8px" }}>Metric</th>
                    <th style={{ textAlign: "left", padding: "10px 8px" }}>Uplinq</th>
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

      <section className="prose-section" style={{ background: "var(--bg-elev)" }}>
        <div className="container prose-grid">
          <h2>How to position Ledge</h2>
          <div className="prose-body">
            <p>
              Position Ledge as the firm's defensive and growth infrastructure: same AI-driven
              efficiency outcome, without giving away client ownership or service quality standards.
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
