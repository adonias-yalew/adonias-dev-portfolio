import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { TechBadge } from "../components/ui/TechBadge";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = getProject(projectId as string);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

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
    <div className="min-h-screen text-white/80 pb-32">
      <article className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="flex items-center gap-3 text-xs mb-8">
          <Link to="/#projects" className="font-medium text-white/50 hover:text-white transition-colors">
            ← Back to Work
          </Link>
          <span className="text-white/20">/</span>
          <span className="font-mono uppercase tracking-widest text-white/50">
            {project.year}
          </span>
          {project.status && (
            <>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="font-mono uppercase tracking-widest text-emerald-400">
                {project.status}
              </span>
            </>
          )}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-white/60">{project.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-12 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                <Github className="h-4 w-4" /> View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        )}

        {/* Screenshot */}
        {project.image ? (
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            {project.demo && project.demo !== "#" ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="block">
                <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
              </a>
            ) : (
              <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-auto object-cover" />
            )}
          </div>
        ) : (
          <div className="mt-16 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="grid h-full place-items-center font-mono text-sm text-white/30">
              Screenshot coming soon
            </div>
          </div>
        )}

        {/* Sections */}
        <div className="mt-20 space-y-24">
          <Block label="Overview" title="Problem">
            <p>{project.problem}</p>
          </Block>

          <Block label="Approach" title="Solution">
            <p>{project.solution}</p>
          </Block>

          <Block label="System" title="Architecture">
            <p>{project.architecture}</p>
          </Block>

          <Block label="Highlights" title="Key Features">
            <List items={project.features} />
          </Block>

          <Block label="Engineering" title="Challenges Faced">
            <List items={project.challenges} />
          </Block>

          <Block label="Outcomes" title="Results">
            <List items={project.results} />
          </Block>

          <Block label="Next" title="Future Improvements">
            <List items={project.future} />
          </Block>
        </div>

        {/* Other projects */}
        <div className="mt-32 border-t border-white/10 pt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8">
            More Projects
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <div
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors hover:bg-white/[0.04]"
              >
                {p.image && (
                  <Link to={`/projects/${p.slug}`} className="block aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-white/5 relative">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy"
                    />
                  </Link>
                )}
                <div className="flex flex-col flex-grow p-8">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">
                    {p.year}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/60 flex-grow">{p.tagline}</p>
                  
                  <div className="mt-8">
                    <Link
                      to={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70"
                    >
                      View Project <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <footer className="mt-20 border-t border-white/5 bg-[#050505]/80 backdrop-blur-md relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-12 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-white/40">
          <p>© {new Date().getFullYear()} Adonias Yalew. All rights reserved.</p>
          <Link to="/" className="font-mono text-white/50 hover:text-white transition-colors">
            adonias.dev
          </Link>
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
    <section>
      <div className="mb-6 flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-white/40">
          {label}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
      </div>
      <div className="max-w-3xl text-lg font-light leading-relaxed text-white/60">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="mt-2.5 h-[1px] w-4 shrink-0 bg-white/20" />
          <span className="text-white/80">{i}</span>
        </li>
      ))}
    </ul>
  );
}
