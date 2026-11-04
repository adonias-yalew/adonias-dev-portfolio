import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import ThemeToggle from "@/components/ThemeToggle";
import SideReadingProgress from "@/components/SideReadingProgress";

const profileGithub = "https://github.com/adonias-yalew";
const audiences: Record<string, string[]> = {
  "scholar-academy": ["School administrators", "Teachers", "Homeroom teachers", "Directors"],
  "developer-gazette": ["Portfolio visitors", "Recruiters", "Project collaborators"],
  "clinic-booking": ["Patients", "Doctors", "Clinic staff"],
  haymanote: ["Community members", "Verified leaders", "Platform administrators"],
  "mela-solutions": ["Students", "Recent graduates", "Opportunity seekers"],
  "tourism-booking": ["Travelers", "Tour operators", "Hospitality teams"],
  "addis-tesfa": ["People seeking support", "Practitioners", "Platform administrators"],
};
const contributions: Record<string, string> = {
  "scholar-academy":
    "Shaping role-specific school workflows, the mark submission pipeline, and the reporting handoff from homeroom review to the director.",
  "developer-gazette":
    "Designing and building the portfolio experience, project case studies, responsive layouts, and editorial visual system.",
  "clinic-booking":
    "Building the appointment flow around patient accounts, doctor availability, appointment history, and clinic staff tools.",
  haymanote:
    "Developing the platform foundation across authentication, community access, marketplace flows, and role-aware services.",
  "mela-solutions":
    "Building the student opportunity experience: Supabase-backed authentication and listings, search filters, and Telegram updates.",
  "tourism-booking":
    "Developing catalog, availability, reservation, confirmation, and operator-facing flows for tours and travel packages.",
  "addis-tesfa":
    "Building the account and appointment experience alongside the resource library and user dashboard structure.",
};
const systemLayers: Record<string, string[]> = {
  "scholar-academy": ["React + TypeScript dashboards", "REST API", "Academic records & marks"],
  "developer-gazette": ["React + TypeScript", "Vite + CSS", "Project case studies & portfolio"],
  "clinic-booking": ["React experience", "Node.js + Express API", "PostgreSQL records"],
  haymanote: ["Node.js + Express API", "PostgreSQL · MongoDB", "Community · marketplace · events"],
  "mela-solutions": ["Next.js platform", "Supabase · PostgreSQL", "Telegram Bot API"],
  "tourism-booking": [
    "Customer & operator flows",
    "Node.js + Express API",
    "MySQL bookings & inventory",
  ],
  "addis-tesfa": [
    "Web experience",
    "Node.js + Express API",
    "PostgreSQL · appointments & resources",
  ],
};

export default function ProjectPage() {
  const { projectId = "" } = useParams();
  const [activeSection, setActiveSection] = useState("problem");
  const project = getProject(projectId);
  const projectOrder = [
    "scholar-academy",
    "haymanote",
    "clinic-booking",
    "mela-solutions",
    "developer-gazette",
    "addis-tesfa",
    "tourism-booking",
  ];
  const projectIndex = projectOrder.indexOf(projectId);
  const others = projects.filter((item) => item.slug !== projectId).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".detail-section[id]"));
    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".detail-section, .detail-hero-image").forEach((node) => {
      node.setAttribute("data-reveal", "");
      revealObserver.observe(node);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [projectId, project]);

  if (!project)
    return (
      <div className="case-study-page detail-not-found">
        <span className="mono">404 / FILE NOT FOUND</span>
        <h1>This story isn’t in this issue.</h1>
        <Link to="/">
          Back to Adonias Yalew <ArrowRight size={16} />
        </Link>
      </div>
    );

  const hasRepository = project.github && project.github !== profileGithub;
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <main className={`case-study-page detail-page detail-${project.slug}`}>
      <SideReadingProgress />
      <div className="detail-masthead">
        <Link to="/" className="detail-brand">
          <span>AY.</span> ADONIAS YALEW
        </Link>
        <span className="mono">SPECIAL PROJECT EDITION / Nº 0{projectIndex + 1}</span>
        <Link to="/#projects" className="detail-back">
          <ArrowLeft size={15} /> ALL STORIES
        </Link>
        <ThemeToggle />
      </div>
      <article>
        <header className="detail-cover">
          <div className="detail-topline mono">
            <span>FEATURE STORY / {project.year}</span>
            <span>{project.status || (hasDemo ? "DEMO AVAILABLE" : "PROJECT NOTES")}</span>
            <span>ENGINEERING JOURNAL / FIELD NOTES</span>
          </div>
          <div className="detail-headline">
            <div>
              <p className="detail-category mono">{project.tech.slice(0, 3).join(" / ")}</p>
              <h1>{project.title.replace(" — School Academic Management System", "")}</h1>
              <p>{project.tagline}</p>
              <div className="detail-links">
                {hasDemo && (
                  <a className="detail-cta" href={project.demo} target="_blank" rel="noreferrer">
                    OPEN LIVE DEMO <ArrowUpRight size={15} />
                  </a>
                )}
                {hasRepository && (
                  <a
                    className="detail-source"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={15} /> SOURCE REPOSITORY <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
            <div className="detail-index">
              <span>
                ADONIAS YALEW
                <br />
                FIELD FILE
              </span>
              <b>0{projectIndex + 1}</b>
              <i>↘</i>
            </div>
          </div>
          {project.image && (
            <figure className="detail-hero-image">
              <img src={project.image} alt={`${project.title} interface`} fetchPriority="high" />
              <figcaption className="mono">
                <span>FIG. 0{projectIndex + 1} / INTERFACE CAPTURE</span>
                <span>{project.title}</span>
              </figcaption>
            </figure>
          )}
        </header>

        <div className="detail-body">
          <aside className="detail-rail">
            <span className="mono">IN THIS FILE</span>
            <nav className="detail-rail-nav" aria-label="Project sections">
              <span
                className="detail-rail-progress"
                aria-hidden="true"
                style={{
                  transform: `scaleY(${(Math.max(0, ["problem", "approach", "engineering", "status"].indexOf(activeSection)) + 1) / 4})`,
                }}
              />
              {[
                ["problem", "01", "The problem"],
                ["approach", "02", "The approach"],
                ["engineering", "03", "Engineering"],
                ["status", "04", "Status & next"],
              ].map(([id, number, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? "is-active" : undefined}
                  aria-current={activeSection === id ? "location" : undefined}
                >
                  <span>{number}</span> {label}
                </a>
              ))}
            </nav>
            <span className="detail-rail-rule" />
            <span className="mono">BUILT WITH</span>
            <div className="detail-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </aside>
          <div className="detail-story">
            <section id="problem" className="detail-section">
              <div className="detail-section-label mono">
                <span>01</span>
                <span>THE REASON TO BUILD</span>
              </div>
              <h2>
                Start with the
                <br />
                <em>friction.</em>
              </h2>
              <p className="detail-lead">{project.problem}</p>
              <div className="audience-strip">
                <span className="mono">MADE FOR</span>
                <div>
                  {(audiences[project.slug] ?? []).map((audience) => (
                    <span key={audience}>{audience}</span>
                  ))}
                </div>
              </div>
            </section>
            <section id="approach" className="detail-section">
              <div className="detail-section-label mono">
                <span>02</span>
                <span>THE APPROACH</span>
              </div>
              <h2>
                A useful response
                <br />
                to a <em>real need.</em>
              </h2>
              <p className="detail-lead">{project.solution}</p>
              <div className="contribution-note">
                <span className="mono">MY BUILD NOTES</span>
                <p>{contributions[project.slug]}</p>
              </div>
              <h3 className="detail-subhead">Feature map</h3>
              <ul className="feature-list">
                {project.features.map((feature, index) => {
                  const inProgress = /in progress|planned/i.test(feature);
                  return (
                    <li key={feature}>
                      <span className="mono">0{index + 1}</span>
                      <p>{feature.replace(/\s*\((?:in progress|planned)\)/i, "")}</p>
                      {inProgress && <small>IN PROGRESS</small>}
                    </li>
                  );
                })}
              </ul>
            </section>
            <section id="engineering" className="detail-section">
              <div className="detail-section-label mono">
                <span>03</span>
                <span>UNDER THE HOOD</span>
              </div>
              <h2>
                How the pieces
                <br />
                <em>fit together.</em>
              </h2>
              <p className="detail-lead">{project.architecture}</p>
              <div
                className="architecture-flow"
                aria-label={`${project.title} architecture overview`}
              >
                {systemLayers[project.slug]
                  ?.map((layer, index) => (
                    <div className="architecture-layer" key={layer}>
                      <span className="mono">LAYER 0{index + 1}</span>
                      <b>{layer}</b>
                    </div>
                  ))
                  .flatMap((layer, index, all) =>
                    index < all.length - 1
                      ? [
                          layer,
                          <span className="architecture-arrow" key={`arrow-${index}`}>
                            →
                          </span>,
                        ]
                      : [layer],
                  )}
              </div>
              <div className="architecture-note">
                <span className="mono">ENGINEERING QUESTIONS</span>
                <ul>
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-outcomes">
                <div>
                  <span className="mono">CURRENT BUILD NOTES</span>
                  <ul>
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-quote">
                  “A project is a record of the decisions that made the next step possible.”
                </div>
              </div>
            </section>
            <section id="status" className="detail-section status-section">
              <div className="detail-section-label mono">
                <span>04</span>
                <span>WHAT’S NEXT</span>
              </div>
              <div className="status-heading">
                <h2>
                  Still a work
                  <br />
                  <em>in motion.</em>
                </h2>
                <span className="status-pill">
                  {project.status || (hasDemo ? "DEMO AVAILABLE" : "PROJECT NOTES")}
                </span>
              </div>
              <p className="detail-lead">
                The list below is a set of planned improvements, kept separate from the features
                described as part of the current build.
              </p>
              <ul className="future-list">
                {project.future.map((item) => (
                  <li key={item}>
                    <span>↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
      <section className="more-stories">
        <div className="more-stories-head">
          <span className="mono">TURN THE PAGE</span>
          <h2>
            More from
            <br />
            <em>the issue.</em>
          </h2>
        </div>
        <div className="more-stories-grid">
          {others.map((item, index) => (
            <Link to={`/projects/${item.slug}`} className="more-story" key={item.slug}>
              <span className="mono">
                FILE 0{projects.findIndex((p) => p.slug === item.slug) + 1} / {item.year}
              </span>
              {item.image && <img src={item.image} alt={`${item.title} preview`} loading="lazy" />}
              <h3>{item.title.replace(" — School Academic Management System", "")}</h3>
              <p>{item.tagline}</p>
              <span className="more-story-link">
                READ THE FILE <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <footer className="detail-footer">
        <Link to="/">ADONIAS YALEW</Link>
        <span className="mono">END OF FILE / © {new Date().getFullYear()} ADONIAS YALEW</span>
        <a href="/#contact">
          GET IN TOUCH <ArrowUpRight size={14} />
        </a>
      </footer>
    </main>
  );
}
