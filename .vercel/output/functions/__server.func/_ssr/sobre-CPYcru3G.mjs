import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteShell, a as raioSolid } from "./raio-solid-gradient-BcqzXuJX.mjs";
import { P as PageHero } from "./PageHero-KBeX3MiY.mjs";
import { B as BoltDecor } from "./BoltDecor-CIyKR1in.mjs";
import { R as Reveal, S as Stagger, a as StaggerItem, e as easeOut } from "./router-BN0x4rgk.mjs";
import { e as eduardoImg } from "./eduardo-brito-DHlBaxqU.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation, T as Trans } from "../_libs/react-i18next.mjs";
import { T as Target, E as Eye, g as Sparkles } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const fernandoImg = "/assets/fernando-oliveira-VA890cKi.webp";
const italoImg = "/assets/italo-david-Bv_L-gCY.webp";
const julianaImg = "/assets/juliana-scalzo-Bj3kaZ8S.webp";
const tiagoImg = "/assets/tiago-cacozzi-CRcyLBjN.webp";
const LEADERSHIP_IMAGES = [eduardoImg, fernandoImg, julianaImg, italoImg, tiagoImg];
function SobrePage() {
  const {
    t
  } = useTranslation();
  const TIMELINE = t("about.timeline.items", {
    returnObjects: true
  });
  const leaderItems = t("about.leadership.items", {
    returnObjects: true
  });
  const LEADERSHIP = leaderItems.map((item, i) => ({
    ...item,
    img: LEADERSHIP_IMAGES[i]
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("about.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("about.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("about.hero.titleLine2") })
    ] }), subtitle: t("about.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-24 top-10 h-[520px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-16 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.model.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: [
            t("about.model.headingPre"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric", children: t("about.model.headingWord1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            t("about.model.headingMid"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric", children: t("about.model.headingWord2") }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.12, className: "space-y-5 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { i18nKey: "about.model.body1", components: {
            bold: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground" }),
            accent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric font-semibold" })
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { i18nKey: "about.model.body2", components: {
            bold: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground" }),
            accent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric font-semibold" })
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { i18nKey: "about.model.body3", components: {
            bold: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-foreground" }),
            accent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric font-semibold" })
          } }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-right-20 top-1/2 h-[500px] w-auto -translate-y-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.business.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("about.business.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground", children: t("about.business.body") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "mt-12 grid gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { title: t("about.business.card1.title"), text: t("about.business.card1.text") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { title: t("about.business.card2.title"), text: t("about.business.card2.text") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { title: t("about.business.card3.title"), text: t("about.business.card3.text") }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-16 bottom-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.timeline.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("about.timeline.heading") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, { items: TIMELINE })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-right-24 top-10 h-[480px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-8 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MissionCard, { icon: Target, eyebrow: t("about.mission.eyebrow"), text: t("about.mission.text"), variant: "light", delay: 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MissionCard, { icon: Eye, eyebrow: t("about.vision.eyebrow"), text: t("about.vision.text"), variant: "dark", delay: 0.12 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-left-20 bottom-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.leadership.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("about.leadership.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground", children: t("about.leadership.body") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5", children: LEADERSHIP.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card transition hover:border-hrz-electric", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l.img, alt: t("about.leadership.portraitAlt", {
            name: l.name
          }), loading: "lazy", className: "aspect-[3/4] w-full rounded-t-2xl rounded-b-none object-cover object-center" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-foreground", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-hrz-electric", children: l.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-relaxed text-muted-foreground", children: l.bio })
          ] })
        ] }) }, l.name)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, className: "mt-16 rounded-3xl bg-hrz-deep p-10 text-white lg:p-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.leadership.governance.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-3xl text-xl leading-relaxed text-white/85 lg:text-2xl", children: t("about.leadership.governance.body") })
        ] })
      ] })
    ] })
  ] });
}
function ModelCard({
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-hrz-electric/40 hover:shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-x-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-0 top-0 h-12 w-1 bg-hrz-electric/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold tracking-tight text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: text })
  ] });
}
function Timeline({
  items
}) {
  const [active, setActive] = reactExports.useState(0);
  const item = items[active] ?? items[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5", children: items.map((t, i) => {
      const isActive = active === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 h-10 text-center text-xs leading-tight text-muted-foreground", children: t.headerStrong && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t.header }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: t.headerStrong })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { type: "button", onClick: () => setActive(i), whileHover: {
          y: -4
        }, whileTap: {
          scale: 0.97
        }, className: `relative w-full overflow-hidden rounded-2xl border bg-background text-left shadow-sm transition ${isActive ? "border-hrz-electric ring-2 ring-hrz-electric/40" : "border-border hover:border-hrz-electric/60"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center px-3 py-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-hrz-deep", children: t.delta }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.unit })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-px bg-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: raioSolid, alt: "", "aria-hidden": true, className: "pointer-events-none absolute left-1/2 top-1/2 h-5 w-auto -translate-x-1/2 -translate-y-1/2 drop-shadow" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center bg-gradient-to-b from-hrz-electric to-hrz-deep px-3 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold tracking-tight text-white", children: t.year }) })
        ] })
      ] }, t.year);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 16
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -10
    }, transition: {
      duration: 0.4,
      ease: easeOut
    }, className: "mt-10 rounded-3xl border border-border bg-card p-8 lg:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-hrz-electric px-4 py-1.5 font-display text-sm font-bold text-white", children: item.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow text-hrz-electric", children: [
          item.header,
          " ",
          item.headerStrong
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground", children: item.detail })
    ] }, item.year) })
  ] });
}
function MissionCard({
  icon: Icon,
  eyebrow,
  text,
  variant,
  delay
}) {
  const isDark = variant === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    amount: 0.15
  }, transition: {
    duration: 0.85,
    delay,
    ease: easeOut
  }, whileHover: {
    y: -6
  }, className: `group relative overflow-hidden rounded-3xl p-10 lg:p-12 ${isDark ? "bg-hrz-deep text-white" : "border border-border bg-card"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, initial: {
      rotate: 0
    }, whileHover: {
      rotate: 12,
      scale: 1.08
    }, transition: {
      duration: 0.5,
      ease: "easeOut"
    }, className: `flex h-14 w-14 items-center justify-center rounded-2xl ${isDark ? "bg-hrz-electric text-white" : "bg-hrz-electric/10 text-hrz-electric"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `eyebrow mt-6 ${isDark ? "text-hrz-electric" : "text-hrz-electric"}`, children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-lg leading-relaxed ${isDark ? "text-white/90" : "text-foreground"}`, children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, initial: {
      opacity: 0
    }, whileHover: {
      opacity: 1
    }, className: `pointer-events-none absolute -bottom-6 -right-6 ${isDark ? "text-white/10" : "text-hrz-electric/10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 120 }) })
  ] });
}
export {
  SobrePage as component
};
