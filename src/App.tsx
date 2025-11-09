import "./App.css";
import {
  education,
  experiences,
  focusAreas,
  leadership,
  projects,
  skills,
} from "./data/content";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Reveal } from "./components/Reveal";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />

        <Section
          id="education"
          eyebrow="Education"
          title="Grounded in systems thinking and inclusive design."
        >
          <div className="education-grid">
            {education.map((item, index) => (
              <Reveal key={item.institution} delay={index * 0.08}>
                <article>
                  <h3>{item.institution}</h3>
                  <p className="meta">
                    {item.program} · {item.timeframe}
                  </p>
                  <p>{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Hands-on delivery across cloud, UI, and embedded stacks."
        >
          <div className="timeline">
            {experiences.map((experience, index) => (
              <Reveal key={experience.organization} delay={index * 0.1}>
                <article>
                  <div className="timeline-meta">
                    <h3>
                      {experience.organization} · {experience.role}
                    </h3>
                    <span>{experience.timeframe}</span>
                  </div>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Prototyping conservation hardware that scales to the cloud."
        >
          <div className="card-grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="card">
                  <header>
                    <p className="meta">{project.stack}</p>
                    <h3>{project.title}</h3>
                  </header>
                  <p>{project.description}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="leadership"
          eyebrow="Leadership & Service"
          title="Building teams that act on climate and conservation."
        >
          <div className="card-grid">
            {leadership.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="card">
                  <header>
                    <p className="meta">{item.organization}</p>
                    <h3>{item.title}</h3>
                  </header>
                  <p>{item.description}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Toolbox"
          title="Technologies I reach for."
        >
          <div className="split-grid skills-grid">
            <Reveal>
              <div>
                <div className="pill-list">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="eyebrow">Focus Areas</p>
                <ul className="focus-list">
                  {focusAreas.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
