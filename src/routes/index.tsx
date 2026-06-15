import { Link } from "react-router-dom";
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

const GITHUB_URL = "https://github.com/adonias-yalew";
const LINKEDIN_URL = "https://www.linkedin.com/in/adonias-yalew-4269312a8/";
const EMAIL = "adoniasyalew69@gmail.com";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <Skills />
      <GitHubSection />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span>adonias.dev</span>
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Adonias_Yalew_Resume.pdf"
          download
          className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Available for internships & freelance
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Adonias Yalew
          </h1>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Software Engineering Student · Full-Stack Developer · Software Builder
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            I build modern web applications that solve real-world problems, combining intuitive user
            experiences with reliable backend systems. My focus is on creating scalable,
            maintainable software that delivers value through thoughtful design, clean code, and
            practical solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
            >
              Contact Me
            </a>
            <a
              href="/Adonias_Yalew_Resume.pdf"
              download
              className="rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative h-44 w-44 overflow-hidden rounded-xl border border-border bg-surface">
            <img src="/my-image.png" alt="Adonias Yalew" className="h-full w-full object-cover" />
            <div className="absolute bottom-2 right-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_oklch(0.72_0.17_162/0.2)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <Section id="about" label="01 / About" title="About">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            I'm a Software Engineering student at{" "}
            <span className="text-foreground">HILCOE School of Science and Technology</span> with a
            passion for building complete software solutions, from intuitive user interfaces to
            robust backend systems.
          </p>
          <p>
            I enjoy turning ideas into real-world applications — designing user experiences,
            developing frontend interfaces, building APIs, managing databases, and delivering
            products that solve meaningful problems.
          </p>
          <p>
            My current interests include full-stack development, software architecture, system
            design, and creating scalable applications that provide great user experiences.
          </p>
        </div>
        <div className="group rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">Focus</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Full-Stack Web Development",
              "Frontend Development & User Experience",
              "Backend Services & REST APIs",
              "Relational and Document Databases",
              "Authentication & Role-Based Access",
              "Scalable Software Architecture",
              "Problem Solving & System Design",
            ].map((item) => (
              <li key={item} className="group/item flex items-start gap-3 cursor-default">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover/item:scale-[2]" />
                <span className="text-foreground transition-colors group-hover/item:text-primary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
function ExperienceSection() {
  const experiences = [
    {
      title: "Hack Into Bright Ethiopia Hackathon",
      role: "Participant",
      date: "2024",
      description:
        "Collaborated with a team to design and prototype a technology solution addressing real-world community challenges. Contributed to both frontend and backend development, participated in idea validation and product planning, and presented the final MVP to a panel of judges.",
    },
    {
      title: "Information Network Security Administration (INSA)",
      role: "Ethiopia",
      date: "Weekend Training Program",
      description:
        "Participated in a web development training program organized by INSA, where I learned the fundamentals of modern web development, frontend technologies, and software development practices. The program provided hands-on experience in building web applications and strengthened my understanding of how software solutions are designed and developed in professional environments.",
    },
  ];

  return (
    <Section id="experience" label="02 / Experience" title="Experience">
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div 
            key={exp.title} 
            className="group rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{exp.title}</h3>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary mt-2">
              {exp.role} • {exp.date}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
function ProjectsSection() {
  return (
    <Section id="projects" label="03 / Projects" title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-primary/40 flex flex-col h-full"
          >
            {p.image && (
              <Link to={`/projects/${p.slug}`} className="block aspect-[16/9] w-full overflow-hidden border-b border-border/50 bg-muted/20">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  loading="lazy"
                />
              </Link>
            )}
            <div className="flex flex-col flex-grow p-6">
            {p.status && (
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {p.status}
                </span>
              </div>
            )}
            <h3 className={`text-lg font-semibold text-foreground ${!p.status ? "mt-1" : ""}`}>
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-grow">
              {p.tagline}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] text-muted-foreground">
              {p.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to={`/projects/${p.slug}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Read more →
              </Link>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub Repo
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Visit
                </a>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Services ---------- */
function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Designing clean, user-friendly interfaces focused on usability and product goals.",
    },
    {
      title: "Frontend Development",
      description:
        "Building responsive, scalable web interfaces with modern React-based architecture.",
    },
    {
      title: "App Development",
      description:
        "Creating web and mobile-friendly applications with clean structure and maintainable code.",
    },
    {
      title: "Maintenance & Improvement",
      description:
        "Fixing bugs, improving performance, and continuously evolving existing products.",
    },
    {
      title: "Product Thinking & Strategy",
      description:
        "Helping shape features based on user behavior, product goals, and growth needs.",
    },
    {
      title: "Team Collaboration",
      description:
        "Working with teams to deliver projects efficiently with clear communication and planning.",
    },
  ];

  return (
    <Section id="services" label="04 / Services" title="Services">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  const groups: { title: string; items: string[] }[] = [
    { title: "Languages", items: ["Java", "JavaScript", "C#", "SQL"] },
    { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { title: "Tools", items: ["Git", "GitHub", "Postman"] },
    {
      title: "Soft skills",
      items: ["Problem solving", "Communication", "System thinking", "Team collaboration"],
    },
  ];
  return (
    <Section id="skills" label="05 / Skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div 
            key={g.title} 
            className="group rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
              {g.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-md border border-border bg-background px-2 py-1 text-[13px] text-foreground transition-colors hover:border-primary hover:text-primary cursor-default"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- GitHub ---------- */
function GitHubSection() {
  const user = "adonias-yalew";
  return (
    <Section id="github" label="06 / GitHub" title="GitHub activity">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="group overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
            Stats
          </p>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=transparent&hide_border=true&title_color=10B981&icon_color=10B981&text_color=94A3B8&bg_color=00000000`}
            alt="GitHub stats"
            className="mt-3 w-full transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="group overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
            Top languages
          </p>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=transparent&hide_border=true&title_color=10B981&text_color=94A3B8&bg_color=00000000`}
            alt="Top languages"
            className="mt-3 w-full transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="group overflow-hidden rounded-lg border border-border bg-surface p-5 lg:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
            Contribution graph
          </p>
          <img
            src={`https://ghchart.rshah.org/10B981/${user}`}
            alt="GitHub contribution graph"
            className="mt-3 w-full transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          View profile on GitHub →
        </a>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [state, setState] = useState<"idle" | "sent">("idle");
  return (
    <Section id="contact" label="07 / Contact" title="Get in touch">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            I'm open to internships, freelance projects, and collaborations on backend-heavy
            products.
          </p>
          <div className="space-y-2 pt-2">
            <ContactRow label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow label="GitHub" value="github.com/adonias-yalew" href={GITHUB_URL} />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/adonias-yalew"
              href={LINKEDIN_URL}
            />
          </div>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setState("sent");
            const form = e.currentTarget;
            const fd = new FormData(form);
            try {
              const res = await fetch("https://formspree.io/f/xykaowrj", {
                method: "POST",
                body: fd,
                headers: {
                  Accept: "application/json",
                },
              });
              if (res.ok) {
                form.reset();
                alert("Message sent successfully!");
              } else {
                alert("Failed to send message. Please try again.");
              }
            } catch (err) {
              alert("Failed to send message. Please try again.");
            }
            setState("idle");
          }}
          className="space-y-4 rounded-lg border border-border bg-surface p-6"
        >
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Message" name="message" textarea required />
          <button
            type="submit"
            disabled={state === "sent"}
            className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {state === "sent" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-2.5">
      <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-foreground hover:text-primary"
      >
        {value}
      </a>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/20">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium text-foreground transition-opacity hover:opacity-80">
              <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_oklch(0.72_0.17_162/0.6)]" />
              <span>adonias.dev</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building scalable, maintainable, and user-centric web applications with modern architecture.
            </p>
          </div>
          
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-foreground">Links</p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <a href="#about" className="w-fit transition-colors hover:text-primary">About</a>
              <a href="#experience" className="w-fit transition-colors hover:text-primary">Experience</a>
              <a href="#projects" className="w-fit transition-colors hover:text-primary">Projects</a>
              <a href="#services" className="w-fit transition-colors hover:text-primary">Services</a>
            </nav>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-foreground">Connect</p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="w-fit transition-colors hover:text-primary">GitHub</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="w-fit transition-colors hover:text-primary">LinkedIn</a>
              <a href={`mailto:${EMAIL}`} className="w-fit transition-colors hover:text-primary">Email</a>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Adonias Yalew. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="group flex items-center gap-1 transition-colors hover:text-primary"
          >
            Back to top <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Section primitive ---------- */
function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {title}
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
