import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function FloatingNav() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#services", label: "Services" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Close mobile menu on location changes
    setIsOpen(false);

    // Scroll spy using IntersectionObserver
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["about", "projects", "services", "skills", "contact"];
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const active = `/#${entry.target.id}`;
          setActiveSection(active);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    if (location.hash) {
      setActiveSection(location.hash);
    }

    return () => {
      observer.disconnect();
    };
  }, [location]);

  return (
    <>
      {/* Desktop & Mobile Top-Level Navigation Dock */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-6 left-1/2 z-[100] -translate-x-1/2 w-full max-w-fit px-4"
      >
        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <a href="/#top" onClick={() => { setActiveSection("/#top"); setIsOpen(false); }} className="mr-3 ml-2 flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-80 shrink-0">
            <span className="inline-block h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <span>adonias.dev</span>
          </a>
          
          {/* Desktop Only Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setActiveSection(l.href)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors shrink-0 ${
                    isActive ? "text-black font-semibold" : "text-white/60 hover:text-white"
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
          </div>
          
          {/* Desktop Only Resume */}
          <a
            href="/Adonias_Yalew_Resume.pdf"
            download
            className="hidden md:inline-block ml-2 shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/40 hover:bg-white/20"
          >
            Resume
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center p-1.5 ml-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="flex flex-col items-center gap-6 w-full max-w-xs px-6 py-12 rounded-3xl border border-white/10 bg-[#050505]/90 shadow-2xl text-center"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Menu</span>
              
              {links.map((l, index) => {
                const isActive = activeSection === l.href;
                return (
                  <motion.a
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setActiveSection(l.href);
                      setIsOpen(false);
                    }}
                    className={`text-xl font-light tracking-wide transition-colors ${
                      isActive ? "text-white font-medium underline underline-offset-8 decoration-white/30" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </motion.a>
                );
              })}

              <motion.a
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.05 }}
                href="/Adonias_Yalew_Resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full rounded-full border border-white/20 bg-white/5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
