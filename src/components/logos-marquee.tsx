"use client";

type IconType = "square" | "triangle" | "circle" | "diamond" | "hex" | "star" | "bars" | "arc";

interface BrandLogo {
  name: string;
  icon: IconType;
}

/* Per docs/brand/DESIGN.md §5.5: real partner logos use partner colors;
   fictional/placeholder marks render in a single neutral so they read as
   stand-ins, not real brands. We use Forest 700 uniformly. */
const FICTIONAL_MARK_COLOR = "#1F5443";

const LOGOS: BrandLogo[] = [
  { name: "Keystone", icon: "square" },
  { name: "Northwind", icon: "triangle" },
  { name: "Axis & Co.", icon: "circle" },
  { name: "Meridian", icon: "diamond" },
  { name: "Foundry 42", icon: "hex" },
  { name: "Brightline", icon: "star" },
  { name: "Lattice", icon: "bars" },
  { name: "Heron", icon: "arc" },
];

function LogoIcon({ type }: { type: IconType }) {
  const color = FICTIONAL_MARK_COLOR;
  switch (type) {
    case "square":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="18" height="18" rx="4" fill={color} />
          <rect x="6" y="6" width="10" height="10" rx="2" fill="#FAFAF7" />
        </svg>
      );
    case "triangle":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 2l9 17H2z" fill={color} />
        </svg>
      );
    case "circle":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="9" fill={color} />
          <circle cx="11" cy="11" r="4" fill="#FAFAF7" />
        </svg>
      );
    case "diamond":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 2l9 9-9 9-9-9z" fill={color} />
        </svg>
      );
    case "hex":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 2l8 4.5v9L11 20l-8-4.5v-9z" fill={color} />
        </svg>
      );
    case "star":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path
            d="M11 2l2.6 6.3 6.8.5-5.2 4.4 1.7 6.6L11 16.3 5.1 19.8l1.7-6.6L1.6 8.8l6.8-.5z"
            fill={color}
          />
        </svg>
      );
    case "bars":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="3" y="10" width="3" height="9" fill={color} />
          <rect x="9" y="6" width="3" height="13" fill={color} />
          <rect x="15" y="2" width="3" height="17" fill={color} />
        </svg>
      );
    case "arc":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M3 18a8 8 0 0116 0" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <circle cx="11" cy="18" r="2.5" fill={color} />
        </svg>
      );
  }
}

export function LogosMarquee() {
  const pool = [...LOGOS, ...LOGOS];
  return (
    <section className="logos-wrap" style={{ padding: "48px 0" }}>
      <div className="container">
        <div className="logos-head">Trusted by 300+ bookkeeping firms</div>
        <div className="logos-marquee">
          <div className="logos-track">
            {pool.map((l, i) => (
              <div className="logo-cell" key={`${l.name}-${i}`}>
                <LogoIcon type={l.icon} />
                <span>{l.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
