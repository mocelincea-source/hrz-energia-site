import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteShell } from "./raio-solid-gradient-DUOEdOlR.mjs";
import { P as PageHero } from "./PageHero-6-NEz9a7.mjs";
import { B as BoltDecor } from "./BoltDecor-DQRfPKjw.mjs";
import { s as substationImg, B as BrazilMapAnimated } from "./substation-QNUU-Ktf.mjs";
import { R as Reveal, P as Parallax } from "./router-eIpJh2lG.mjs";
import { w as windImg } from "./wind-babilonia-BAaMSfbQ.mjs";
import { r as raioBrand } from "./raio-hrz-CLnU4K00.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { Z as Zap, W as Wind, b as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
function EmpresasPage() {
  const {
    t
  } = useTranslation();
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
    ] })
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
export {
  EmpresasPage as component
};
