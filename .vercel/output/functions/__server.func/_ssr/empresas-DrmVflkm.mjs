import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteShell } from "./raio-solid-gradient-jqq88Ct5.mjs";
import { P as PageHero } from "./PageHero-DKp3YVBf.mjs";
import { B as BoltDecor } from "./BoltDecor-QJqIERRo.mjs";
import { s as substationImg, B as BrazilMapAnimated } from "./substation-C3WfM9FQ.mjs";
import { R as Reveal, P as Parallax } from "./router-BEOl7Dc4.mjs";
import { w as windImg } from "./wind-babilonia-BAaMSfbQ.mjs";
import { r as raioBrand } from "./raio-hrz-CLnU4K00.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { n as Earth, B as Building2, Z as Zap, W as Wind, b as ArrowRight, N as Network } from "../_libs/lucide-react.mjs";
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
const ORG_NODE_CONFIGS = [{
  id: "actis",
  title: "Actis LLP",
  tone: "electric",
  icon: Earth
}, {
  id: "hrz",
  title: "HRZ Energia",
  tone: "white",
  icon: Building2
}, {
  id: "transmissoras",
  title: "Transmissoras",
  tone: "card",
  icon: Zap
}, {
  id: "babilonia",
  title: "Eólicas Babilônia",
  tone: "card",
  icon: Wind
}];
function EmpresasPage() {
  const {
    t
  } = useTranslation();
  const orgNodes = ORG_NODE_CONFIGS.map((cfg) => ({
    ...cfg,
    subtitle: t(`companies.orgNodes.${cfg.id}.subtitle`),
    description: t(`companies.orgNodes.${cfg.id}.description`),
    details: t(`companies.orgNodes.${cfg.id}.details`, {
      returnObjects: true
    })
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("companies.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("companies.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("companies.hero.titleHighlight") })
    ] }), subtitle: t("companies.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("companies.logic.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: [
          t("companies.logic.heading1"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          t("companies.logic.heading2")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-base leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("companies.logic.body1") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("companies.logic.body2") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: substationImg, alt: t("companies.cards.transmission.imgAlt"), className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-deep/95 via-hrz-deep/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-8 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-hrz-electric", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 eyebrow text-hrz-electric", children: t("companies.cards.transmission.eyebrow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-2 text-3xl font-bold", children: t("companies.cards.transmission.name") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: t("companies.cards.transmission.description") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { value: "9", label: t("companies.cards.transmission.metricLabel1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { value: "2.403", label: t("companies.cards.transmission.metricLabel2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { value: "R$ 935m", label: t("companies.cards.transmission.metricLabel3") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.hrztransmissoras.com.br/", target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-hrz-mid", children: [
            t("companies.cards.transmission.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: windImg, alt: t("companies.cards.wind.imgAlt"), className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-green-dark/95 via-hrz-green/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-8 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-white text-hrz-green", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { size: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 eyebrow text-white", children: t("companies.cards.wind.eyebrow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-2 text-3xl font-bold", children: t("companies.cards.wind.name") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: t("companies.cards.wind.description") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { value: "136,5 MW", label: t("companies.cards.wind.metricLabel1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { value: "65", label: t("companies.cards.wind.metricLabel2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { value: "57%", label: t("companies.cards.wind.metricLabel3") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.eolicasbabilonia.com.br/", target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-hrz-green-dark", children: [
            t("companies.cards.wind.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] })
      ] })
    ] }) }),
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
        ease: [0.22, 1, 0.36, 1]
      }, className: "h-[420px] w-auto drop-shadow-[0_24px_70px_rgba(41,168,229,0.22)]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("companies.footprint.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl", children: [
            t("companies.footprint.heading1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric font-normal", children: t("companies.footprint.heading2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground", children: t("companies.footprint.body") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { offset: 40, className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrazilMapAnimated, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hrz-deep py-24 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("companies.corporate.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl sm:text-5xl", children: t("companies.corporate.heading") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-relaxed text-white/80", children: t("companies.corporate.body") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrgChart, { nodes: orgNodes, exploreHint: t("companies.corporate.exploreHint") })
    ] }) })
  ] });
}
function Metric({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-extrabold text-hrz-deep", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-wider text-muted-foreground", children: label })
  ] });
}
function OrgChart({
  nodes,
  exploreHint
}) {
  const [activeId, setActiveId] = reactExports.useState("hrz");
  const active = nodes.find((n) => n.id === activeId) ?? nodes[1];
  const [actis, hrz, trans, bab] = nodes;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrgBox, { node: actis, active: activeId === actis.id, onClick: () => setActiveId(actis.id) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedConnector, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrgBox, { node: hrz, active: activeId === hrz.id, onClick: () => setActiveId(hrz.id) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedConnector, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid w-full gap-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-1/4 right-1/4 top-0 hidden h-px -translate-y-3 bg-white/25 sm:block", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrgBox, { node: trans, active: activeId === trans.id, onClick: () => setActiveId(trans.id) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrgBox, { node: bab, active: activeId === bab.id, onClick: () => setActiveId(bab.id) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:pl-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 14
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -10
    }, transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }, className: "rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-hrz-electric text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(active.icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-white", children: active.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-hrz-electric", children: active.subtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-white/80", children: active.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-3", children: active.details.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-white/60", children: d.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-base font-bold text-white", children: d.value })
      ] }, d.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { size: 12 }),
        " ",
        exploreHint
      ] })
    ] }, active.id) }) })
  ] });
}
function OrgBox({
  node,
  active,
  onClick
}) {
  const base = node.tone === "electric" ? "bg-hrz-electric text-white" : node.tone === "white" ? "bg-white text-hrz-deep" : "border border-white/15 bg-white/5 text-white";
  const ring = active ? "ring-2 ring-hrz-electric ring-offset-2 ring-offset-hrz-deep" : "ring-0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { type: "button", onClick, whileHover: {
    y: -3
  }, whileTap: {
    scale: 0.98
  }, className: `w-full max-w-md rounded-2xl px-6 py-5 text-center transition ${base} ${ring}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(node.icon, { size: 16, className: "opacity-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold", children: node.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-wider opacity-80", children: node.subtitle })
  ] });
}
function AnimatedConnector() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
    scaleY: 0
  }, whileInView: {
    scaleY: 1
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.4,
    ease: "easeOut"
  }, style: {
    transformOrigin: "top"
  }, className: "h-8 w-px bg-gradient-to-b from-hrz-electric to-white/20", "aria-hidden": true });
}
export {
  EmpresasPage as component
};
