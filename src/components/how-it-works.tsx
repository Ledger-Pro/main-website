import Image from "next/image";
import { Reveal } from "./reveal";

const INTEGRATIONS: { name: string; domain: string }[] = [
  { name: "Chase", domain: "chase.com" },
  { name: "Bank of America", domain: "bankofamerica.com" },
  { name: "Wells Fargo", domain: "wellsfargo.com" },
  { name: "Citi", domain: "citi.com" },
  { name: "Capital One", domain: "capitalone.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "PayPal", domain: "paypal.com" },
  { name: "Square", domain: "squareup.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "QuickBooks", domain: "quickbooks.intuit.com" },
  { name: "Xero", domain: "xero.com" },
];

function faviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

export function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">How it works</div>
            <h2 className="h2" style={{ marginTop: 16, maxWidth: "16ch" }}>
              One pipeline, from bank feed to <span className="ital">finished statement.</span>
            </h2>
          </div>
          <p className="lead">
            LedgerAI reads the same data you do — bank feeds, receipts, invoices — and runs it
            through a supervised pipeline with a human check at exactly the point where it matters.
          </p>
        </div>

        <Reveal className="pipe-grid" stagger>
          <div className="pipe-step">
            <div className="n">
              <span className="bullet">01</span> INGEST
            </div>
            <div className="t">Connect the source.</div>
            <div className="d">
              Secure read-only connections to 12,000+ banks, Stripe, Square, Shopify, AP inboxes,
              and QBO / Xero ledgers.
            </div>
            <div className="ill">
              <div className="brand-rail">
                {INTEGRATIONS.map((i) => (
                  <div className="brand-chip" title={i.name} key={i.name}>
                    <Image
                      src={faviconUrl(i.domain)}
                      alt={i.name}
                      width={18}
                      height={18}
                      unoptimized
                    />
                  </div>
                ))}
                <div className="brand-more" title="12,000+ integrations">
                  +12k
                </div>
              </div>
            </div>
          </div>

          <div className="pipe-step">
            <div className="n">
              <span className="bullet">02</span> CLASSIFY
            </div>
            <div className="t">Categorize with a score.</div>
            <div className="d">
              Every transaction is mapped to your COA with a confidence score derived from
              merchant, memo, history, and peer firms.
            </div>
            <div className="ill">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "7px",
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  color: "#2a3558",
                  alignItems: "center",
                }}
              >
                <span>Starbucks #482</span>
                <span style={{ color: "#148f5e", fontWeight: 600 }}>98%</span>
                <span>AWS us-east-1</span>
                <span style={{ color: "#148f5e", fontWeight: 600 }}>97%</span>
                <span>UNKNOWN LLC</span>
                <span style={{ color: "#c78210", fontWeight: 600 }}>62%</span>
              </div>
            </div>
          </div>

          <div className="pipe-step">
            <div className="n">
              <span className="bullet">03</span> RECONCILE
            </div>
            <div className="t">Match &amp; balance.</div>
            <div className="d">
              Continuous reconciliation against bank statements. Duplicates collapse, transfers
              pair, variances surface immediately.
            </div>
            <div className="ill">
              <svg width="100%" height="72" viewBox="0 0 220 72" fill="none">
                <defs>
                  <linearGradient id="recLine" x1="0" x2="1">
                    <stop offset="0" stopColor="#2a54d6" />
                    <stop offset="1" stopColor="#19c7c2" />
                  </linearGradient>
                </defs>
                <rect x="4" y="10" width="70" height="20" rx="4" fill="#eaf1ff" stroke="#2a54d6" strokeOpacity=".3" />
                <rect x="4" y="42" width="70" height="20" rx="4" fill="#eaf1ff" stroke="#2a54d6" strokeOpacity=".3" />
                <rect x="146" y="10" width="70" height="20" rx="4" fill="#e4f8f7" stroke="#19c7c2" strokeOpacity=".4" />
                <rect x="146" y="42" width="70" height="20" rx="4" fill="#e4f8f7" stroke="#19c7c2" strokeOpacity=".4" />
                <text x="39" y="24" textAnchor="middle" fill="#2a54d6" fontFamily="JetBrains Mono" fontWeight="600" fontSize="9">LEDGER</text>
                <text x="39" y="56" textAnchor="middle" fill="#2a54d6" fontFamily="JetBrains Mono" fontWeight="600" fontSize="9">LEDGER</text>
                <text x="181" y="24" textAnchor="middle" fill="#0f8c87" fontFamily="JetBrains Mono" fontWeight="600" fontSize="9">BANK</text>
                <text x="181" y="56" textAnchor="middle" fill="#0f8c87" fontFamily="JetBrains Mono" fontWeight="600" fontSize="9">BANK</text>
                <path d="M74 20 C 100 20, 120 20, 146 20" stroke="url(#recLine)" strokeWidth="1.6" fill="none" />
                <path d="M74 52 C 100 52, 120 52, 146 52" stroke="url(#recLine)" strokeWidth="1.6" fill="none" />
                <circle cx="110" cy="20" r="3.5" fill="#148f5e" />
                <circle cx="110" cy="52" r="3.5" fill="#148f5e" />
              </svg>
            </div>
          </div>

          <div className="pipe-step">
            <div className="n">
              <span className="bullet">04</span> CLOSE
            </div>
            <div className="t">Ship the statements.</div>
            <div className="d">
              One-click P&amp;L, Balance Sheet, and Cash Flow — in your firm&apos;s template, ready
              for the client portal or Drive folder.
            </div>
            <div className="ill">
              <svg width="100%" height="72" viewBox="0 0 220 72" fill="none">
                <rect x="8" y="6" width="120" height="60" rx="6" fill="#fff" stroke="#dce4f2" />
                <rect x="16" y="14" width="60" height="5" rx="1.5" fill="#2a54d6" />
                <rect x="16" y="24" width="90" height="3" rx="1" fill="#dce4f2" />
                <rect x="16" y="32" width="80" height="3" rx="1" fill="#dce4f2" />
                <rect x="16" y="40" width="70" height="3" rx="1" fill="#dce4f2" />
                <rect x="16" y="50" width="50" height="8" rx="2" fill="#7c5bff" opacity="0.7" />
                <rect x="138" y="6" width="70" height="60" rx="6" fill="#eaf1ff" stroke="#dce4f2" />
                <path d="M150 30 L165 42 L195 18" stroke="#148f5e" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
