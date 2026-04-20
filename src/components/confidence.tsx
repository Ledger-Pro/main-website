"use client";

import { useEffect, useRef } from "react";

interface CdBar {
  name: string;
  desc: string;
  width: number;
  num: string;
  variant?: "warn" | "err";
}

const BARS: CdBar[] = [
  {
    name: "Merchant match",
    desc: 'Name normalized to "Union Sq Hardware"',
    width: 94,
    num: "0.94",
  },
  {
    name: "Amount pattern",
    desc: "Consistent with 6 prior bookings",
    width: 88,
    num: "0.88",
  },
  {
    name: "Memo signal",
    desc: '"SUPPLIES/2404" — ambiguous vs. "Repairs"',
    width: 62,
    num: "0.62",
    variant: "warn",
  },
  {
    name: "Peer firm consensus",
    desc: "92% of peers book this merchant to 5400 · Supplies",
    width: 92,
    num: "0.92",
  },
];

export function Confidence() {
  const vizRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = vizRef.current;
    if (!root) return;

    const fills = root.querySelectorAll<HTMLElement>(".cd-bar .fill");
    const targets = new Map<HTMLElement, string>();
    fills.forEach((el) => {
      targets.set(el, el.style.width);
      el.style.width = "0%";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          root.classList.add("in");
          fills.forEach((el) => {
            el.style.transition = "width 1.1s cubic-bezier(.2,.7,.2,1)";
            requestAnimationFrame(() => {
              el.style.width = targets.get(el) ?? "0%";
            });
          });
          observer.disconnect();
          break;
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="confidence">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Confidence scoring</div>
            <h2 className="h2" style={{ marginTop: 16, maxWidth: "18ch" }}>
              An <span className="ital">honest</span> score on every entry.
            </h2>
          </div>
          <p className="lead">
            We don&apos;t hide behind &ldquo;AI magic.&rdquo; Every categorization is accompanied by
            a score and the factors that produced it. When the model isn&apos;t sure, we tell
            you — so your time goes to the handful of entries that actually need judgment.
          </p>
        </div>

        <div className="cd-grid">
          <div className="cd-list">
            <div className="cd-item">
              <div>
                <div className="lbl">≥ 95% confidence</div>
                <div className="t">Auto-book, reviewable later</div>
                <div className="d">
                  Posted straight to the GL. Your team can sample at any time — nothing is locked.
                </div>
              </div>
              <span className="pill hi">Auto</span>
            </div>
            <div className="cd-item">
              <div>
                <div className="lbl">70–95% confidence</div>
                <div className="t">Queued for one-tap review</div>
                <div className="d">
                  LedgerAI proposes a category with its reasoning and two alternatives. Reviewer
                  taps accept or corrects — the model learns immediately.
                </div>
              </div>
              <span className="pill warn">Review</span>
            </div>
            <div className="cd-item">
              <div>
                <div className="lbl">&lt; 70% confidence</div>
                <div className="t">Flagged to client, no guesses</div>
                <div className="d">
                  For unfamiliar vendors or unusual amounts, we ask the client directly via the
                  portal rather than inventing a category.
                </div>
              </div>
              <span className="pill err">Flag</span>
            </div>
          </div>

          <div className="cd-viz reveal" ref={vizRef}>
            <div className="head">
              <span>Txn · 2404-1184</span>
              <span>UNION SQ HARDWARE · $248.17</span>
            </div>

            {BARS.map((b) => (
              <div key={b.name}>
                <div className={`cd-row${b.variant ? ` ${b.variant}` : ""}`}>
                  <div>
                    <div className="name">{b.name}</div>
                    <div className="desc">{b.desc}</div>
                    <div className="cd-bar">
                      <div className="fill" style={{ width: `${b.width}%` }} />
                    </div>
                  </div>
                  <div className="num">{b.num}</div>
                </div>
              </div>
            ))}

            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 14,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--ink-3)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Final score
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    marginTop: 2,
                  }}
                >
                  0.89 → <span style={{ color: "var(--warn)" }}>Review</span>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--ink-3)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Proposed
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>
                  5400 · Supplies &amp; Materials
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
