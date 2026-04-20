import { ArrowRight } from "./icons/arrow";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <header className="hero">
      <div className="eclipse ec-blue" />
      <div className="eclipse ec-violet" />
      <div className="eclipse ec-teal" />
      <div className="eclipse ec-amber" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-pill">
            <span className="tag">New</span>
            Closing the books in hours, not weeks · v2.4
          </div>

          <h1 className="display">
            <span>Bookkeeping</span>
            <br />
            <span>on </span>
            <span className="ital">autopilot.</span>
          </h1>

          <p className="hero-sub">
            Read your books nightly, categorize every transaction, reconcile every statement, and
            deliver month-end reports the moment the month ends. Your team reviews — not keys in.
          </p>

          <div className="hero-cta">
            <a href="#demo" className="btn btn-primary">
              Book a demo
              <ArrowRight className="arrow" />
            </a>
            <a href="#how" className="btn btn-ghost">
              See how it works
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <span className="dot" />
              SOC 2 Type II
            </span>
            <span>
              <span className="dot" />
              Bank-grade encryption
            </span>
            <span>
              <span className="dot" />
              Read-only by default
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>
    </header>
  );
}
