import raio from "@/assets/raio-hrz-outline.png";
import raioSolid from "@/assets/raio-solid-gradient.png";
import { motion } from "motion/react";
import { PlatformTag } from "./PlatformTag";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "deep",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  variant?: "deep" | "green";
}) {
  const bg =
    variant === "green"
      ? "bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid"
      : "bg-hrz-deep-radial";
  const eyebrowColor = variant === "green" ? "text-white/85" : "text-hrz-electric";
  return (
    <section className={`relative isolate overflow-hidden ${bg} pt-32 pb-20 text-white lg:pt-40 lg:pb-28`}>
      <motion.img
        src={raio}
        alt=""
        aria-hidden
        initial={{ opacity: 0, scale: 1.1, rotate: -4 }}
        animate={{ opacity: 0.08, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-28 -top-10 hidden h-[135%] w-auto md:block"
      />
      <img
        src={raioSolid}
        alt=""
        aria-hidden
        style={{ opacity: 0.12 }}
        className="pointer-events-none absolute -left-12 bottom-[-60px] hidden h-[62%] w-auto md:block"
      />
      <div className="container-hrz relative">
        <PlatformTag variant="dark" className="mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`eyebrow ${eyebrowColor}`}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display-mega mt-5 max-w-4xl text-balance text-4xl text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}