import { useEffect } from "react";
import { motion } from "motion/react";
import logoWhite from "@/assets/logo-hrz-white.png";
import { easeOut } from "./motion";

interface SplashOverlayProps {
  onDone: () => void;
}

/**
 * Full-screen splash — dark background matches the hero (#060c1a).
 * Timeline:
 *   0ms      → overlay fades in (0.25s), logo starts entering
 *   0–1100ms → logo rises from scale 0.88, opacity 0 → 1
 *   1100ms+  → logo breathes with a subtle pulse (scale loop)
 *   1600ms   → onDone() fires → AnimatePresence triggers exit
 *   exit     → logo: scale↑ + blur + fade (0.7s); overlay: fade (0.85s)
 */
export function SplashOverlay({ onDone }: SplashOverlayProps) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1600);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ backgroundColor: "#060c1a" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.85, ease: easeOut } }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo — entry + exit physics live here */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{
          opacity: 0,
          scale: 1.14,
          y: -10,
          filter: "blur(10px)",
          transition: { duration: 0.7, ease: easeOut },
        }}
        transition={{ duration: 1.1, ease: easeOut }}
      >
        {/* Breathing pulse — starts after logo is fully visible */}
        <motion.div
          animate={{ scale: [1, 1.032, 1] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.15,
          }}
        >
          <img
            src={logoWhite}
            alt="HRZ Energia"
            className="w-56 md:w-72 lg:w-80 select-none"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
