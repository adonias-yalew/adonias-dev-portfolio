import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Subtle Grid Backdrop with translation animation */}
      <motion.div 
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: 0.38,
          y: [0, -16, 0],
          x: [0, 8, 0],
        }}
        transition={{
          opacity: { duration: 1.5 },
          y: { duration: 30, repeat: Infinity, ease: "linear" },
          x: { duration: 30, repeat: Infinity, ease: "linear" },
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      {/* Radial mesh glowing gradient orbs with inline styles for guaranteed color rendering */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Soft Violet/Purple Left Orb */}
        <motion.div
          animate={{
            x: [-80, 80, -80],
            y: [-40, 50, -40],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(139, 92, 246, 0) 70%)"
          }}
        />

        {/* Soft Blue/Indigo Right Orb */}
        <motion.div
          animate={{
            x: [80, -80, 80],
            y: [45, -55, 45],
            scale: [1.15, 0.85, 1.15],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.28) 0%, rgba(59, 130, 246, 0) 70%)"
          }}
        />

        {/* Center Glow Behind Text */}
        <div 
          className="absolute left-[30%] top-[30%] -translate-x-1/2 -translate-y-1/2 h-[400px] w-[550px] rounded-full blur-[110px]" 
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)"
          }}
        />
      </div>

      {/* Abstract Elegant Flowing SVG Lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M-100 200 C 300 400, 600 100, 1000 350 C 1200 450, 1300 300, 1600 500"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="1.5"
          animate={{
            d: [
              "M-100 200 C 300 400, 600 100, 1000 350 C 1200 450, 1300 300, 1600 500",
              "M-100 250 C 350 350, 550 150, 950 400 C 1150 400, 1350 250, 1600 450",
              "M-100 200 C 300 400, 600 100, 1000 350 C 1200 450, 1300 300, 1600 500"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M-100 300 C 200 150, 700 500, 1100 250 C 1300 150, 1400 400, 1600 300"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1"
          animate={{
            d: [
              "M-100 300 C 200 150, 700 500, 1100 250 C 1300 150, 1400 400, 1600 300",
              "M-100 280 C 250 200, 650 450, 1050 300 C 1250 180, 1450 350, 1600 320",
              "M-100 300 C 200 150, 700 500, 1100 250 C 1300 150, 1400 400, 1600 300"
            ]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
