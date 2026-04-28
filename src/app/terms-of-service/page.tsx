import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Ledge website and services, including customer responsibilities and legal terms.",
};

export default function TermsOfServicePage() {
  const effectiveDate = "April 28, 2026";

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        italic="Service."
        lead="These terms govern access to and use of Ledge products and related services."
      />

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Agreement</h2>
          <div className="prose-body">
            <p>
              Effective date: <strong>{effectiveDate}</strong>
            </p>
            <p>
              By using Ledge, you agree to these terms. Ledge is a brand/division of{" "}
              <strong>Spur Global Ventures Inc.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Use of Services</h2>
          <div className="prose-body">
            <ul>
              <li>You must provide accurate account and company information.</li>
              <li>You are responsible for user access controls in your firm account.</li>
              <li>You agree not to misuse, reverse engineer, or disrupt the service.</li>
              <li>You remain responsible for accounting decisions and final approvals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Data & Confidentiality</h2>
          <div className="prose-body">
            <p>
              We process customer data to provide contracted services, maintain platform security,
              and meet legal obligations.
            </p>
            <p>
              Confidential information must be protected by both parties with reasonable safeguards.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Billing & Suspension</h2>
          <div className="prose-body">
            <p>
              Paid plans are billed under the applicable order form or subscription plan. We may
              suspend access for material violations, abuse, or non-payment.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Disclaimers & Liability</h2>
          <div className="prose-body">
            <p>
              The service is provided on an “as available” basis. Except where prohibited by law,
              indirect or consequential damages are excluded, and aggregate liability is limited to
              fees paid for the relevant service period.
            </p>
          </div>
        </div>
      </section>

      <section
        className="prose-section"
        style={{ background: "var(--brand-bone)", borderTop: "1px solid var(--brand-stone)" }}
      >
        <div className="container prose-grid">
          <h2>Contact</h2>
          <div className="prose-body">
            <p>
              Questions about these terms:{" "}
              <a href="mailto:legal@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                legal@getledge.ai
              </a>
            </p>
            <p>Spur Global Ventures Inc., 3200 Wilcrest Drive, Suite 575, Houston, TX 77042.</p>
          </div>
        </div>
      </section>
    </>
  );
}
