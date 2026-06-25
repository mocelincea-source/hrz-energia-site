import { j as jsxRuntimeExports, R as React } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./raio-solid-gradient-jqq88Ct5.mjs";
import { e as easeOut, b as HERO_VIDEO_REVEAL, l as logoWhite, c as HERO_DURATION, d as HERO_BASE, f as HERO_STAGGER, C as Counter, R as Reveal, S as Stagger, a as StaggerItem, H as HoverLift, P as Parallax } from "./router-BEOl7Dc4.mjs";
import { B as BoltDecor } from "./BoltDecor-QJqIERRo.mjs";
import { s as substationImg, B as BrazilMapAnimated } from "./substation-C3WfM9FQ.mjs";
import { w as windImg } from "./wind-babilonia-BAaMSfbQ.mjs";
import { r as raioBrand } from "./raio-hrz-CLnU4K00.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { S as ShieldCheck, A as Activity, Z as Zap, W as Wind, b as ArrowRight, n as Earth, U as Users, t as HeartHandshake, L as Leaf, B as Building2, u as ChartLine } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/html-parse-stringify.mjs";
import "../_libs/void-elements.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const defaultStaggerTimes = {
  char: 0.03,
  word: 0.05,
  line: 0.1
};
const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};
const presetVariants = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(12px)" }
    }
  },
  "fade-in-blur": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: 20, filter: "blur(12px)" }
    }
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 }
    }
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 }
    }
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    }
  }
};
const AnimationComponent = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {
  const content = per === "line" ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants, className: "block", children: segment }) : per === "word" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      "aria-hidden": "true",
      variants,
      className: "inline-block whitespace-pre",
      children: segment
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "inline-block whitespace-pre", children: segment.split("").map((char, charIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      "aria-hidden": "true",
      variants,
      className: "inline-block whitespace-pre",
      children: char
    },
    `char-${charIndex}`
  )) });
  if (!segmentWrapperClassName) return content;
  const defaultWrapperClassName = per === "line" ? "block" : "inline-block";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${defaultWrapperClassName} ${segmentWrapperClassName}`, children: content });
});
AnimationComponent.displayName = "AnimationComponent";
function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
  segmentWrapperClassName
}) {
  const segments = per === "line" ? children.split("\n") : children.split(/(\s+)/);
  const MotionTag = motion[as];
  const selectedVariants = preset ? presetVariants[preset] : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;
  const ariaLabel = per === "line" ? void 0 : children;
  const stagger = defaultStaggerTimes[per];
  const computedVariants = {
    hidden: containerVariants.hidden,
    visible: {
      ...containerVariants.visible,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    },
    exit: containerVariants.exit
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: trigger && /* @__PURE__ */ jsxRuntimeExports.jsx(
    MotionTag,
    {
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      "aria-label": ariaLabel,
      variants: computedVariants,
      className,
      onAnimationComplete,
      children: segments.map((segment, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimationComponent,
        {
          segment,
          variants: itemVariants,
          per,
          segmentWrapperClassName
        },
        `${per}-${index}-${segment}`
      ))
    }
  ) });
}
const heroImg = "/assets/hero-transmission-DHv_kxWN.jpg";
const babiloniaImg = "/assets/babilonia-aerial-CXq06yxU.jpg";
const heroVideo = "/assets/hero-hrz-McpaVsYh.mp4";
function HomePage() {
  const {
    t
  } = useTranslation();
  const STATS = [{
    to: 1,
    prefix: "R$ ",
    suffix: "bi+",
    decimals: 0,
    label: t("home.stats.revenue")
  }, {
    to: 2403,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: t("home.stats.ckm")
  }, {
    to: 14,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: t("home.stats.spes")
  }, {
    to: 136.5,
    prefix: "",
    suffix: " MW",
    decimals: 1,
    label: t("home.stats.wind")
  }];
  const PILLARS = [{
    icon: ShieldCheck,
    title: t("home.pillars.disciplined.title"),
    text: t("home.pillars.disciplined.text")
  }, {
    icon: Activity,
    title: t("home.pillars.efficient.title"),
    text: t("home.pillars.efficient.text")
  }, {
    icon: Zap,
    title: t("home.pillars.reliable.title"),
    text: t("home.pillars.reliable.text")
  }, {
    icon: Wind,
    title: t("home.pillars.responsible.title"),
    text: t("home.pillars.responsible.text")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen overflow-hidden bg-[#060c1a] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.video, { src: heroVideo, poster: heroImg, autoPlay: true, loop: true, muted: true, playsInline: true, preload: "auto", initial: {
        scale: 1.05,
        opacity: 1
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        duration: 1.5,
        delay: HERO_VIDEO_REVEAL,
        ease: easeOut
      }, className: "absolute inset-0 z-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 bg-gradient-to-b from-[#060c1a]/80 via-[#0a1328]/70 to-[#040810]/92" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex h-full flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz flex flex-1 items-center pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full gap-10 lg:grid-cols-2 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center lg:justify-end lg:pr-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: t("home.hero.logoAlt"), className: "h-28 w-auto sm:h-32 lg:h-40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 30
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: HERO_DURATION,
            delay: HERO_BASE + 0.45,
            ease: easeOut
          }, className: "flex flex-col items-start text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display-mega max-w-3xl text-left text-3xl font-light text-white sm:text-4xl lg:text-5xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TextEffect, { per: "word", as: "span", preset: "slide", delay: HERO_BASE + 0.5, className: "block", children: t("home.hero.headline1") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TextEffect, { per: "word", as: "span", preset: "slide", delay: HERO_BASE + 0.95, className: "text-gradient-electric block whitespace-nowrap font-normal", children: t("home.hero.headline2") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/transmissoras", className: "group inline-flex items-center gap-2 rounded-full bg-hrz-electric px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-hrz-electric/85 hover:shadow-[0_0_28px_rgba(41,168,229,0.40)]", children: [
                t("home.hero.ctaTransmission"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition-transform duration-300 group-hover:translate-x-1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/eolicas", className: "group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/55 hover:bg-white/[0.07]", children: [
                t("home.hero.ctaWind"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition-transform duration-300 group-hover:translate-x-1" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "border-t border-white/10 bg-black/30 backdrop-blur-md", initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: HERO_DURATION,
          delay: HERO_BASE + 1.1,
          ease: easeOut
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "container-hrz grid grid-cols-2 gap-y-6 py-5 lg:grid-cols-4", initial: "hidden", animate: "show", variants: {
          hidden: {},
          show: {
            transition: {
              delayChildren: HERO_BASE + 1.15,
              staggerChildren: HERO_STAGGER
            }
          }
        }, children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex flex-col items-center border-l border-white/10 px-6 text-center first:border-l-0", variants: {
          hidden: {
            opacity: 0,
            y: 30
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: HERO_DURATION,
              ease: easeOut
            }
          }
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl font-light tracking-tight text-hrz-electric sm:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.to, prefix: s.prefix, suffix: s.suffix, decimals: s.decimals, fallbackDelay: (HERO_BASE + 1.15) * 1e3 + i * HERO_STAGGER * 1e3 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-wider text-white/60", children: s.label })
        ] }, s.label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", rotate: 0, opacity: 0.06, className: "-left-20 top-10 h-[560px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", rotate: 0, opacity: 0.04, duration: 9, className: "-right-16 bottom-0 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-16 lg:grid-cols-[1fr_1.2fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("home.about.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-4 text-4xl text-foreground sm:text-5xl lg:text-6xl", children: [
            t("home.about.heading1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric", children: t("home.about.heading2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground", children: t("home.about.body1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-base leading-relaxed text-muted-foreground", children: t("home.about.body2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sobre", className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all", children: [
            t("home.about.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid gap-5 sm:grid-cols-2", children: PILLARS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-electric group-hover:text-hrz-electric", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { size: 20, strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl font-light tracking-tight text-foreground", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.text })
        ] }) }, p.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-hrz-deep text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid gap-6 py-16 lg:grid-cols-2 lg:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[480px] overflow-hidden rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: substationImg, alt: t("home.portfolio.transmissionImgAlt"), loading: "lazy", initial: {
            scale: 1.12
          }, whileInView: {
            scale: 1
          }, viewport: {
            once: true
          }, transition: {
            duration: 1.4,
            ease: easeOut
          }, className: "absolute inset-0 h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-deep/90 to-hrz-deep/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "absolute inset-x-0 bottom-0 p-8 lg:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("home.portfolio.transmissionEyebrow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-3xl font-bold lg:text-4xl", children: t("home.portfolio.transmissionHeading") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm text-white/80", children: t("home.portfolio.transmissionBody") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[480px] overflow-hidden rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: windImg, alt: t("home.portfolio.windImgAlt"), loading: "lazy", initial: {
            scale: 1.12
          }, whileInView: {
            scale: 1
          }, viewport: {
            once: true
          }, transition: {
            duration: 1.4,
            ease: easeOut
          }, className: "absolute inset-0 h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-green-dark/90 to-hrz-green/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.15, className: "absolute inset-x-0 bottom-0 p-8 lg:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-white", children: t("home.portfolio.windEyebrow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-3xl font-bold lg:text-4xl", children: t("home.portfolio.windHeading") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm text-white/85", children: t("home.portfolio.windBody") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz pb-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/empresas", className: "inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all", children: [
        t("home.portfolio.cta"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("home.quickAccess.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-3xl font-light text-foreground sm:text-4xl lg:text-5xl", children: t("home.quickAccess.heading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "grid gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoverLift, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/transmissoras", className: "group flex h-full items-start gap-5 rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-hrz-electric/40 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-electric group-hover:text-hrz-electric", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 22, strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold tracking-tight text-foreground", children: t("home.quickAccess.transmission.name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t("home.quickAccess.transmission.description") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-hrz-electric", children: [
              t("home.quickAccess.transmission.cta"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13, className: "transition-transform duration-300 group-hover:translate-x-1" })
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoverLift, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/eolicas", className: "group flex h-full items-start gap-5 rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-hrz-green/40 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-green group-hover:text-hrz-green", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { size: 22, strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold tracking-tight text-foreground", children: t("home.quickAccess.wind.name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t("home.quickAccess.wind.description") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-hrz-green", children: [
              t("home.quickAccess.wind.cta"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13, className: "transition-transform duration-300 group-hover:translate-x-1" })
            ] })
          ] })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", rotate: 0, opacity: 0.04, duration: 10, className: "-right-16 top-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-hrz-electric/30 bg-hrz-electric/10 text-hrz-electric mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { size: 26, strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("home.actis.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl", children: [
            t("home.actis.heading1"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric font-normal", children: t("home.actis.heading2") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "rounded-2xl border border-border/60 bg-card p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-muted-foreground", children: t("home.actis.body1") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, className: "rounded-2xl border border-border/60 bg-card p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-muted-foreground", children: t("home.actis.body2") }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/empresas", className: "inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all", children: [
          t("home.actis.cta"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", rotate: 0, opacity: 0.06, className: "left-6 bottom-10 h-[400px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[45%] top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: raioBrand, alt: "", "aria-hidden": true, initial: {
        opacity: 0,
        y: 28,
        scale: 0.96
      }, whileInView: {
        opacity: 0.16,
        y: 0,
        scale: 1
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 1.1,
        ease: easeOut
      }, className: "h-[420px] w-auto drop-shadow-[0_24px_70px_rgba(41,168,229,0.22)]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("home.footprint.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl", children: [
            t("home.footprint.heading1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric font-normal", children: t("home.footprint.heading2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground", children: t("home.footprint.body") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all", children: [
            t("home.footprint.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { offset: 40, className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrazilMapAnimated, { alt: t("home.mapAlt") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid py-24 text-white lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full bg-hrz-green-vivid/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", rotate: 0, opacity: 0.07, duration: 9, className: "right-[-40px] top-10 h-[440px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium tracking-[0.2em] text-white/90", children: t("home.esg.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-4 text-4xl font-light text-white sm:text-5xl lg:text-6xl", children: [
            t("home.esg.headingPre"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal", children: t("home.esg.headingVerb1") }),
            t("home.esg.headingMid"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal", children: t("home.esg.headingVerb2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-white/80", children: t("home.esg.body") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/esg", className: "group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-hrz-green-dark transition hover:scale-[1.04] hover:bg-white/90", children: [
            t("home.esg.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition group-hover:translate-x-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "grid gap-5 sm:grid-cols-3", initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "0px 0px -15% 0px",
          amount: 0.2
        }, variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.13,
              delayChildren: 0.08
            }
          }
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EsgCard, { icon: Users, metric: t("home.esg.card1.metric"), label: t("home.esg.card1.label"), text: t("home.esg.card1.text") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EsgCard, { icon: HeartHandshake, metric: t("home.esg.card2.metric"), label: t("home.esg.card2.label"), text: t("home.esg.card2.text") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EsgCard, { icon: Leaf, metric: t("home.esg.card3.metric"), label: t("home.esg.card3.label"), text: t("home.esg.card3.text") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", rotate: 0, opacity: 0.07, className: "-left-10 top-0 h-[480px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", rotate: 0, opacity: 0.05, duration: 9, className: "right-10 bottom-10 h-[380px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("home.value.eyebrow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-4 text-4xl text-foreground sm:text-5xl lg:text-6xl", children: [
              t("home.value.heading1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric", children: t("home.value.heading2") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground", children: t("home.value.body") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/investidores", className: "group mt-8 inline-flex items-center gap-2 rounded-full bg-hrz-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.04] hover:bg-hrz-mid", children: [
              t("home.value.cta"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition group-hover:translate-x-1" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            scale: 0.96
          }, whileInView: {
            opacity: 1,
            scale: 1
          }, viewport: {
            once: true,
            margin: "-80px"
          }, transition: {
            duration: 1,
            ease: easeOut
          }, className: "relative overflow-hidden rounded-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: babiloniaImg, alt: t("home.value.windImgAlt"), className: "aspect-[4/3] h-auto w-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-hrz-deep/25 via-transparent to-transparent" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "mt-14 grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ValueCard, { icon: Building2, title: t("home.value.phase1.title"), text: t("home.value.phase1.text") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ValueCard, { icon: ChartLine, title: t("home.value.phase2.title"), text: t("home.value.phase2.text"), accent: true })
        ] })
      ] })
    ] })
  ] });
}
function EsgCard({
  icon: Icon,
  metric,
  label,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: {
    hidden: {
      opacity: 0,
      y: 30
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: easeOut
      }
    }
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "group h-full rounded-2xl border border-white/20 bg-white/[0.06] p-7 backdrop-blur-sm transition duration-300 hover:border-white/40 hover:bg-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition group-hover:border-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-4xl font-light tracking-tight text-white", children: metric }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-white/80", children: text })
  ] }) });
}
function ValueCard({
  icon: Icon,
  title,
  text,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "group h-full rounded-2xl border p-7 transition duration-300 " + (accent ? "border-white/15 bg-hrz-deep text-white hover:border-white/35" : "border-border/60 bg-card text-foreground hover:border-foreground/25"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border transition " + (accent ? "border-white/40 text-white group-hover:border-white" : "border-foreground/15 text-foreground group-hover:border-hrz-electric group-hover:text-hrz-electric"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-lg font-light tracking-tight", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed " + (accent ? "text-white/75" : "text-muted-foreground"), children: text })
  ] }) });
}
export {
  HomePage as component
};
