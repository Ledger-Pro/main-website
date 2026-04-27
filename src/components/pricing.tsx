import { ArrowRight } from "./icons/arrow";

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#D8E5DF" />
      <path
        d="M5 9l3 3 5-6"
        stroke="#0F2D24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BULLETS = [
  "Volume pricing — margins scale with you",
  "Unlimited internal seats, unlimited client portal users",
  "White-label option for firms with > 100 clients",
  "Migration from Dext, Keeper, or homegrown rules — included",
];

export function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Pricing</div>
            <h2 className="h2" style={{ marginTop: 16, maxWidth: "16ch" }}>
              Priced for <span className="ital">firms</span>, not per seat.
            </h2>
          </div>
          <p className="lead">
            We quote by book of business — number of clients, transaction volume, and the depth of
            integration. No per-user nickel-and-diming.
          </p>
        </div>

        <div className="pricing">
          <div>
            <div className="t">
              Built for the firm&apos;s <span className="ital">whole</span> book, not a single
              client.
            </div>
            <ul>
              {BULLETS.map((b) => (
                <li key={b}>
                  <Check />
                  {b}
                </li>
              ))}
            </ul>
            <a href="#demo" className="btn btn-primary" style={{ marginTop: 28 }}>
              Talk to sales
              <ArrowRight className="arrow" />
            </a>
          </div>

          <div className="card">
            <span className="label">From the field</span>
            <div className="quote">
              &ldquo;We stopped selling bookkeeping by the hour six months in. Ledge turned our
              bottom quartile of clients into the most profitable ones.&rdquo;
            </div>
            <div className="meta">— Managing partner · 34-client firm · name on file during pilot</div>
          </div>
        </div>
      </div>
    </section>
  );
}
