"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  StripeLogo,
  ShopifyLogo,
  AwsLogo,
  GustoLogo,
  FigmaLogo,
  SlackLogo,
  GithubLogo,
  NotionLogo,
  GoogleAdsLogo,
  VercelLogo,
  LinkedInLogo,
  RampLogo,
  MercuryLogo,
  HardwareLogo,
  UnknownLogo,
} from "@/components/icons/brand-logos";

type TxnClass = "hi" | "warn" | "err" | "hi-blue";
type Direction = "in" | "out";

interface Txn {
  m: string;
  sec: string;
  a: string;
  cat: string;
  conf: number;
  cls: TxnClass;
  dir: Direction;
  logo: ReactNode;
}

const TXNS: Txn[] = [
  { m: "Stripe",            sec: "payout",        a: "+ $12,840.00", cat: "INCOME · 4010",    conf: 99, cls: "hi",      dir: "in",  logo: <StripeLogo /> },
  { m: "Shopify",           sec: "store sales",   a: "+ $8,420.16",  cat: "INCOME · 4010",    conf: 99, cls: "hi",      dir: "in",  logo: <ShopifyLogo /> },
  { m: "Mercury",           sec: "wire received", a: "+ $24,500.00", cat: "INCOME · 4020",    conf: 98, cls: "hi",      dir: "in",  logo: <MercuryLogo /> },
  { m: "AWS",               sec: "us-east-1",     a: "– $842.19",    cat: "HOSTING · 5210",   conf: 97, cls: "hi-blue", dir: "out", logo: <AwsLogo /> },
  { m: "Gusto",             sec: "payroll run",   a: "– $28,104.50", cat: "PAYROLL · 6100",   conf: 98, cls: "hi-blue", dir: "out", logo: <GustoLogo /> },
  { m: "Google Ads",        sec: "campaign · q2", a: "– $3,280.00",  cat: "MARKETING · 6400", conf: 96, cls: "hi-blue", dir: "out", logo: <GoogleAdsLogo /> },
  { m: "Figma",             sec: "team seats",    a: "– $180.00",    cat: "SOFTWARE · 5220",  conf: 99, cls: "hi-blue", dir: "out", logo: <FigmaLogo /> },
  { m: "Slack",             sec: "pro annual",    a: "– $960.00",    cat: "SOFTWARE · 5220",  conf: 98, cls: "hi-blue", dir: "out", logo: <SlackLogo /> },
  { m: "GitHub",            sec: "enterprise",    a: "– $420.00",    cat: "SOFTWARE · 5220",  conf: 97, cls: "hi-blue", dir: "out", logo: <GithubLogo /> },
  { m: "Notion",            sec: "team plan",     a: "– $240.00",    cat: "SOFTWARE · 5220",  conf: 96, cls: "hi-blue", dir: "out", logo: <NotionLogo /> },
  { m: "Vercel",            sec: "pro",           a: "– $180.00",    cat: "HOSTING · 5210",   conf: 98, cls: "hi-blue", dir: "out", logo: <VercelLogo /> },
  { m: "LinkedIn",          sec: "sponsored",     a: "– $495.00",    cat: "MARKETING · 6400", conf: 93, cls: "hi-blue", dir: "out", logo: <LinkedInLogo /> },
  { m: "Ramp",              sec: "card refund",   a: "+ $142.88",    cat: "INCOME · 4090",    conf: 97, cls: "hi",      dir: "in",  logo: <RampLogo /> },
  { m: "Union Sq Hardware", sec: "ch.2404",       a: "– $248.17",    cat: "REVIEW · 5400",    conf: 62, cls: "warn",    dir: "out", logo: <HardwareLogo /> },
  { m: "UNKNOWN LLC",       sec: "wire",          a: "– $4,200.00",  cat: "FLAGGED",          conf: 38, cls: "err",     dir: "out", logo: <UnknownLogo /> },
];

export function HeroVisual() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setCycle((c) => c + 1), 2800);
    return () => window.clearInterval(id);
  }, []);

  const queueN = 12 + (cycle % 7) - 3;
  const autoPct = 93 + (cycle % 3);

  return (
    <div className="hero-visual" data-variant="list" aria-hidden="true">
      <div className="viz-a">
        <div className="viz-panel">
          <div className="viz-head">
            <div className="viz-head-l">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="1" width="18" height="18" rx="5" fill="url(#markGrad)" />
                <path d="M6 7h8M6 10h8M6 13h5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <h4>Ledger — April 2026</h4>
            </div>
            <span className="sub">Live · 1,284 txns</span>
          </div>

          <div className="txn-list">
            {TXNS.map((t, i) => (
              <div
                key={t.m + t.a}
                className={`txn ${t.cls}`}
                style={{ animationDelay: `${Math.min(i, 6) * 0.08}s` }}
              >
                <div className="avatar avatar-logo">{t.logo}</div>
                <div className="merchant">
                  {t.m}
                  <span className="sec">{t.sec}</span>
                </div>
                <div className={`amount amount-${t.dir}`}>{t.a}</div>
                <div className="cat">{t.cat}</div>
                <div className="score">
                  <span className="d" />
                  {t.conf}%
                </div>
                <div className="confidence">
                  <div
                    className="bar"
                    style={
                      {
                        "--w": `${t.conf}%`,
                        animationDelay: `${0.4 + Math.min(i, 6) * 0.08}s`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="viz-foot">
            <span className="progress">
              <span className="dot-pulse" />
              Processing · <span>{autoPct}</span>% auto-categorized
            </span>
            <span>
              Queue · <span>{queueN}</span> to review
            </span>
          </div>
        </div>
      </div>

      <HeroDial />
    </div>
  );
}

function HeroDial() {
  const circRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const el = circRef.current;
    if (!el) return;
    const radius = 48;
    const circumference = 2 * Math.PI * radius;
    el.style.strokeDasharray = `${circumference}`;
    el.style.strokeDashoffset = `${circumference}`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = circumference * (1 - 94 / 100);
          el.animate(
            [{ strokeDashoffset: circumference }, { strokeDashoffset: target }],
            { duration: 1400, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards" },
          );
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="viz-b">
      <div className="viz-panel" style={{ gridTemplateRows: "auto 1fr auto" }}>
        <div className="viz-head">
          <div className="viz-head-l">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#2a54d6" strokeWidth="1.4" />
              <path d="M10 4v6l4 2" stroke="#2a54d6" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <h4>Confidence · April 2026</h4>
          </div>
          <span className="sub">1,284 txns</span>
        </div>
        <div className="dial-wrap">
          <svg className="dial" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="dialGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2a54d6" />
                <stop offset="0.5" stopColor="#7c5bff" />
                <stop offset="1" stopColor="#19c7c2" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#eef3fb" strokeWidth="10" />
            <circle
              ref={circRef}
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="url(#dialGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              strokeDasharray="301.6"
              strokeDashoffset="301.6"
            />
          </svg>
          <div className="dial-center">
            <div className="num">
              94<span className="pct">%</span>
            </div>
            <div className="lbl">Auto-booked ≥95% conf.</div>
          </div>
        </div>
        <div className="dial-legend">
          <div className="cell">
            <span className="k">Auto</span>
            <span className="v">
              1,208<span className="u">txn</span>
            </span>
          </div>
          <div className="cell">
            <span className="k">Review</span>
            <span className="v">
              64<span className="u">txn</span>
            </span>
          </div>
          <div className="cell">
            <span className="k">Flagged</span>
            <span className="v">
              12<span className="u">txn</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
