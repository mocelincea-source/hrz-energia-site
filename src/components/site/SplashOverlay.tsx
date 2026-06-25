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
 *
 * Match-Cut layout: the inner DOM mirrors the Hero section exactly so the
 * logo occupies the same pixel position when the overlay dissolves.
 * Structure mirrors: flex h-full flex-col → container-hrz flex-1 pt-20 →
 * grid lg:grid-cols-2 → left col (justify-center lg:justify-end lg:pr-6).
 * A ghost stats-bar at the bottom ensures flex-1 shrinks by the same amount.
 *
 * Silent exit: on exit the logo only fades (opacity → 0, scale stays at 1,
 * no blur, no y shift). The Hero logo is a static anchor rendered at full
 * opacity from frame 0, so the dissolve reveals it with zero pixel movement.
 */
export function SplashOverlay({ onDone }: SplashOverlayProps) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1600);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[60]"
      style={{ backgroundColor: "#060c1a" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.85, ease: easeOut } }}
      transition={{ duration: 0.2 }}
    >
      {/* Mirrors: relative z-20 flex h-full flex-col */}
      <div className="flex h-full flex-col">

        {/* Mirrors: container-hrz flex flex-1 items-center pt-20 */}
        <div className="container-hrz flex flex-1 items-center pt-20">

          {/* Mirrors: grid w-full gap-10 lg:grid-cols-2 lg:gap-16 */}
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Left column — same alignment as Hero logo column */}
            <div className="flex items-center justify-center lg:justify-end lg:pr-6">
              {/* Entry: rises from scale 0.88 + y offset.
                  Exit: silent fade only — scale stays at 1, no blur, no y
                  shift, so the logo dissolves exactly over the Hero anchor. */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.85, ease: easeOut },
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
                  {/* Exact same size classes as the Hero <img> */}
                  <img
                    src={logoWhite}
                    alt="HRZ Energia"
                    className="h-28 w-auto select-none sm:h-32 lg:h-40"
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Right column — intentionally empty */}
            <div aria-hidden />
          </div>
        </div>

        {/* Ghost stats-bar — invisible but occupies the same height as the
            real stats bar so flex-1 shrinks by the same amount, keeping the
            logo vertically centred at the same pixel as in the Hero. */}
        <div aria-hidden className="invisible border-t border-white/10">
          <div className="container-hrz grid grid-cols-2 gap-y-6 py-5 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center px-6">
                <p className="font-display text-4xl font-light sm:text-5xl">&nbsp;</p>
                <p className="mt-1 text-xs">&nbsp;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
