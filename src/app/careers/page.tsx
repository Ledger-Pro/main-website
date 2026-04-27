import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Ledge hires senior engineering, design, and go-to-market talent out of Houston, TX. No public listings today — we recruit by introduction.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the firm of the"
        italic="next decade."
        lead="We're a small, senior team in Houston. Engineering-heavy, opinionated, shipping weekly. If you've wanted to work on AI that actually ships to customers instead of living in a demo — come talk to us."
      />

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>How we hire</h2>
          <div className="prose-body">
            <p>
              We don&apos;t run a public job board. The team is small by design and every hire is
              made directly by a founder. If the work we&apos;re describing on this site sounds like
              the problem you want to spend the next five years on, we&apos;d like to hear from you —
              even if there&apos;s no role listed.
            </p>
            <p>
              We&apos;re especially interested in people with deep experience in{" "}
              <strong>accounting, fintech, applied ML, or developer tools</strong>, and in people who
              have built and shipped something end-to-end — not just prototypes.
            </p>
            <p>
              Send a short note with what you&apos;ve built to{" "}
              <a href="mailto:careers@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                careers@getledge.ai
              </a>
              . We reply within a week, always.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
