import { heroContent } from "../data/content";
import { Reveal } from "./Reveal";

export function Hero() {
  const { eyebrow, title, description, actions, stats } = heroContent;

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <Reveal>
          <p className="eyebrow hero-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{description}</p>
        </Reveal>
        <div className="hero-actions">
          {actions.map((action) => (
            <a
              key={action.label}
              className={`btn ${action.variant}`}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
        <div className="hero-specs">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div>
                <span className="spec-label">{stat.label}</span>
                <span className="spec-value">{stat.value}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={0.1} className="hero-visual">
        <div className="hero-device">
          <div className="device-screen">
            <div className="screen-header">
              <span>Telemetry · Live</span>
              <span>Sea Turtle Tag</span>
            </div>
            <div className="screen-graph">
              <div className="graph-line" aria-hidden="true" />
            </div>
            <div className="screen-footer">
              <span>LoRa uplinks</span>
              <span>12,480 km range</span>
            </div>
          </div>
          <div className="device-base" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
