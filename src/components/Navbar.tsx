import { navLinks } from "../data/content";
import { Reveal } from "./Reveal";

export function Navbar() {
  return (
    <header className="site-header">
      <Reveal>
        <div className="logo">LG</div>
      </Reveal>
      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
