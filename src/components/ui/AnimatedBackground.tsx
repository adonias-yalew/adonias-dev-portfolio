import { ReactNode } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full noise-bg opacity-[0.03]" />

      {/* Floating Orbs / Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] h-[50vh] w-[50vw] rounded-full bg-white/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[20%] -right-[10%] h-[60vh] w-[60vw] rounded-full bg-white/5 blur-[150px]"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
