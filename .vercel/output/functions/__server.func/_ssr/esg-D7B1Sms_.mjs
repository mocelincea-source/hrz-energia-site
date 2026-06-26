import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteShell } from "./raio-solid-gradient-e3zx332G.mjs";
import { P as PageHero } from "./PageHero-CYVsIgyU.mjs";
import { B as BoltDecor } from "./BoltDecor-BXAJvxLL.mjs";
import { S as Stagger, a as StaggerItem } from "./router-CsoREqJW.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { U as Users, H as Heart, j as Sprout, L as Leaf, k as Scale, S as ShieldCheck, l as Handshake } from "../_libs/lucide-react.mjs";
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
import "../_libs/html-parse-stringify.mjs";
import "../_libs/void-elements.mjs";
import "../_libs/use-sync-external-store.mjs";
const infraImg = "/assets/infraestrutura-3OT6ApDu.jpg";
const comunidadeImg = "/assets/comunidade-DeXIO8k8.jpg";
const sustentImg = "/assets/sustentabilidade-ClKI-gsW.jpg";
const juntosImg = "/assets/juntos-mais-fortes-B7ZndgVM.jpg";
const capacitImg = "/assets/capacitacao-gwrgz2In.jpg";
const rendaImg = "/assets/geracao-renda-C2mYUYDy.jpg";
const GALLERY_IMAGES = [infraImg, comunidadeImg, capacitImg, rendaImg, sustentImg, juntosImg];
const PILLAR_ICONS = [Leaf, Users, Scale];
const VALUE_ICONS = [Users, ShieldCheck, Sprout, Handshake];
function EsgPage() {
  const {
    t
  } = useTranslation();
  const gallery = t("esg.gallery", {
    returnObjects: true
  });
  const pillars = t("esg.pillars", {
    returnObjects: true
  });
  const valueItems = t("esg.values.items", {
    returnObjects: true
  });
  const highlights = t("esg.highlights.items", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("esg.hero.eyebrow"), variant: "green", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("esg.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal", children: t("esg.hero.titleLine2") })
    ] }), subtitle: t("esg.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-20 top-0 h-[380px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid items-center gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactMetric, { icon: Users, value: "+500", label: t("esg.metrics.people") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactMetric, { icon: Heart, value: "10", label: t("esg.metrics.communities") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactMetric, { icon: Sprout, value: "5", label: t("esg.metrics.projects") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-right-20 top-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-green", children: t("esg.social.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("esg.social.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative overflow-hidden rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: GALLERY_IMAGES[i], alt: g.label, loading: "lazy", className: "h-64 w-full object-cover transition duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-hrz-deep/95 via-hrz-deep/40 to-transparent p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-hrz-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white", children: g.label }) })
        ] }) }, g.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-16 bottom-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "container-hrz relative grid gap-6 lg:grid-cols-3", children: pillars.map((p, i) => {
        const PillarIcon = PILLAR_ICONS[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-green group-hover:text-hrz-green", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillarIcon, { size: 20, strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-light tracking-tight text-foreground", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground", children: p.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-3 shrink-0 bg-hrz-green" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it })
          ] }, it)) })
        ] }) }, p.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid py-24 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.08, className: "-right-24 top-10 h-[500px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-white/80", children: t("esg.values.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-white/85", children: t("esg.values.tagline") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4", children: valueItems.map((v, i) => {
          const ValueIcon = VALUE_ICONS[i];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "group relative border-l border-white/20 pl-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-white transition group-hover:scale-110 group-hover:border-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValueIcon, { size: 26, strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-base font-extrabold uppercase tracking-wider text-white", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/85", children: v.text })
          ] }, v.title);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-right-20 top-10 h-[440px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-green", children: t("esg.highlights.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("esg.highlights.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 md:grid-cols-3", children: highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { title: h.title, text: h.text }) }, h.title)) })
      ] })
    ] })
  ] });
}
function Highlight({
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-light tracking-tight text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: text })
  ] });
}
function ImpactMetric({
  icon: Icon,
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-green group-hover:text-hrz-green", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-4xl font-light tracking-tight text-hrz-green", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: label })
  ] });
}
export {
  EsgPage as component
};
