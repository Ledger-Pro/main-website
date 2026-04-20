import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  italic,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="eclipse ec-blue" />
      <div className="eclipse ec-violet" />
      <div className="container page-hero-inner">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="h2" style={{ marginTop: 16, maxWidth: "20ch" }}>
          {title}
          {italic ? (
            <>
              {" "}
              <span className="ital">{italic}</span>
            </>
          ) : null}
        </h1>
        <p className="lead" style={{ marginTop: 20, maxWidth: "58ch" }}>
          {lead}
        </p>
        {children}
      </div>
    </header>
  );
}
