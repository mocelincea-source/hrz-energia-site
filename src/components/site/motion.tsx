"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type Variants,
} from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Fade + slide up on enter (scroll reveal). */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "header";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px", amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger children when the container enters viewport.
 *  `fallbackDelay` (ms): forces the animation if the user hasn't scrolled yet. */
export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.09,
  fallbackDelay,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  fallbackDelay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px", amount: 0.2 });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    if (!fallbackDelay) return;
    const id = setTimeout(() => setForced(true), fallbackDelay);
    return () => clearTimeout(id);
  }, [fallbackDelay]);

  const variants: Variants = {
    hidden: {},
    show: { transition: { delayChildren, staggerChildren } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView || forced ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Animated number counter. Supports a numeric `to`, with optional
 * prefix / suffix and decimal places. Triggers when visible.
 * `fallbackDelay` (ms): starts counting even if the element hasn't scrolled into view.
 */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
  fallbackDelay,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  fallbackDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px", amount: 0.4 });
  const [forced, setForced] = useState(false);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!fallbackDelay) return;
    const id = setTimeout(() => setForced(true), fallbackDelay);
    return () => clearTimeout(id);
  }, [fallbackDelay]);

  const triggered = inView || forced;

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const ms = duration * 1000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, to, duration]);

  const formatted = val.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/** Tilt + lift card on hover. Wrap any card element. */
export function HoverLift({
  children,
  className,
  intensity = 6,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 18 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * intensity);
        rx.set(-py * intensity);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Subtle floating / bobbing animation (e.g. for mascot). */
export function Float({
  children,
  className,
  amplitude = 10,
  duration = 4,
}: {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Parallax wrapper moves children based on page scroll. */
export function Parallax({
  children,
  className,
  offset = 60,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Scroll progress bar (e.g. top of viewport). */
export function ScrollProgressBar({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className={"fixed inset-x-0 top-0 z-50 h-[3px] bg-hrz-electric " + (className ?? "")}
    />
  );
}

/** Fade + slide route transition for the page <main>. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
