import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingNav() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#services", label: "Services" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Scroll spy using IntersectionObserver
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["about", "projects", "services", "skills", "contact"];
    const observers = new Map();

    let activeFromScroll = "";

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeFromScroll = `/#${entry.target.id}`;
          setActiveSection(activeFromScroll);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    // Hash tracking fallback for manual clicks
    if (location.hash) {
      setActiveSection(location.hash);
    }

    return () => {
      observer.disconnect();
    };
  }, [location]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-6 left-1/2 z-[100] -translate-x-1/2 w-full max-w-fit px-4"
    >
      <nav className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/40 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl no-scrollbar md:overflow-visible">
        <a href="/#top" onClick={() => setActiveSection("/#top")} className="mr-2 ml-2 flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-80 shrink-0">
          <span className="inline-block h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          <span className="hidden sm:inline-block">adonias.dev</span>
        </a>
        
        {links.map((l) => {
          const isActive = activeSection === l.href;
          return (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActiveSection(l.href)}
              className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors shrink-0 ${
                isActive ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          );
        })}
        
        <a
          href="/Adonias_Yalew_Resume.pdf"
          download
          className="ml-2 shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/40 hover:bg-white/20"
        >
          Resume
        </a>
      </nav>
    </motion.div>
  );
}
