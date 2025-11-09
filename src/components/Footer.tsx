import { contact } from "../data/content";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <Reveal>
        <p className="eyebrow">Stay in touch</p>
        <h2>Let’s build responsible tech for real environments.</h2>
      </Reveal>
      <div className="contact-grid">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>{contact.phone}</a>
        <a href={contact.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
