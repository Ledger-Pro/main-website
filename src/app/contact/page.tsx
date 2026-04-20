import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { DemoForm } from "@/components/demo-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the LedgerAI team — sales, security, press, and general questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the"
        italic="right team."
        lead="We answer fast — usually same business day. For demos, the form below is the quickest path. For anything else, email works best."
      />

      <section className="prose-section">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Direct channels
            </div>
            <div className="contact-list">
              <div className="contact-card">
                <h3>Sales &amp; demos</h3>
                <a href="mailto:sales@ledgerai.com">sales@ledgerai.com</a>
                <div className="tile-body">
                  Pricing, pilots, multi-client rollouts. The form on this page routes here too.
                </div>
              </div>
              <div className="contact-card">
                <h3>Customer support</h3>
                <a href="mailto:support@ledgerai.com">support@ledgerai.com</a>
                <div className="tile-body">
                  Active-customer issues — response within 4 business hours, 1 hour on Enterprise.
                </div>
              </div>
              <div className="contact-card">
                <h3>Security &amp; trust</h3>
                <a href="mailto:security@ledgerai.com">security@ledgerai.com</a>
                <div className="tile-body">
                  Whitepaper, SOC 2 report, vulnerability disclosure, DPA / BAA requests.
                </div>
              </div>
              <div className="contact-card">
                <h3>Press</h3>
                <a href="mailto:press@ledgerai.com">press@ledgerai.com</a>
                <div className="tile-body">
                  Media kit, executive interviews, customer introductions.
                </div>
              </div>
              <div className="contact-card">
                <h3>Headquarters</h3>
                <div>Houston, TX · United States</div>
                <div className="tile-body">On-site visits by appointment — reach out first.</div>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Book a demo
            </div>
            <div
              style={{
                background:
                  "radial-gradient(ellipse at 0% 100%, color-mix(in oklab, var(--blue-400) 30%, transparent), transparent 50%), linear-gradient(135deg, var(--blue-900), var(--blue-700))",
                color: "#fff",
                borderRadius: 18,
                padding: 28,
                boxShadow: "0 30px 60px -30px rgba(31, 65, 176, 0.4)",
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  marginBottom: 20,
                  fontFamily: "var(--sans-display)",
                }}
              >
                Tell us about your firm — we&apos;ll bring a sample close.
              </div>
              <div className="cta-block" style={{ padding: 0, background: "none", display: "block" }}>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
