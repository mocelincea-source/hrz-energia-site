import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./raio-solid-gradient-DUOEdOlR.mjs";
import { P as PageHero } from "./PageHero-6-NEz9a7.mjs";
import { B as BoltDecor } from "./BoltDecor-DQRfPKjw.mjs";
import { B as BrazilMapAnimated, s as substationImg } from "./substation-QNUU-Ktf.mjs";
import { R as Reveal, S as Stagger, a as StaggerItem, H as HoverLift } from "./router-eIpJh2lG.mjs";
import { w as windImg } from "./wind-babilonia-BAaMSfbQ.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { b as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/html-parse-stringify.mjs";
import "../_libs/void-elements.mjs";
import "../_libs/use-sync-external-store.mjs";
function PortfolioPage() {
  const {
    t
  } = useTranslation();
  const transmissionAssets = t("segments.portfolio.transmissionAssets", {
    returnObjects: true
  });
  const footprintStats = [t("segments.portfolio.footprint.stat1", {
    returnObjects: true
  }), t("segments.portfolio.footprint.stat2", {
    returnObjects: true
  }), t("segments.portfolio.footprint.stat3", {
    returnObjects: true
  }), t("segments.portfolio.footprint.stat4", {
    returnObjects: true
  })];
  const transmissionStats = t("segments.portfolio.transmission.stats", {
    returnObjects: true
  });
  const generationStats = t("segments.portfolio.generation.stats", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("segments.portfolio.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("segments.portfolio.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("segments.portfolio.hero.titleLine2") })
    ] }), subtitle: t("segments.portfolio.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-24 top-10 h-[520px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-right-20 bottom-10 h-[440px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow text-hrz-electric", children: [
            t("segments.portfolio.footprint.eyebrow"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: " — " }),
            t("segments.portfolio.footprint.heading")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-lg text-base leading-relaxed text-muted-foreground", children: t("segments.portfolio.footprint.body") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-8 grid w-full grid-cols-2 gap-4 lg:gap-6", children: footprintStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { value: s.value, label: s.label }) }, s.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/transmissoras", className: "group mt-8 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-50", children: [
            t("segments.portfolio.transmission.cta"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition-transform group-hover:translate-x-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrazilMapAnimated, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-right-24 top-1/2 h-[480px] w-auto -translate-y-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega text-4xl text-foreground sm:text-5xl", children: t("segments.portfolio.transmission.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground", children: t("segments.portfolio.transmission.subtitle") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3", children: transmissionAssets.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "bg-card p-6 transition hover:bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-bold uppercase tracking-widest text-hrz-electric", children: a.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg font-semibold tracking-tight text-foreground", children: a.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: a.info })
        ] }, a.code)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "relative mt-16 overflow-hidden rounded-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: substationImg, alt: t("segments.portfolio.transmission.imgAlt"), loading: "lazy", className: "h-[420px] w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-deep to-hrz-deep/0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-6 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: transmissionStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DarkStat, { value: s.value, label: s.label }) }, s.label)) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-hrz-deep py-24 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.08, className: "-left-20 top-10 h-[500px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega text-4xl sm:text-5xl", children: t("segments.portfolio.generation.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-lg text-base leading-relaxed text-white/80", children: t("segments.portfolio.generation.body") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-6 grid w-full grid-cols-2 gap-4", children: generationStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DarkStatCard, { value: s.value, label: s.label }) }, s.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/eolicas", className: "group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10", children: [
            t("segments.portfolio.generation.cta"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition-transform group-hover:translate-x-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HoverLift, { className: "relative h-[420px] overflow-hidden rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: windImg, alt: t("segments.portfolio.generation.imgAlt"), loading: "lazy", className: "h-full w-full object-cover" }) })
      ] }) })
    ] })
  ] });
}
function StatCard({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start justify-center rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold leading-tight text-gray-900 xl:text-4xl", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500 xl:text-sm", children: label })
  ] });
}
function DarkStatCard({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center rounded-2xl border border-white/10 bg-white/5 p-5 xl:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold leading-tight text-white xl:text-3xl", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400 xl:text-sm", children: label })
  ] });
}
function DarkStat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/15 pl-4 first:border-l-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-extrabold text-white sm:text-3xl", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-wider text-white/60", children: label })
  ] });
}
export {
  PortfolioPage as component
};
