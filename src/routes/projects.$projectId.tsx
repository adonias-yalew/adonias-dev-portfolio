import { Link, useParams } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = getProject(projectId as string);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-sm text-primary hover:underline">
          ← Back home
        </Link>
      </div>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 font-mono text-sm font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span>adonias.dev</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="flex items-center gap-3 text-xs">
          <span className="font-mono uppercase tracking-widest text-muted-foreground">
            {project.year}
          </span>
          {project.status && (
            <>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="font-mono uppercase tracking-widest text-primary">
                {project.status}
              </span>
            </>
          )}
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium hover:border-primary/40 transition-colors"
              >
                <Github className="h-4 w-4" /> GitHub Repo
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Visit
              </a>
            )}
          </div>
        )}

        {/* Screenshot */}
        {project.image ? (
          <div className="mt-12 overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-transform hover:scale-[1.01]">
            {project.demo && project.demo !== "#" ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="block">
                <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-auto object-cover" />
              </a>
            ) : (
              <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-auto object-cover" />
            )}
          </div>
        ) : (
          <div className="mt-12 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
            <div className="grid h-full place-items-center font-mono text-sm text-muted-foreground">
              Screenshot coming soon
            </div>
          </div>
        )}

        {/* Sections */}
        <Block label="Overview" title="Problem">
          <p>{project.problem}</p>
        </Block>

        <Block label="Approach" title="Solution">
          <p>{project.solution}</p>
        </Block>

        <Block label="System" title="Architecture">
          <p>{project.architecture}</p>
        </Block>

        <Block label="Stack" title="Technologies used">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Highlights" title="Key features">
          <List items={project.features} />
        </Block>

        <Block label="Engineering" title="Challenges faced">
          <List items={project.challenges} />
        </Block>

        <Block label="Outcomes" title="Results">
          <List items={project.results} />
        </Block>

        <Block label="Next" title="Future improvements">
          <List items={project.future} />
        </Block>

        {/* Other projects */}
        <div className="mt-20 border-t border-border pt-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Other projects
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {others.map((p) => (
              <div
                key={p.slug}
                className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-primary/40 flex flex-col"
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
                <div className="flex flex-col flex-grow p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {p.year}
                </p>
                <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground flex-grow">{p.tagline}</p>
                
                <div className="mt-5 flex flex-wrap items-center gap-4">
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
        </div>
      </article>

      <footer className="border-t border-border bg-surface/20">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 font-mono text-sm font-medium text-foreground transition-opacity hover:opacity-80">
                <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_oklch(0.72_0.17_162/0.6)]" />
                <span>adonias.dev</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Building scalable, maintainable, and user-centric web applications with modern architecture.
              </p>
            </div>
            
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-foreground">Links</p>
              <nav className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
                <Link to="/#about" className="w-fit transition-colors hover:text-primary">About</Link>
                <Link to="/#experience" className="w-fit transition-colors hover:text-primary">Experience</Link>
                <Link to="/#projects" className="w-fit transition-colors hover:text-primary">Projects</Link>
              </nav>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-foreground">Connect</p>
              <nav className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
                <a href="https://github.com/adonias-yalew" target="_blank" rel="noreferrer" className="w-fit transition-colors hover:text-primary">GitHub</a>
                <a href="https://www.linkedin.com/in/adonias-yalew-4269312a8/" target="_blank" rel="noreferrer" className="w-fit transition-colors hover:text-primary">LinkedIn</a>
                <a href="mailto:adoniasyalew69@gmail.com" className="w-fit transition-colors hover:text-primary">Email</a>
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
    </div>
  );
}

function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-border pt-10">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
          <span className="text-foreground">{i}</span>
        </li>
      ))}
    </ul>
  );
}
