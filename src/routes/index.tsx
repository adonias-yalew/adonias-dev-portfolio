import { Link } from "react-router-dom";
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Database, Code, Phone } from "lucide-react";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/ui/FadeUp";
import { TechBadge } from "../components/ui/TechBadge";
import { HeroBackground } from "../components/ui/HeroBackground";
import { FaJava } from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiFramer, 
  SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiMysql 
} from "react-icons/si";

const GITHUB_URL = "https://github.com/adonias-yalew";
const LINKEDIN_URL = "https://www.linkedin.com/in/adonias-yalew-4269312a8/";
const EMAIL = "adoniasyalew69@gmail.com";
const PHONE = "+251-941-99-99-83";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 pb-32">
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <Skills />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}



/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-8 lg:px-12 w-full items-center">
        <StaggerContainer delayChildren={0.2} staggerChildren={0.15}>
          <StaggerItem>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/70 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for new opportunities
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tighter sm:text-7xl lg:text-7xl xl:text-8xl">
              Crafting <br />
              <span className="text-white/40">digital</span> <br />
              experiences.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-white/60 sm:text-xl">
              I'm <span className="text-white font-medium">Adonias Yalew</span>. A Software Engineering Student & Full-Stack Developer focused on building scalable, maintainable, and highly polished web applications.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                View Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Let's Talk
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeUp delay={0.6} className="hidden lg:flex justify-end">
          <div className="group relative aspect-[4/5] w-[80%] max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent z-10" />
            <img 
              src="/my-image.png" 
              alt="Adonias Yalew" 
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-1">Based in</p>
              <p className="text-xl font-medium tracking-tight text-white">Ethiopia</p>
            </div>
            <div className="absolute right-8 top-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-md transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
               <span className="font-serif text-2xl italic text-white/80">A</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <Section id="about" label="01 / About" title="Who I am">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeUp>
          <div className="space-y-6 text-lg font-light leading-relaxed text-white/60">
            <p>
              I'm a Software Engineering student at{" "}
              <span className="text-white">HILCOE School of Science and Technology</span> with a
              passion for building complete software solutions, from intuitive user interfaces to
              robust backend systems.
            </p>
            <p>
              I enjoy turning ideas into real-world applications — designing user experiences,
              developing frontend interfaces, building APIs, managing databases, and delivering
              products that solve meaningful problems.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04]">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40">Core Focus</p>
            <ul className="mt-8 space-y-4">
              {[
                "Full-Stack Web Development",
                "Frontend Architecture & UX",
                "Backend Services & REST APIs",
                "Database Design & Management",
                "Scalable System Architecture",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80">
                  <span className="h-[1px] w-4 bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
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
      title: "INSA Web Development Training",
      role: "Trainee",
      date: "Weekend Program",
      description:
        "Participated in an intensive web development training program organized by INSA. Learned the fundamentals of modern web development, frontend technologies, and professional software development practices.",
    },
  ];

  return (
    <Section id="experience" label="02 / Experience" title="Journey">
      <StaggerContainer className="space-y-8">
        {experiences.map((exp, i) => (
          <StaggerItem key={i}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:bg-white/[0.04]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight text-white">{exp.title}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                  {exp.date}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/50">{exp.role}</p>
              <p className="mt-6 font-light leading-relaxed text-white/60">
                {exp.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

/* ---------- Projects ---------- */
function ProjectsSection() {
  return (
    <Section id="projects" label="03 / Work" title="Selected Projects">
      <div className="grid gap-x-12 gap-y-24 md:grid-cols-2 lg:gap-x-16">
        {projects.map((p, index) => {
          // Stagger effect: even cards are slightly shifted down on desktop
          const isEven = index % 2 === 0;
          return (
            <FadeUp key={p.slug} delay={index * 0.1} className={isEven ? "" : "md:mt-16"}>
              <div className="group relative flex flex-col">
                <Link 
                  to={`/projects/${p.slug}`} 
                  className="overflow-hidden rounded-3xl border border-white/5 bg-white/5 aspect-[16/10] relative block shadow-2xl"
                >
                  {p.image ? (
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-white/20">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:opacity-10" />
                </Link>
                
                <div className="mt-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-3 text-xs font-mono text-white/40">
                    <span>{p.year}</span>
                    {p.status && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-white/20" />
                        <span className="uppercase tracking-widest text-emerald-400">{p.status}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-semibold tracking-tight text-white mb-3 hover:opacity-75 transition-opacity">
                    <Link to={`/projects/${p.slug}`}>{p.title}</Link>
                  </h3>
                  
                  <p className="text-base font-light leading-relaxed text-white/60 mb-6">
                    {p.tagline}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.slice(0, 3).map((t) => (
                      <TechBadge key={t} tech={t} />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 mt-2">
                    <Link
                      to={`/projects/${p.slug}`}
                      className="flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70"
                    >
                      Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/40 transition-colors hover:text-white"
                        aria-label="GitHub Repo"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {p.demo && p.demo !== "#" && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/40 transition-colors hover:text-white"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Services ---------- */
function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Frontend Development",
      description: "Building highly interactive, responsive, and performant user interfaces with modern React, TypeScript, and animations.",
    },
    {
      num: "02",
      title: "UI/UX Design",
      description: "Crafting minimalist, premium, and user-centric designs that prioritize usability and aesthetic excellence.",
    },
    {
      num: "03",
      title: "Full Stack Development",
      description: "Architecting end-to-end solutions, connecting beautiful frontends with robust, scalable backend APIs and databases.",
    },
    {
      num: "04",
      title: "Responsive Web Design",
      description: "Ensuring flawless experiences across all devices, from large desktop monitors down to mobile screens.",
    },
  ];

  return (
    <Section id="services" label="04 / Services" title="Expertise">
      <div className="grid gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden md:grid-cols-2">
        {services.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.1}>
            <div className="bg-[#050505] p-12 h-full transition-colors hover:bg-white/[0.02]">
              <span className="font-mono text-sm text-white/30">{s.num}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
              <p className="mt-4 font-light leading-relaxed text-white/50">{s.description}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  const groups = [
    {
      title: "Languages",
      items: [
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "C#", icon: Code, color: "#239120" },
        { name: "SQL", icon: Database, color: "#336791" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
  ];

  return (
    <Section id="skills" label="05 / Tech Stack" title="Technologies">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {groups.map((g, i) => (
          <FadeUp key={g.title} delay={i * 0.1}>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
                {g.title}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {g.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  >
                    <item.icon 
                      className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" 
                      style={{ color: item.color }} 
                    />
                    <span className="text-sm font-medium tracking-tight text-white/80 group-hover:text-white transition-colors text-center">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

/* ---------- GitHub ---------- */
function GitHubSection() {
  const user = "adonias-yalew";
  return (
    <Section id="github" label="06 / Code" title="Open Source">
      <FadeUp>
        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 overflow-hidden flex flex-col items-center justify-center backdrop-blur-sm">
           <img
            src={`https://ghchart.rshah.org/ffffff/${user}`}
            alt="GitHub contribution graph"
            className="w-full max-w-4xl opacity-80 mix-blend-screen"
            loading="lazy"
          />
          <div className="mt-12">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
            >
              <Github className="h-4 w-4" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [state, setState] = useState<"idle" | "sent">("idle");
  return (
    <Section id="contact" label="07 / Connect" title="Let's Talk">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] items-start">
        <FadeUp>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Have an idea? <br />
            <span className="text-white/40">Let's build it.</span>
          </h2>
          <p className="text-lg font-light text-white/60 mb-12 max-w-md">
            I'm currently available for freelance projects, internships, and full-time roles. 
            Send me a message and I'll get back to you as soon as possible.
          </p>
          <div className="space-y-6">
            <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 text-white/60 transition-colors hover:text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/30">
                <Mail className="h-5 w-5" />
              </div>
              <span>{EMAIL}</span>
            </a>
            <a href={`tel:${PHONE}`} className="group flex items-center gap-4 text-white/60 transition-colors hover:text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/30">
                <Phone className="h-5 w-5" />
              </div>
              <span>{PHONE}</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-white/60 transition-colors hover:text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/30">
                <Linkedin className="h-5 w-5" />
              </div>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
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
                  headers: { Accept: "application/json" },
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
            className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 backdrop-blur-md"
          >
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-widest text-white/40">Name</label>
              <input name="name" required className="w-full border-b border-white/10 bg-transparent py-3 text-white transition-colors focus:border-white focus:outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-widest text-white/40">Email</label>
              <input name="email" type="email" required className="w-full border-b border-white/10 bg-transparent py-3 text-white transition-colors focus:border-white focus:outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-widest text-white/40">Message</label>
              <textarea name="message" rows={4} required className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-white transition-colors focus:border-white focus:outline-none" />
            </div>
            <button
              type="submit"
              disabled={state === "sent"}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {state === "sent" ? "Sending..." : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </FadeUp>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]/80 backdrop-blur-md relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-24">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-white max-w-fit">
              <span className="inline-block h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              <span>adonias.dev</span>
            </a>
            <p className="mt-2 text-sm font-light leading-relaxed text-white/50">
              Crafting premium full-stack digital solutions with clean architecture and modern user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              <a href="#about" className="text-sm font-light text-white/60 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-sm font-light text-white/60 hover:text-white transition-colors">Projects</a>
              <a href="#services" className="text-sm font-light text-white/60 hover:text-white transition-colors">Services</a>
              <a href="#skills" className="text-sm font-light text-white/60 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-sm font-light text-white/60 hover:text-white transition-colors">Contact</a>
              <a href="/Adonias_Yalew_Resume.pdf" download className="text-sm font-light text-white/60 hover:text-white transition-colors">Resume</a>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors">
                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>GitHub</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors">
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Email</span>
              </a>
              <a href={`tel:${PHONE}`} className="group flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors">
                <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Phone</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs font-light text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Adonias Yalew. All rights reserved.</p>
          <p>Designed & Built with React, Tailwind & Framer Motion.</p>
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
    <section id={id} className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <div className="mb-16 md:mb-24 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              {label}
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
          </div>
        </FadeUp>
        {children}
      </div>
    </section>
  );
}
