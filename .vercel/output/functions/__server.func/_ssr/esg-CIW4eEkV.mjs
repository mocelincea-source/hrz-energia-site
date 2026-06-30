import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./raio-solid-gradient-DTZntqVI.mjs";
import { B as BoltDecor } from "./BoltDecor-Dlsbq8t1.mjs";
import { R as Reveal, S as Stagger, a as StaggerItem } from "./router-D2eUFBWB.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { b as ArrowRight, U as UtilityPole, k as Settings, S as ShieldCheck, l as CloudLightning, m as Users, n as Scale, o as TrendingUp, p as ChevronRight, L as Leaf, q as ChartLine, r as CloudRain, s as Sprout, t as ChartColumn, F as FileText, A as Activity, u as Clock, a as Award, H as Handshake } from "../_libs/lucide-react.mjs";
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
const heroEsgImg = "/assets/Header-ESG-CkQ1Suvz.jpeg";
const meioAmbienteImg = "/assets/Meio-Ambiente-C7UEt8tF.jpg";
const socialImg = "/assets/Social-Cyaqj-89.jpg";
const governancaImg = "/assets/Governan%C3%A7a-DmeBOUfr.jpg";
const excelenciaOperacionalImg = "/assets/Excelencia-Operacional-B0TgWNWL.jpg";
const infraImg = "/assets/infraestrutura-3OT6ApDu.jpg";
const comunidadeImg = "/assets/comunidade-DeXIO8k8.jpg";
const rendaImg = "/assets/geracao-renda-C2mYUYDy.jpg";
const PROJECT_IMAGES = [infraImg, comunidadeImg, rendaImg];
const PILLAR_CARD_IMAGES = [meioAmbienteImg, socialImg, governancaImg, excelenciaOperacionalImg];
const PILLAR_CARD_ICONS = [Leaf, Users, Scale, Settings];
const VALUE_ICONS = [Users, ShieldCheck, Sprout, Handshake];
const VALUE_CHAIN_ICONS = [UtilityPole, Settings, ShieldCheck, CloudLightning, Users, Scale, TrendingUp];
const SMART_ESG_CARD_ICONS = [CloudRain, Sprout, ChartColumn, ShieldCheck, FileText, Activity];
const INDICATOR_ICONS = [Leaf, Clock, ShieldCheck, Users, Scale, Award];
const BTN_PRESS = "transition-all duration-200 hover:scale-105 active:scale-95";
const CARD_HOVER = "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg";
const CARD_HOVER_DARK = "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/30";
function EsgPage() {
  const {
    t
  } = useTranslation();
  const pillarItems = t("esg.pillars.items", {
    returnObjects: true
  });
  const valueItems = t("esg.values.items", {
    returnObjects: true
  });
  const valueChainSteps = t("esg.valueChain.steps", {
    returnObjects: true
  });
  const smartEsgCards = t("esg.smartEsg.cards", {
    returnObjects: true
  });
  const socialProjects = t("esg.socialProjects.items", {
    returnObjects: true
  });
  const indicators = t("esg.indicators.items", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[75vh] items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroEsgImg, alt: "", "aria-hidden": true, className: "absolute inset-0 h-full w-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz relative z-10 py-32 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.hero.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display mt-5 max-w-4xl text-5xl leading-tight text-white lg:text-7xl", children: t("esg.hero.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-white/80", children: t("esg.hero.subtitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#como-criamos-valor", className: `group mt-10 inline-flex items-center gap-2 rounded-full bg-hrz-green px-7 py-3.5 text-sm font-semibold text-white hover:bg-hrz-green-dark hover:shadow-[0_0_28px_rgba(0,125,88,0.35)] ${BTN_PRESS}`, children: [
          t("esg.hero.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-1" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "como-criamos-valor", className: "bg-slate-50 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-green", children: t("esg.valueChain.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-3xl leading-tight tracking-tight text-foreground lg:text-4xl", children: t("esg.valueChain.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground", children: t("esg.valueChain.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#esg-pillars", className: "group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-hrz-green transition-colors hover:underline", children: [
          t("esg.valueChain.link"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-0.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, className: "flex flex-wrap items-start justify-center gap-4 lg:flex-nowrap lg:justify-end lg:gap-6", children: valueChainSteps.map((step, i) => {
        const StepIcon = VALUE_CHAIN_ICONS[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValueChainItem, { icon: StepIcon, label: step.label }) }),
          i < valueChainSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, strokeWidth: 1.5, "aria-hidden": true, className: "mt-3 hidden shrink-0 text-gray-300 lg:block" })
        ] }, step.label);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "esg-pillars", className: "bg-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.pillars.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mb-12 mt-4 text-3xl text-foreground lg:text-4xl", children: t("esg.pillars.heading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: pillarItems.map((pillar, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillarCard, { image: PILLAR_CARD_IMAGES[i], icon: PILLAR_CARD_ICONS[i], title: pillar.title, description: pillar.description, linkLabel: t("esg.pillars.link"), href: "#esg-inteligente" }) }, pillar.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "esg-inteligente", className: "bg-hrz-deep py-24 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid", children: t("esg.smartEsg.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-3xl leading-tight text-white lg:text-4xl", children: t("esg.smartEsg.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-slate-300", children: t("esg.smartEsg.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#esg-inteligente", className: `group mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/55 hover:bg-white/5 ${BTN_PRESS}`, children: [
          t("esg.smartEsg.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-1" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { fallbackDelay: 500, className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full lg:row-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-full min-h-[220px] items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:min-h-0 ${CARD_HOVER_DARK}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { size: 48, strokeWidth: 1.25, className: "text-hrz-green-vivid/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-slate-400", children: t("esg.smartEsg.dashboardAlt") })
        ] }) }) }),
        smartEsgCards.map((card, i) => {
          const CardIcon = SMART_ESG_CARD_ICONS[i];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartEsgCard, { icon: CardIcon, title: card.title, description: card.description }) }, card.title);
        })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-right-20 top-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.socialProjects.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 max-w-2xl text-3xl text-foreground lg:text-4xl", children: t("esg.socialProjects.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground", children: t("esg.socialProjects.description") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: `group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-6 py-3 text-sm font-semibold text-white hover:bg-hrz-green/90 ${BTN_PRESS}`, children: [
            t("esg.socialProjects.cta"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, className: "mt-12 grid gap-6 lg:grid-cols-3", children: socialProjects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProjectCard, { image: PROJECT_IMAGES[i], tag: project.tag, title: project.title, description: project.description, linkLabel: t("esg.socialProjects.link") }) }, project.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "esg-indicadores", className: "bg-slate-50 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid grid-cols-1 items-center gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.indicators.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-2xl text-foreground lg:text-3xl", children: t("esg.indicators.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#esg-indicadores", className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline", children: [
          t("esg.indicators.link"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, strokeWidth: 1.75 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, className: "grid w-full min-w-0 grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-9 xl:grid-cols-6", children: indicators.map((indicator, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IndicatorCard, { icon: INDICATOR_ICONS[i], category: indicator.category, value: indicator.value, label: indicator.label }) }, `${indicator.category}-${indicator.value}`)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hrz-deep text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { fallbackDelay: 500, className: "grid grid-cols-1 border-t border-white/10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col justify-center overflow-hidden border-b border-white/10 p-12 md:border-b-0 md:border-r lg:p-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_50%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-8 top-1/2 h-px w-32 -translate-y-1/2 bg-gradient-to-r from-transparent to-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid", children: t("esg.engagement.opportunities.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "relative font-display mt-4 text-2xl text-white lg:text-3xl", children: t("esg.engagement.opportunities.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-base leading-relaxed text-slate-400", children: t("esg.engagement.opportunities.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: `group relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-7 py-3.5 text-sm font-semibold text-white hover:bg-hrz-green-dark ${BTN_PRESS}`, children: [
          t("esg.engagement.opportunities.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-1" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col justify-center overflow-hidden p-12 lg:p-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-[linear-gradient(225deg,rgba(255,255,255,0.03)_0%,transparent_55%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid", children: t("esg.engagement.innovation.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "relative font-display mt-4 text-2xl text-white lg:text-3xl", children: t("esg.engagement.innovation.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-base leading-relaxed text-slate-400", children: t("esg.engagement.innovation.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: `group relative mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/55 hover:bg-white/5 ${BTN_PRESS}`, children: [
          t("esg.engagement.innovation.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-1" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid py-24 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.08, className: "-right-24 top-10 h-[500px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-white/80", children: t("esg.values.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-white/85", children: t("esg.values.tagline") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, className: "mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4", children: valueItems.map((v, i) => {
          const ValueIcon = VALUE_ICONS[i];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "group relative h-full border-l border-white/20 pl-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-white transition group-hover:scale-110 group-hover:border-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValueIcon, { size: 26, strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-base font-extrabold uppercase tracking-wider text-white", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/85", children: v.text })
          ] }, v.title);
        }) })
      ] })
    ] })
  ] });
}
function SocialProjectCard({
  image,
  tag,
  title,
  description,
  linkLabel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: title, loading: "lazy", className: "h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-grow flex-col p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-3 w-fit rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600", children: tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-3 flex-grow text-sm text-muted-foreground", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-hrz-green hover:underline", children: [
        linkLabel,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-0.5" })
      ] })
    ] })
  ] });
}
function IndicatorCard({
  icon: Icon,
  category,
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group flex h-full min-w-0 w-full flex-1 flex-col items-start justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:p-5 ${CARD_HOVER}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, strokeWidth: 1.5, className: "text-hrz-green" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-500 lg:text-[10px]", children: category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 break-words text-2xl font-semibold tracking-tight text-hrz-green lg:text-3xl", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-normal leading-snug text-slate-600", children: label })
  ] });
}
function PillarCard({
  image,
  icon: Icon,
  title,
  description,
  linkLabel,
  href
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", loading: "lazy", className: "h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-hrz-green text-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.75 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-3 text-sm text-muted-foreground", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: "group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-hrz-green hover:underline", children: [
        linkLabel,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, strokeWidth: 1.75, className: "transition-transform duration-300 group-hover:translate-x-0.5" })
      ] })
    ] })
  ] });
}
function SmartEsgCard({
  icon: Icon,
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group h-full rounded-xl border border-white/10 bg-white/5 p-5 ${CARD_HOVER_DARK}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.5, className: "text-hrz-green-vivid" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-sm font-bold text-white", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-slate-400", children: description })
  ] });
}
function ValueChainItem({
  icon: Icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex w-[88px] flex-col items-center gap-2.5 sm:w-[100px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-hrz-green group-hover:text-hrz-green", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[100px] text-center text-[10px] font-semibold leading-tight text-gray-700 md:text-xs", children: label })
  ] });
}
export {
  EsgPage as component
};
