import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ledge is building the AI bookkeeping layer for accounting firms — so firms can serve more clients without hiring more staff.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building the bookkeeping layer"
        italic="for every accounting firm."
        lead="We started Ledge because bookkeeping is the most labor-intensive, lowest-leverage part of accounting — and the one most ready for AI. Our goal is a firm where a single partner can profitably serve 200 clients."
      />

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Our thesis</h2>
          <div className="prose-body">
            <p>
              Accounting firms have scaled the same way for 40 years: add staff, add clients, repeat.
              The margin barely moves. Every firm we talked to named the same bottleneck — categorization,
              reconciliation, and month-end close. Three manual steps that happen on every client, every
              month, and can&apos;t be skipped.
            </p>
            <p>
              The model quality is finally there. Foundation models can read bank memos, match merchants,
              and reason about a chart of accounts with <strong>98%+ accuracy on typical transactions</strong>.
              The remaining 2% is the judgment call — exactly where a bookkeeper&apos;s expertise is most
              valuable. Ledge turns that 2% into the entire job, and the firm&apos;s margin follows.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section" style={{ background: "var(--brand-bone)", borderTop: "1px solid var(--brand-stone)", borderBottom: "1px solid var(--brand-stone)" }}>
        <div className="container prose-grid">
          <h2>What we&apos;re building toward</h2>
          <div className="prose-body">
            <p>
              A firm where the books are always closed, a client&apos;s P&amp;L is never more than 24 hours
              stale, and the bookkeeper&apos;s time is spent on <strong>advisory and client relationships</strong>,
              not data entry.
            </p>
            <p>
              Ledge sits on top of QuickBooks and Xero rather than replacing them — because forcing a
              migration on 30 clients at once isn&apos;t realistic. The firm keeps the tools it knows, and the
              automation works quietly underneath.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Principles</div>
          <div className="tile-grid">
            <div className="tile">
              <div className="tile-kicker">01</div>
              <div className="tile-title">Never a black box</div>
              <div className="tile-body">
                Every entry Ledge posts comes with a confidence score and the factors that produced it.
                If we&apos;re not sure, we say so — and we don&apos;t guess.
              </div>
            </div>
            <div className="tile">
              <div className="tile-kicker">02</div>
              <div className="tile-title">The firm owns the data</div>
              <div className="tile-body">
                Per-firm isolation is the default. Training signals stay inside the firm unless they
                explicitly opt in to peer benchmarks, and never leak across clients.
              </div>
            </div>
            <div className="tile">
              <div className="tile-kicker">03</div>
              <div className="tile-title">Augment, don&apos;t replace</div>
              <div className="tile-body">
                The bookkeeper&apos;s job gets smaller, faster, and higher-leverage — not eliminated. The
                reviewer is always the final word, and the model learns from every correction.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Where we are</h2>
          <div className="prose-body">
            <p>
              Based in Houston, TX. Small, senior team. We&apos;re working closely with pilot firms on the
              East and Gulf coasts and rolling out invite-only access through the end of 2026.
            </p>
            <p>
              If your firm is the kind of place where the partner still knows every client&apos;s chart of
              accounts by heart — we&apos;d love to meet you. <Link href="/#demo">Book a demo</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
