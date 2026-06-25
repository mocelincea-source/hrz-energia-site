import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./raio-solid-gradient-C9Az49dd.mjs";
import { P as PageHero } from "./PageHero-Beoh-tZL.mjs";
import { B as BoltDecor } from "./BoltDecor-CQSogp3n.mjs";
import { B as BrazilMapAnimated, s as substationImg } from "./substation-C3WfM9FQ.mjs";
import { R as Reveal, S as Stagger, a as StaggerItem, H as HoverLift, P as Parallax } from "./router-BNNZhwE6.mjs";
import { r as raioBrand } from "./raio-hrz-CLnU4K00.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { B as Building2, C as Cable, Z as Zap, G as Gauge, A as Activity, S as ShieldCheck, L as Leaf, a as Award, b as ArrowRight, M as MapPin } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
const KPIS_ICONS = [Building2, Cable, Zap, Gauge, Activity, ShieldCheck];
const DIFERENCIAIS_ICONS = [ShieldCheck, Activity, Leaf, Award];
function TransmissorasPage() {
  const {
    t
  } = useTranslation();
  const kpisData = t("segments.transmission.kpisItems", {
    returnObjects: true
  });
  const KPIS = kpisData.map((item, i) => ({
    ...item,
    icon: KPIS_ICONS[i]
  }));
  const CONCESSOES = t("segments.transmission.concessionsItems", {
    returnObjects: true
  });
  const differentialsData = t("segments.transmission.differentialsItems", {
    returnObjects: true
  });
  const DIFERENCIAIS = differentialsData.map((item, i) => ({
    ...item,
    icon: DIFERENCIAIS_ICONS[i]
  }));
  const TIMELINE = t("segments.transmission.timelineItems", {
    returnObjects: true
  });
  const [active, setActive] = reactExports.useState(CONCESSOES[0]?.id ?? "es");
  const sel = CONCESSOES.find((c) => c.id === active) ?? CONCESSOES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("segments.transmission.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("segments.transmission.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("segments.transmission.hero.titleLine2") })
    ] }), subtitle: t("segments.transmission.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 lg:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", rotate: 0, opacity: 0.05, className: "-left-16 top-8 h-[520px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-16 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.transmission.about.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: [
            t("segments.transmission.about.heading1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            t("segments.transmission.about.heading2")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("segments.transmission.about.body1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("segments.transmission.about.body2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("segments.transmission.about.body3") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hrz-deep py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.transmission.kpis.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-4xl sm:text-5xl", children: t("segments.transmission.kpis.heading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: KPIS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-hrz-electric", children: /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-4xl font-light tracking-tight text-hrz-electric", children: k.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-wider text-white/70", children: k.label })
      ] }) }, k.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", rotate: 0, opacity: 0.06, className: "left-6 bottom-10 h-[420px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[45%] top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: raioBrand, alt: "", "aria-hidden": true, initial: {
        opacity: 0,
        y: 28,
        scale: 0.96
      }, whileInView: {
        opacity: 0.14,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.transmission.footprint.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl", children: [
            t("segments.transmission.footprint.heading1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-hrz-electric font-normal", children: t("segments.transmission.footprint.heading2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground", children: t("segments.transmission.footprint.body") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { offset: 40, className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrazilMapAnimated, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.transmission.concessionsSection.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("segments.transmission.concessionsSection.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base text-muted-foreground", children: t("segments.transmission.concessionsSection.hint") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: CONCESSOES.map((c) => {
          const isOn = c.id === active;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActive(c.id), className: `group rounded-2xl border p-5 text-left transition ${isOn ? "border-hrz-electric bg-hrz-deep text-white shadow-lg" : "border-border bg-card text-foreground hover:border-hrz-electric"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", children: c.nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: isOn ? "text-hrz-electric" : "text-muted-foreground" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `mt-1 text-xs uppercase tracking-wider ${isOn ? "text-hrz-electric" : "text-muted-foreground"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11, className: "mr-1 inline" }),
              c.estado
            ] })
          ] }, c.id);
        }) }),
        sel && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 18
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1]
        }, className: "overflow-hidden rounded-3xl border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-56 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: substationImg, alt: sel.nome, className: "h-full w-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-deep/95 via-hrz-deep/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-7 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: sel.estado }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-2 text-3xl font-bold", children: sel.nome })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 p-7 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBlock, { label: t("segments.transmission.infoLabels.voltage"), value: sel.tensao, icon: Zap }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBlock, { label: t("segments.transmission.infoLabels.lines"), value: sel.linhas, icon: Cable }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBlock, { label: t("segments.transmission.infoLabels.ownSubstations"), value: sel.subestacoes, icon: Building2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBlock, { label: t("segments.transmission.infoLabels.accessedSubstations"), value: sel.acessadas, icon: Activity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBlock, { label: t("segments.transmission.infoLabels.acquisition"), value: sel.aquisicao, icon: Award })
          ] })
        ] }, sel.id)
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.transmission.differentials.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("segments.transmission.differentials.heading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 sm:grid-cols-2", children: DIFERENCIAIS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-hrz-electric/40 hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-x-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-electric/15 to-hrz-electric/5 text-hrz-electric ring-1 ring-hrz-electric/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-6 font-display text-xl font-bold tracking-tight text-foreground", children: d.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm leading-relaxed text-muted-foreground", children: d.text })
      ] }) }, d.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hrz-deep py-24 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("segments.transmission.timelineSection.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl sm:text-5xl", children: t("segments.transmission.timelineSection.heading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-14 grid gap-6 lg:grid-cols-3", children: TIMELINE.map((tl) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "h-full rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-5xl font-light text-hrz-electric", children: tl.ano }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold text-white", children: tl.titulo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/75", children: tl.texto })
      ] }) }, tl.ano)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold text-foreground", children: t("segments.transmission.cta.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: t("segments.transmission.cta.body") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/investidores", className: "inline-flex items-center gap-2 rounded-full bg-hrz-electric px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]", children: [
          t("segments.transmission.cta.investors"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-hrz-electric hover:text-hrz-electric", children: t("segments.transmission.cta.contact") })
      ] })
    ] }) })
  ] });
}
function InfoBlock({
  label,
  value,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 12 }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-base font-bold text-foreground", children: value })
  ] });
}
export {
  TransmissorasPage as component
};
