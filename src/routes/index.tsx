import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  PhoneCall,
  X,
} from "lucide-react";
import { projects } from "@/lib/projects";
import ThemeToggle from "@/components/ThemeToggle";
import SideReadingProgress from "@/components/SideReadingProgress";
import {
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  type IconType,
} from "react-icons/si";
import { FaFileExcel, FaJava } from "react-icons/fa";

const github = "https://github.com/adonias-yalew";
const linkedin = "https://www.linkedin.com/in/adonias-yalew-4269312a8/";
const email = "adoniasyalew69@gmail.com";
const phone = "+251-941-99-99-83";
const credentials = [
  {
    title: "Hack into Bright Ethiopia",
    subtitle: "Hackathon participation · 2024",
    image: "/certificates/Hack into Bright Ethiopia 2024 Hackathon.jpg",
    number: "01",
  },
  {
    title: "Professional Foundations",
    subtitle: "ALX · Certificate",
    image: "/certificates/ALX Professional Foundations Certificate.png",
    number: "02",
  },
  {
    title: "Freelance Workers Training",
    subtitle: "Ethiopia Tech · NTF V · 2024",
    image: "/certificates/Ethiopia Tech Freelance Workers Training.jpg",
    number: "03",
  },
  {
    title: "Programming Fundamentals",
    subtitle: "Udacity · Nanodegree",
    image: "/certificates/Programming Fundamentals Nanodegree.jpg",
    number: "04",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    subtitle: "Udacity · Nanodegree",
    image: "/certificates/Artificial Intelligence Fundamentals Nanodegree.jpg",
    number: "05",
  },
  {
    title: "Android Developer Fundamentals",
    subtitle: "Udacity · Nanodegree",
    image: "/certificates/Android Developer Fundamentals Nanodegree.jpg",
    number: "06",
  },
  {
    title: "Data Analysis Fundamentals",
    subtitle: "Udacity · Nanodegree",
    image: "/certificates/Data Analysis Fundamentals Nanodegree.jpg",
    number: "07",
  },
];
const chapters = [
  ["about", "The mind"],
  ["projects", "Selected work"],
  ["thinking", "How I think"],
  ["toolkit", "Toolkit"],
  ["credentials", "Credentials"],
  ["contact", "Say hello"],
];
const skillRows: {
  number: string;
  name: string;
  items: string;
  logos: { name: string; icon: IconType }[];
}[] = [
  {
    number: "01",
    name: "LANGUAGES",
    items: "JavaScript · TypeScript · Java · C# · SQL",
    logos: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "C#", icon: SiDotnet },
    ],
  },
  {
    number: "02",
    name: "FRONTEND",
    items: "React · Next.js · Tailwind CSS · Vite",
    logos: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    number: "03",
    name: "BACKEND",
    items: "Node.js · Express · REST APIs",
    logos: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    number: "04",
    name: "DATA",
    items: "PostgreSQL · MongoDB · MySQL · Supabase",
    logos: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    number: "05",
    name: "SYSTEMS THINKING",
    items: "Role-based workflows · API design · Data modeling",
    logos: [],
  },
  {
    number: "06",
    name: "TOOLS & DELIVERY",
    items: "Git · GitHub · Vercel · Excel export",
    logos: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Excel", icon: FaFileExcel },
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [scrollProgress, setScrollProgress] = useState(0);
  const featured = [
    projects.find((p) => p.slug === "scholar-academy"),
    projects.find((p) => p.slug === "mela-solutions"),
    projects.find((p) => p.slug === "clinic-booking"),
    projects.find((p) => p.slug === "haymanote"),
    projects.find((p) => p.slug === "addis-tesfa"),
    projects.find((p) => p.slug === "tourism-booking"),
  ].filter((project) => project !== undefined);

  useEffect(() => {
    if (!sessionStorage.getItem("adoni-intro-seen")) {
      setIntro(true);
      const start = performance.now();
      let frame = 0;
      const tick = (now: number) => {
        const next = Math.min(100, Math.round(((now - start) / 1450) * 100));
        setProgress(next);
        if (next < 100) frame = requestAnimationFrame(tick);
        else
          window.setTimeout(() => {
            setIntro(false);
            sessionStorage.setItem("adoni-intro-seen", "1");
          }, 220);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    const sections = chapters
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-28% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
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
    document.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));
    const measure = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(range > 0 ? (window.scrollY / range) * 100 : 0);
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      {intro && (
        <div className="intro-loader" aria-label="Loading Adoni’s portfolio">
          <div className="loader-top">
            <span>ADONIAS YALEW</span>
            <span>ISSUE Nº 01 / NOV 2026</span>
          </div>
          <div className="loader-name">
            ADONI<span>.</span>
          </div>
          <div className="loader-bottom">
            <span>THOUGHTFULLY BUILT, STILL IN PROGRESS</span>
            <div className="loader-track">
              <i style={{ width: `${progress}%` }} />
            </div>
            <b>{String(progress).padStart(2, "0")}%</b>
          </div>
        </div>
      )}
      <div className="scroll-meter" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <SideReadingProgress />
      <main className="journal dark-journal">
        <header className="site-nav">
          <a className="wordmark" href="#cover" aria-label="Adoni, back to top">
            <span className="wordmark-mark">
              A<span>.</span>
            </span>
            <span className="wordmark-caption">ADONIAS YALEW</span>
          </a>
          <div className="nav-status">
            <span /> OPEN TO WHAT’S NEXT
          </div>
          <ThemeToggle />
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="Main navigation"
          >
            {chapters
              .filter(([id]) => id !== "about" && id !== "thinking")
              .map(([id, label], index) => {
                return (
              <a
                key={id}
                className={active === id ? "nav-link active" : "nav-link"}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {label}
              </a>
                );
              })}
            <a className="nav-resume" href="/Adonias_Yalew_Resume.pdf" download>
              RÉSUMÉ <MoveUpRight size={13} />
            </a>
          </nav>
        </header>

        <section className="cover" id="cover">
          <div className="cover-grid-bg" />
          <div className="cover-top mono">
            <span>ADONIAS YALEW</span>
            <span>ADDIS ABABA, ETHIOPIA · 09°01′N</span>
            <span>ISSUE Nº 01 / NOV 2026</span>
          </div>
          <div className="cover-grid">
            <div className="cover-copy">
              <p className="eyebrow">
                <span className="eyebrow-star">✳</span> SOFTWARE ENGINEER · PRODUCT THINKER
              </p>
              <h1 className="hero-title">
                <span>Curiosity</span>
                <span>
                  with a <i>build</i>
                </span>
                <span>
                  button<span className="title-dot">.</span>
                </span>
              </h1>
              <p className="cover-intro">
                I’m <strong>Adoni</strong> — a software engineering student who turns tangled
                problems into useful, considered digital products.
              </p>
              <div className="cover-actions">
                <a className="button button-acid" href="#projects">
                  See what I’m building <ArrowDownRight size={17} />
                </a>
                <a
                  className="text-link resume-download"
                  href="/Adonias_Yalew_Resume.pdf"
                  download
                >
                  CLICK ME · DOWNLOAD RÉSUMÉ <Download size={15} />
                </a>
              </div>
              <div className="cover-footnote mono">
                <span>FIELD NOTE 001</span>
                <span>GOOD SOFTWARE STARTS WITH A BETTER QUESTION.</span>
              </div>
            </div>
            <div className="portrait-stage">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="portrait-backdrop" />
              <div className="portrait-frame">
                <img
                  src="/my-image.png"
                  alt="Adonias Yalew, software engineer"
                  fetchPriority="high"
                />
              </div>
              <div className="portrait-tag mono">
                <span>FIG. 01</span>
                <b>
                  THE PERSON
                  <br />
                  BEHIND THE PIXELS
                </b>
              </div>
              <div className="orbit-label mono">
                BUILD <i>↗</i> LEARN <i>↗</i> REPEAT
              </div>
              <span className="burst-mark">✳</span>
            </div>
          </div>
        </section>

        <section className="chapter intro-section" id="about">
          <SectionHeading
            number="01"
            label="THE PERSON & THE PRACTICE"
            title={
              <>
                Ideas are easy.
                <br />
                <em>Making them useful</em>
                <br />
                is the work.
              </>
            }
            aside="A student of software, a collector of good questions, and a builder by habit."
          />
          <div className="intro-body">
            <div className="intro-prose" data-reveal>
              <p className="lead">
                I’m studying Software Engineering at <strong>HiLCoE</strong>. Somewhere between the
                models, the interfaces, and the inevitable edge cases, I found the part I love:
                making a messy thing make sense.
              </p>
              <p>
                I’m interested in software that earns its place in someone’s day. I move between
                frontend and full-stack work, following the problem from the first sketch through
                the data model and into the details a user actually touches.
              </p>
              <p>
                I don’t expect the first version to be perfect. I do expect it to teach me something
                worth carrying into the next one.
              </p>
              <p>I’m working toward a career building dependable full-stack products with teams that care about thoughtful engineering and the people using what they make.</p>
              <a className="case-link" href="#toolkit">
                A little more about how I work <ArrowRight size={15} />
              </a>
            </div>
            <ol className="principles" data-reveal>
              <li>
                <span>NOTE 001 / START HERE</span>
                <p>
                  Get curious about the problem
                  <br />
                  <em>before getting clever with code.</em>
                </p>
                <b>01</b>
              </li>
              <li>
                <span>NOTE 002 / MAKE CHOICES</span>
                <p>
                  Trade-offs are part of the design.
                  <br />
                  <em>Name them, then make them.</em>
                </p>
                <b>02</b>
              </li>
              <li>
                <span>NOTE 003 / KEEP GOING</span>
                <p>
                  Build a version. Learn from it.
                  <br />
                  <em>Make the next one better.</em>
                </p>
                <b>03</b>
              </li>
            </ol>
          </div>
        </section>

        <section className="chapter projects-section" id="projects">
          <SectionHeading
            number="02"
            label="THE PROJECT FILES / 2024—26"
            title={
              <>
                Proof of
                <br />
                <em>curiosity.</em>
              </>
            }
            aside="Real projects, real constraints, and the engineering choices that made them work."
          />
          <div className="project-list">
            {featured.map(
              (p, i) =>
                p && (
                  <article
                    className={`project-entry project-entry-${i + 1}`}
                    key={p.slug}
                    data-reveal
                  >
                    <div className="project-meta mono">
                      <span>CASE FILE / 00{i + 1}</span>
                      <span>{p.year}</span>
                      <span>
                        {p.status || (p.demo && p.demo !== "#" ? "DEMO ONLINE" : "PROJECT FILE")}
                      </span>
                      <span>0{i + 1} — 06</span>
                    </div>
                    <div className="project-layout">
                      <Link
                        className="project-image"
                        to={`/projects/${p.slug}`}
                        aria-label={`Open ${p.title} case study`}
                      >
                        <img src={p.image} alt={`${p.title} product interface`} loading="lazy" />
                        <span className="preview-corner mono">
                          OPEN CASE FILE <ArrowUpRight size={15} />
                        </span>
                        <span className="preview-number">0{i + 1}</span>
                        <span className="preview-hover">
                          TAKE A CLOSER LOOK <ArrowUpRight size={15} />
                        </span>
                      </Link>
                      <div className="project-copy">
                        <p className="project-kicker mono">{projectCategory(p.slug)}</p>
                        <h3>{p.title.replace(" — School Academic Management System", "")}</h3>
                        <p className="project-tagline">{p.tagline}</p>
                        <div className="project-summary">
                          <span className="mono">THE PROBLEM</span>
                          <p>{p.problem}</p>
                        </div>
                        <div className="project-stack">
                          <span className="mono">BUILT WITH</span>
                          <p>{p.tech.slice(0, 5).join(" · ")}</p>
                        </div>
                        <div className="project-actions">
                          <Link className="case-link" to={`/projects/${p.slug}`}>
                            READ THE CASE STUDY <ArrowRight size={16} />
                          </Link>
                          {p.demo && p.demo !== "#" && (
                            <a className="demo-link" href={p.demo} target="_blank" rel="noreferrer">
                              LIVE PREVIEW <MoveUpRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ),
            )}
          </div>
          <p className="content-note mono">
            <span>MORE IN THE ARCHIVE</span>
            <span>→</span>
            <Link to="/projects/clinic-booking">CLINIC BOOKING SYSTEM</Link>
            <Link to="/projects/haymanote">HAYMANOTE PLATFORM</Link>
          </p>
        </section>

        <section className="chapter toolkit-section" id="toolkit">
          <SectionHeading
            number="04"
            label="TOOLS I REACH FOR"
            title={
              <>
                The toolkit
                <br />
                <em>keeps growing.</em>
              </>
            }
            aside="Technologies I use across my work and studies. Picked for the problem, never the other way around."
          />
          <div className="toolkit-index">
            {skillRows.map(({ number, name, items, logos }) => (
              <div className="tool-row" key={number}>
                <span className="mono">{number}</span>
                <h3>{name}</h3>
                <p>{items}</p>
                {logos.length > 0 && (
                  <div className="tool-logos" aria-label={`${name} technology logos`}>
                    {logos.map(({ name: logoName, icon: Icon }) => (
                      <span key={logoName} title={logoName} aria-label={logoName}>
                        <Icon aria-hidden="true" />
                      </span>
                    ))}
                  </div>
                )}
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
          <div className="exploring">
            <span className="mono">CURRENTLY PULLING ON THIS THREAD ↘</span>
            <p>
              Reliable full-stack systems, backend architecture, and the small product decisions
              that make software easier to live with.
            </p>
            <span className="exploring-scribble">still learning!</span>
          </div>
        </section>

        <section className="chapter credentials-section" id="credentials">
          <SectionHeading
            number="05"
            label="THE LEARNING LOG / DOCUMENTED CREDENTIALS"
            title={
              <>
                Learning is
                <br />
                <em>part of the job.</em>
              </>
            }
            aside="My Software Engineering studies at HiLCoE, alongside certificates and training that document the work of building a foundation."
          />
          <div className="education-note">
            <span className="mono">EDUCATION / IN PROGRESS</span>
            <h3>Software Engineering</h3>
            <p>Undergraduate studies · HiLCoE School of Science and Technology</p>
            <span className="education-mark">Hi</span>
          </div>
          <div className="credential-grid">
            {credentials.map((item) => (
              <a
                className="credential-item"
                href={item.image}
                target="_blank"
                rel="noreferrer"
                key={item.number}
              >
                <div className="credential-art">
                  <img src={item.image} alt={`${item.title} certificate`} loading="lazy" />
                  <span className="credential-open">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="credential-caption">
                  <span className="mono">DOCUMENT {item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="closing" id="contact">
          <div className="closing-orbit" />
          <div className="closing-top mono">
            <span>06 / THE NEXT CHAPTER</span>
            <span>MY INBOX IS OPEN</span>
          </div>
          <h2>
            Got a good
            <br />
            <em>problem?</em>
          </h2>
          <p>
            I’m interested in useful products, meaningful engineering problems, and people who care
            about the things they put into the world. Tell me what you’re figuring out.
          </p>
          <a className="button button-paper" href={`mailto:${email}`}>
            LET’S TALK <ArrowRight size={17} />
          </a>
          <div className="closing-links">
            <a href={`mailto:${email}`}>
              <Mail size={21} /> EMAIL
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={21} /> LINKEDIN
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <Github size={21} /> GITHUB
            </a>
            <a href={`tel:${phone}`}>
              <PhoneCall size={21} /> PHONE
            </a>
            <a href="/Adonias_Yalew_Resume.pdf" download>
              RÉSUMÉ <ArrowUpRight size={18} />
            </a>
          </div>
          <form className="contact-note-form" onSubmit={async (event) => {
            event.preventDefault();
            setFormStatus("sending");
            const form = event.currentTarget;
            try {
              const response = await fetch("https://formspree.io/f/xykaowrj", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
              });
              if (!response.ok) throw new Error("Message could not be sent");
              form.reset();
              setFormStatus("sent");
            } catch {
              setFormStatus("error");
            }
          }}>
            <div className="contact-form-heading"><span className="mono">OR LEAVE A NOTE</span><p>A short message is fine. I’ll reply by email.</p></div>
            <label><span className="mono">YOUR NAME</span><input name="name" autoComplete="name" required /></label>
            <label><span className="mono">YOUR EMAIL</span><input name="email" type="email" autoComplete="email" required /></label>
            <label className="contact-message"><span className="mono">WHAT ARE YOU THINKING ABOUT?</span><textarea name="message" rows={3} required /></label>
            <button className="contact-submit" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "SENDING…" : formStatus === "sent" ? "NOTE SENT ✓" : "SEND THE NOTE ↗"}</button>
            <p className="contact-form-status" aria-live="polite">{formStatus === "error" ? "That didn’t go through. Please try again or email me directly." : formStatus === "sent" ? "Thanks for the note. I’ll be in touch." : ""}</p>
          </form>
        </section>
        <footer className="site-footer mono">
          <a href="#cover">
            ADONIAS<span> ✳ </span>YALEW
          </a>
          <span>ADONIAS YALEW · MADE IN ADDIS ABABA.</span>
          <span>© {new Date().getFullYear()} ADONIAS YALEW</span>
        </footer>
      </main>
    </>
  );
}

function SectionHeading({
  number,
  label,
  title,
  aside,
}: {
  number: string;
  label: string;
  title: ReactNode;
  aside?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-marker mono">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  );
}

function projectCategory(slug: string) {
  const labels: Record<string, string> = {
    "scholar-academy": "ACADEMIC OPERATIONS / WEB APP",
    "mela-solutions": "STUDENT OPPORTUNITIES / FULL STACK",
    "clinic-booking": "HEALTHCARE / APPOINTMENT WORKFLOW",
    haymanote: "COMMUNITY / MULTI-FAITH PLATFORM",
    "addis-tesfa": "WELLBEING / DIGITAL SUPPORT",
    "tourism-booking": "TRAVEL SYSTEMS / BOOKING",
  };
  return labels[slug] ?? "SOFTWARE PROJECT / FIELD NOTES";
}
