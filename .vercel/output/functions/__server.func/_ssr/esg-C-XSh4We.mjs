import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./raio-solid-gradient-DUOEdOlR.mjs";
import { B as BoltDecor } from "./BoltDecor-DQRfPKjw.mjs";
import { R as Reveal, S as Stagger, a as StaggerItem } from "./router-eIpJh2lG.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { b as ArrowRight, U as UtilityPole, k as Settings, S as ShieldCheck, l as CloudLightning, m as Users, n as Scale, o as TrendingUp, p as ChevronRight, L as Leaf, q as CloudRain, r as Sprout, s as ChartColumn, F as FileText, A as Activity, t as Clock, a as Award, u as Shield, H as Handshake, Z as Zap } from "../_libs/lucide-react.mjs";
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
const torreImg = "/assets/Torre-hGNK7SPj.jpg";
const droneImg = "/assets/drone-DU-WWLv5.jpg";
const infraImg = "/assets/infraestrutura-3OT6ApDu.jpg";
const comunidadeImg = "/assets/comunidade-DeXIO8k8.jpg";
const casaDaFarinhaImg = "/assets/casa-da-farinha-DbCczg_1.png";
const dashboardEsgImg = "/assets/DASHBOARD-BxhWYKJB.jpg";
const PROJECT_IMAGES = [infraImg, comunidadeImg, casaDaFarinhaImg];
const PILLAR_CARD_IMAGES = [meioAmbienteImg, socialImg, governancaImg, excelenciaOperacionalImg];
const PILLAR_CARD_ICONS = [Leaf, Users, Scale, Settings];
const VALUE_ICONS = [Users, ShieldCheck, Shield, Leaf, Handshake, Zap];
const VALUE_CHAIN_ICONS = [UtilityPole, Settings, ShieldCheck, CloudLightning, Users, Scale, TrendingUp];
const SMART_ESG_CARD_ICONS = [CloudRain, Sprout, ChartColumn, ShieldCheck, FileText, Activity];
const INDICATOR_ICONS = [Leaf, Clock, ShieldCheck, Users, Scale, Award];
const GPU_LAYER = "will-change-transform will-change-opacity";
const BTN_PRESS = `transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] ${GPU_LAYER}`;
const BTN_OUTLINE = `transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:bg-hrz-green/10 hover:shadow-lg ${GPU_LAYER}`;
const CARD_HOVER = `transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${GPU_LAYER}`;
const VIEWPORT_TRIGGER = "-100px";
const STAGGER_RHYTHM = 0.15;
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroEsgImg, alt: "", "aria-hidden": true, fetchPriority: "high", decoding: "sync", className: "absolute inset-0 h-full w-full object-cover object-right-bottom" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-r from-hrz-deep/90 via-hrz-deep/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative z-10 py-32 lg:py-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.hero.eyebrow") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display mt-5 max-w-4xl text-5xl leading-tight text-white lg:text-7xl", children: t("esg.hero.title") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-white/80", children: t("esg.hero.subtitle") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#como-criamos-valor", className: `group mt-10 inline-flex items-center gap-2 rounded-full bg-hrz-green px-7 py-3.5 text-sm font-semibold text-white hover:bg-hrz-green-dark hover:shadow-[0_0_28px_rgba(0,125,88,0.35)] ${BTN_PRESS}`, children: [
          t("esg.hero.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: `transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1` })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "como-criamos-valor", className: "bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-green", children: t("esg.valueChain.eyebrow") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl", children: t("esg.valueChain.title") }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-lg text-slate-600", children: t("esg.valueChain.description") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#esg-pillars", className: "group inline-flex items-center gap-1.5 text-sm font-medium text-hrz-green transition-colors hover:underline", children: [
            t("esg.valueChain.link"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, strokeWidth: 1.75, className: `transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-0.5` })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, className: "flex w-full flex-wrap items-start justify-center gap-y-10 lg:flex-nowrap lg:justify-between lg:gap-x-2", children: valueChainSteps.map((step, i) => {
        const StepIcon = VALUE_CHAIN_ICONS[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "flex min-w-[110px] flex-1 lg:min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValueChainItem, { icon: StepIcon, label: step.label }) }),
          i < valueChainSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "hidden flex-shrink-0 items-start justify-center px-1 pt-8 text-slate-300 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, strokeWidth: 1.5 }) })
        ] }, step.label);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "esg-pillars", className: "bg-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.pillars.eyebrow") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mb-12 mt-4 text-3xl text-foreground lg:text-4xl", children: t("esg.pillars.heading") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, staggerChildren: STAGGER_RHYTHM, className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: pillarItems.map((pillar, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillarCard, { image: PILLAR_CARD_IMAGES[i], icon: PILLAR_CARD_ICONS[i], title: pillar.title, description: pillar.description, linkLabel: t("esg.pillars.link"), href: "#esg-inteligente" }) }, pillar.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "esg-inteligente", className: "bg-hrz-deep py-24 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, staggerChildren: STAGGER_RHYTHM, className: "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "col-span-1 flex flex-col justify-center lg:col-span-3 lg:col-start-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid", children: t("esg.smartEsg.eyebrow") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-3xl leading-tight text-white lg:text-4xl", children: t("esg.smartEsg.title") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-slate-300", children: t("esg.smartEsg.description") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#esg-inteligente", className: `group ${BTN_OUTLINE} mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-hrz-green px-6 py-3 text-sm font-semibold text-hrz-green`, children: [
          t("esg.smartEsg.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: `transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1` })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "relative col-span-1 flex w-full items-center justify-center lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dashboardEsgImg, alt: t("esg.smartEsg.dashboardAlt"), loading: "lazy", decoding: "async", className: `h-auto max-h-[500px] w-full object-contain object-center drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out hover:scale-[1.02] ${GPU_LAYER}` }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "col-span-1 lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, staggerChildren: STAGGER_RHYTHM, className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: smartEsgCards.map((card, i) => {
        const CardIcon = SMART_ESG_CARD_ICONS[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartEsgCard, { icon: CardIcon, title: card.title, description: card.description }) }, card.title);
      }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-right-20 top-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.socialProjects.eyebrow") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 max-w-2xl text-3xl text-foreground lg:text-4xl", children: t("esg.socialProjects.heading") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground", children: t("esg.socialProjects.description") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: `group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-6 py-3 text-sm font-semibold text-white hover:bg-hrz-green/90 ${BTN_PRESS}`, children: [
          t("esg.socialProjects.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: `transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1` })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, staggerChildren: STAGGER_RHYTHM, className: "mt-12 grid gap-6 lg:grid-cols-3", children: socialProjects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProjectCard, { image: PROJECT_IMAGES[i], tag: project.tag, title: project.title, description: project.description, linkLabel: t("esg.socialProjects.link") }) }, project.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "esg-indicadores", className: "bg-slate-50 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid grid-cols-1 items-center gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green", children: t("esg.indicators.eyebrow") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-2xl text-foreground lg:text-3xl", children: t("esg.indicators.heading") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#esg-indicadores", className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline", children: [
          t("esg.indicators.link"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, strokeWidth: 1.75 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, className: "grid w-full min-w-0 grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-9 xl:grid-cols-6", children: indicators.map((indicator, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IndicatorCard, { icon: INDICATOR_ICONS[i], category: indicator.category, value: indicator.value, label: indicator.label }) }, `${indicator.category}-${indicator.value}`)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hrz-deep text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, className: "grid grid-cols-1 border-t border-white/10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full min-h-[320px] flex-col justify-center overflow-hidden border-b border-white/10 md:border-b-0 md:border-r lg:min-h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: torreImg, alt: "", "aria-hidden": true, loading: "lazy", decoding: "async", className: "absolute inset-0 h-full w-full object-cover object-center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-hrz-deep/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-12 lg:p-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid", children: t("esg.engagement.opportunities.eyebrow") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-2xl text-white lg:text-3xl", children: t("esg.engagement.opportunities.title") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-relaxed text-slate-400", children: t("esg.engagement.opportunities.description") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: `group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-7 py-3.5 text-sm font-semibold text-white hover:bg-hrz-green-dark ${BTN_PRESS}`, children: [
            t("esg.engagement.opportunities.cta"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: `transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1` })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full min-h-[320px] flex-col justify-center overflow-hidden lg:min-h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: droneImg, alt: "", "aria-hidden": true, loading: "lazy", decoding: "async", className: "absolute inset-0 h-full w-full object-cover object-center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-hrz-deep/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-12 lg:p-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid", children: t("esg.engagement.innovation.eyebrow") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-2xl text-white lg:text-3xl", children: t("esg.engagement.innovation.title") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-relaxed text-slate-400", children: t("esg.engagement.innovation.description") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: `group mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/55 ${BTN_OUTLINE}`, children: [
            t("esg.engagement.innovation.cta"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 1.75, className: `transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1` })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-[#0a472e] py-24 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { fallbackDelay: 500, viewportMargin: VIEWPORT_TRIGGER, className: "grid grid-cols-2 items-start gap-6 md:grid-cols-4 lg:grid-cols-8 lg:items-center lg:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "col-span-2 min-w-0 md:col-span-4 lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[10px] font-bold uppercase tracking-widest text-white/60", children: t("esg.values.eyebrow") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { viewportMargin: VIEWPORT_TRIGGER, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white lg:text-[32px]", children: [
          t("esg.values.taglineLine1"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden lg:block" }),
          t("esg.values.taglineLine2")
        ] }) })
      ] }) }),
      valueItems.map((v, i) => {
        const ValueIcon = VALUE_ICONS[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { className: "h-full min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValueItemCard, { icon: ValueIcon, title: v.title, text: v.text }) }, v.title);
      })
    ] }) }) })
  ] });
}
function ValueItemCard({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center lg:items-start lg:text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-white", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-white/80", children: text })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[170px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: title, loading: "lazy", decoding: "async", className: "h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02] will-change-transform will-change-opacity" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-grow flex-col p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-3 inline-block rounded bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500", children: tag }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group flex h-full min-w-0 w-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-3 shadow-sm lg:p-4 ${CARD_HOVER}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, strokeWidth: 1.5, className: "text-hrz-green" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-400", children: category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 mt-2 text-lg font-semibold leading-none tracking-tight text-hrz-green lg:text-xl xl:text-[22px]", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-auto text-[11px] leading-tight text-slate-500 lg:text-xs", children: label })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", loading: "lazy", decoding: "async", className: "h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] will-change-transform will-change-opacity" }) }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex h-full flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] lg:p-5 ${GPU_LAYER}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.5, className: "text-hrz-green" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-sm font-semibold leading-tight text-white lg:text-base", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-relaxed text-slate-400 lg:text-xs", children: description })
  ] });
}
function ValueChainItem({
  icon: Icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex max-w-[150px] flex-1 flex-col items-center text-center min-w-[110px] lg:min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-hrz-deep shadow-sm transition-transform duration-300 group-hover:-translate-y-1 lg:h-20 lg:w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 lg:h-7 lg:w-7", strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-tight text-slate-700 lg:text-sm", children: label })
  ] });
}
export {
  EsgPage as component
};
