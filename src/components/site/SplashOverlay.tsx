import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import logoWhite from "@/assets/logo-hrz-white.png";
import { SPLASH_EXIT_DURATION, SPLASH_HOLD_S } from "./heroTiming";
import { easeOut } from "./motion";

interface SplashOverlayProps {
  onDone: () => void;
}

/**
 * Full-screen splash — dark background matches the hero (#060c1a).
 * Timeline:
 *   0ms      → overlay fades in (0.25s), logo starts entering
 *   0–1100ms → logo rises from scale 0.88, opacity 0 → 1
 *   0–2000ms → energy transmission bar grows scaleX 0→1 (linear)
 *   1100ms+  → logo breathes with a subtle pulse (scale loop)
 *   2000ms   → onDone() fires → AnimatePresence triggers exit
 *   exit     → backdrop + logo fade (0.5s) over the hero video already visible below
 *
 * Match-Cut layout: the inner DOM mirrors the Hero section exactly so the
 * logo occupies the same pixel position when the overlay dissolves.
 * Structure mirrors: flex h-full flex-col → container-hrz flex-1 justify-center pt-20 →
 * w-fit mx-auto flex gap-10 lg:gap-16 → logo (shrink-0) + ghost text block.
 * A ghost stats-bar at the bottom ensures flex-1 shrinks by the same amount.
 *
 * Silent exit: on exit the logo only fades (opacity → 0, scale stays at 1,
 * no blur, no y shift). The Hero logo is a static anchor rendered at full
 * opacity from frame 0, so the dissolve reveals it with zero pixel movement.
 */
export function SplashOverlay({ onDone }: SplashOverlayProps) {
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(onDone, SPLASH_HOLD_S * 1000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: SPLASH_EXIT_DURATION, ease: easeOut } }}
      transition={{ duration: 0.2 }}
    >
      {/* Opaque backdrop — static; parent opacity fade reveals hero video underneath. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, #112254 0%, #00040f 100%)",
        }}
        aria-hidden
      />
      {/* Mirrors: relative z-20 flex h-full flex-col */}
      <div className="relative flex h-full flex-col">

        {/* Mirrors: container-hrz flex flex-1 items-center justify-center pt-20 */}
        <div className="container-hrz flex flex-1 items-center justify-center pt-20">
          {/* Mirrors: mx-auto flex w-fit flex-col items-center gap-10 lg:flex-row lg:gap-16 */}
          <div className="mx-auto flex w-fit flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Logo — same shrink-0 wrapper and img classes as Hero */}
            <div className="shrink-0">
              {/* Entry: rises from scale 0.88 + y offset.
                  Exit: silent fade only — scale stays at 1, no blur, no y
                  shift, so the logo dissolves exactly over the Hero anchor. */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.1, ease: easeOut }}
              >
                {/* Breathing pulse — starts after logo is fully visible */}
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.15,
                  }}
                >
                  {/* Bolt glow — animated drop-shadow respects PNG alpha,
                      pulsing around the lightning bolt shape */}
                  <motion.img
                    src={logoWhite}
                    alt="HRZ Energia"
                    className="h-28 w-auto select-none sm:h-32 lg:h-40"
                    draggable={false}
                    animate={{
                      filter: [
                        "drop-shadow(0 0 3px rgba(96,165,250,0.15))",
                        "drop-shadow(0 0 12px rgba(96,165,250,0.70)) drop-shadow(0 0 26px rgba(59,130,246,0.40))",
                        "drop-shadow(0 0 3px rgba(96,165,250,0.15))",
                      ],
                    }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.15,
                    }}
                  />

                  {/* Energy transmission track — fades out with parent on exit */}
                  <div className="relative mt-4 h-[1px] w-full max-w-[200px] overflow-hidden bg-white/10">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 via-white to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8),0_0_30px_rgba(34,211,238,0.4)]"
                      initial={{ scaleX: 0, originX: 0, opacity: 0.6 }}
                      animate={{ scaleX: 1, opacity: [0.6, 1, 0.6] }}
                      transition={{
                        scaleX: { duration: 2, ease: "linear" },
                        opacity: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Ghost text block — mirrors Hero headline + CTAs for identical flex math */}
            <div
              aria-hidden
              className="pointer-events-none invisible flex select-none flex-col items-start text-left opacity-0"
            >
              <h1 className="display-mega max-w-3xl text-left text-3xl font-light text-white sm:text-4xl lg:text-5xl">
                <span className="block">{t("home.hero.headline1")}</span>
                <span className="text-gradient-electric block whitespace-nowrap font-normal">
                  {t("home.hero.headline2")}
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <span className="group inline-flex items-center gap-2 rounded-full bg-hrz-electric px-7 py-3.5 text-sm font-semibold text-white">
                  {t("home.hero.ctaTransmission")}{" "}
                  <ArrowRight size={16} />
                </span>
                <span className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white">
                  {t("home.hero.ctaWind")}{" "}
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
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
