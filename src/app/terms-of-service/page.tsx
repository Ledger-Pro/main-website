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
            <p>
              If you use Ledge on behalf of a company, you represent that you have authority to bind
              that company to these terms.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Eligibility & Acceptable Use</h2>
          <div className="prose-body">
            <ul>
              <li>You must provide accurate account, billing, and company information.</li>
              <li>You are responsible for credential security and team-level access permissions.</li>
              <li>You must not misuse, reverse engineer, scan, or disrupt the platform.</li>
              <li>You must not use the service to violate law, privacy, or third-party rights.</li>
              <li>You remain responsible for final bookkeeping and accounting decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Customer Data, Privacy & Confidentiality</h2>
          <div className="prose-body">
            <p>
              Customer data remains owned by the customer (or their clients, as applicable). We
              process data to provide contracted services, secure the platform, and satisfy legal
              obligations.
            </p>
            <p>
              Both parties agree to protect confidential information using reasonable safeguards and
              to limit access to authorized personnel.
            </p>
            <p>
              Privacy handling is further described in our{" "}
              <a href="/privacy-policy" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Subscriptions, Billing & Suspension</h2>
          <div className="prose-body">
            <p>
              Paid plans are billed under the applicable order form, quote, or plan terms shown at
              purchase.
            </p>
            <ul>
              <li>Fees are due according to the billing cycle selected at checkout or contracting.</li>
              <li>Unless stated otherwise, fees are non-refundable.</li>
              <li>Taxes, duties, and bank charges are customer responsibility where applicable.</li>
            </ul>
            <p>
              We may suspend access for material breach, security risk, abuse, or non-payment after
              reasonable notice when practicable.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Service Levels, Warranties & Disclaimers</h2>
          <div className="prose-body">
            <p>
              We work to keep the service available and secure, but all services are provided on an
              “as is” and “as available” basis except as expressly stated in a signed agreement.
            </p>
            <p>
              Except where prohibited by law, we disclaim implied warranties including
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Limitation of Liability</h2>
          <div className="prose-body">
            <p>
              To the maximum extent permitted by law, neither party is liable for indirect,
              incidental, consequential, special, punitive, or exemplary damages, including lost
              profits, data, goodwill, or business opportunity.
            </p>
            <p>
              Our aggregate liability for claims arising from the service is limited to the fees
              paid by customer for the affected service period (typically the 12 months before the
              claim), unless a signed agreement states otherwise.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Intellectual Property</h2>
          <div className="prose-body">
            <p>
              Ledge and related materials are owned by Spur Global Ventures Inc. and licensors.
              These terms grant a limited, non-exclusive, non-transferable right to use the service
              during an active subscription.
            </p>
            <p>
              No ownership rights are transferred to customer except rights in customer-owned data.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Termination</h2>
          <div className="prose-body">
            <p>
              Either party may terminate for material breach if the breach is not cured within a
              reasonable period after written notice, or as otherwise set out in an order form.
            </p>
            <p>
              On termination, access may be disabled and data handling will follow contractual and
              legal retention obligations.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container prose-grid">
          <h2>Governing Law</h2>
          <div className="prose-body">
            <p>
              These terms are governed by applicable laws specified in your signed order form. If no
              separate agreement exists, default jurisdiction is Texas, United States, subject to
              mandatory consumer protection laws where applicable.
            </p>
          </div>
        </div>
      </section>

      <section
        className="prose-section"
        style={{ background: "var(--brand-bone)", borderTop: "1px solid var(--brand-stone)" }}
      >
        <div className="container prose-grid">
          <h2>Contact & Legal Notices</h2>
          <div className="prose-body">
            <p>
              Questions about these terms:{" "}
              <a href="mailto:legal@getledge.ai" style={{ color: "var(--brand-forest-700)", fontWeight: 500 }}>
                legal@getledge.ai
              </a>
            </p>
            <p>
              Spur Global Ventures Inc., 3200 Wilcrest Drive, Suite 575, Houston, TX 77042,
              United States.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
