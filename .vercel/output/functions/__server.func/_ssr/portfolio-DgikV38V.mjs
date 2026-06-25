import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteShell } from "./raio-solid-gradient-jqq88Ct5.mjs";
import { P as PageHero } from "./PageHero-DKp3YVBf.mjs";
import { B as BoltDecor } from "./BoltDecor-QJqIERRo.mjs";
import { B as BrazilMapAnimated, s as substationImg } from "./substation-C3WfM9FQ.mjs";
import { R as Reveal, S as Stagger, a as StaggerItem, H as HoverLift } from "./router-BEOl7Dc4.mjs";
import { w as windImg } from "./wind-babilonia-BAaMSfbQ.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/html-parse-stringify.mjs";
import "../_libs/void-elements.mjs";
import "../_libs/use-sync-external-store.mjs";
function PortfolioPage() {
  const {
    t
  } = useTranslation();
  const TRANSMISSION_ASSETS = t("segments.portfolio.transmissionAssets", {
    returnObjects: true
  });
  const footprintStat1 = t("segments.portfolio.footprint.stat1", {
    returnObjects: true
  });
  const footprintStat2 = t("segments.portfolio.footprint.stat2", {
    returnObjects: true
  });
  const footprintStat3 = t("segments.portfolio.footprint.stat3", {
    returnObjects: true
  });
  const footprintStat4 = t("segments.portfolio.footprint.stat4", {
    returnObjects: true
  });
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.portfolio.footprint.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: [
            t("segments.portfolio.footprint.heading1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            t("segments.portfolio.footprint.heading2")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground", children: t("segments.portfolio.footprint.body") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { value: footprintStat1.value, label: footprintStat1.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { value: footprintStat2.value, label: footprintStat2.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { value: footprintStat3.value, label: footprintStat3.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { value: footprintStat4.value, label: footprintStat4.label })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrazilMapAnimated, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-right-24 top-1/2 h-[480px] w-auto -translate-y-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.portfolio.transmission.eyebrow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: t("segments.portfolio.transmission.heading") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "max-w-md text-sm leading-relaxed text-muted-foreground", children: t("segments.portfolio.transmission.subtitle") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3", children: TRANSMISSION_ASSETS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "bg-card p-6 transition hover:bg-secondary/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-bold uppercase tracking-widest text-hrz-electric", children: a.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl font-bold text-foreground", children: a.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: a.info })
        ] }, a.code)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "relative mt-16 overflow-hidden rounded-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: substationImg, alt: t("segments.portfolio.transmission.imgAlt"), loading: "lazy", className: "h-[420px] w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-deep to-hrz-deep/0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 grid grid-cols-2 gap-6 p-10 text-white sm:grid-cols-4", children: transmissionStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: s.value, label: s.label }, s.label)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-hrz-deep py-24 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.08, className: "-left-20 top-10 h-[500px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.portfolio.generation.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-4xl sm:text-5xl", children: t("segments.portfolio.generation.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-lg text-base leading-relaxed text-white/80", children: t("segments.portfolio.generation.body") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-6", children: generationStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: s.value, label: s.label }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HoverLift, { className: "relative h-[420px] overflow-hidden rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: windImg, alt: t("segments.portfolio.generation.imgAlt"), loading: "lazy", className: "h-full w-full object-cover" }) })
      ] }) })
    ] })
  ] });
}
function Stat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/15 pl-4 first:border-l-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-extrabold text-white sm:text-4xl", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-wider text-white/60", children: label })
  ] });
}
function MiniStat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-extrabold text-hrz-deep", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: label })
  ] });
}
export {
  PortfolioPage as component
};
