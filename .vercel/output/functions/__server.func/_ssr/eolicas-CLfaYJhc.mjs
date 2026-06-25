import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./raio-solid-gradient-jqq88Ct5.mjs";
import { P as PageHero } from "./PageHero-DKp3YVBf.mjs";
import { R as Reveal, P as Parallax, S as Stagger, a as StaggerItem, H as HoverLift } from "./router-BEOl7Dc4.mjs";
import { r as raioBrand } from "./raio-hrz-CLnU4K00.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { W as Wind, A as Activity, G as Gauge, m as Sun, L as Leaf, S as ShieldCheck, j as Sprout, U as Users, M as MapPin, b as ArrowRight } from "../_libs/lucide-react.mjs";
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
const babiloniaDayImg = "/assets/babilonia-aerial-day-CCnjO83b.jpg";
const url$2 = "/__l5e/assets-v1/7ea6fbda-7406-4da0-8367-77734fec6c5d/babilonia-aerial-row.jpg";
const aerialRow = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/ebcaba64-d048-4da0-9d68-a8d47461ae4b/babilonia-aerial-dusk.jpg";
const aerialDusk = {
  url: url$1
};
const url = "/__l5e/assets-v1/2c0aad2c-f137-4f6a-b5ed-24ed6356d39e/babilonia-aerial-sunset.jpg";
const aerialSunset = {
  url
};
const KPIS_ICONS = [Wind, Activity, Gauge, Sun, Leaf, ShieldCheck];
const PILARES_ICONS = [Leaf, Sprout, Users, ShieldCheck];
const COMPLEX_IMAGES = [aerialRow.url, aerialDusk.url, aerialSunset.url];
function EolicasPage() {
  const {
    t
  } = useTranslation();
  const kpisData = t("segments.wind.kpisItems", {
    returnObjects: true
  });
  const KPIS = kpisData.map((item, i) => ({
    ...item,
    icon: KPIS_ICONS[i]
  }));
  const complexesData = t("segments.wind.complexesItems", {
    returnObjects: true
  });
  const COMPLEXOS = complexesData.map((item, i) => ({
    ...item,
    img: COMPLEX_IMAGES[i]
  }));
  const pilaresData = t("segments.wind.pilaresItems", {
    returnObjects: true
  });
  const PILARES = pilaresData.map((item, i) => ({
    ...item,
    icon: PILARES_ICONS[i]
  }));
  const REGIOES = t("segments.wind.regioes", {
    returnObjects: true
  });
  const [active, setActive] = reactExports.useState(COMPLEXOS[0]?.id ?? "morro");
  const sel = COMPLEXOS.find((c) => c.id === active) ?? COMPLEXOS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("segments.wind.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("segments.wind.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("segments.wind.hero.titleLine2") })
    ] }), subtitle: t("segments.wind.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-secondary py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-green", children: t("segments.wind.overview.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: [
          t("segments.wind.overview.heading1"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          t("segments.wind.overview.heading2")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("segments.wind.overview.body1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("segments.wind.overview.body2") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: REGIOES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-hrz-green/40 bg-hrz-green/10 px-3 py-1 text-xs font-semibold text-hrz-green-dark", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
          " ",
          r
        ] }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Parallax, { offset: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 1.04
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "overflow-hidden rounded-3xl shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: babiloniaDayImg, alt: t("segments.wind.overview.imgAlt"), className: "h-[460px] w-full object-cover object-center" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid py-24 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: raioBrand, alt: "", "aria-hidden": true, initial: {
        opacity: 0
      }, whileInView: {
        opacity: 0.08
      }, transition: {
        duration: 1.2
      }, viewport: {
        once: true
      }, className: "pointer-events-none absolute -right-12 -bottom-10 h-[480px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-white/80", children: t("segments.wind.kpis.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-4xl sm:text-5xl", children: t("segments.wind.kpis.heading") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: KPIS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-4xl font-light tracking-tight text-white", children: k.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-wider text-white/80", children: k.label })
        ] }) }, k.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-green", children: t("segments.wind.complexes.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("segments.wind.complexes.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base text-muted-foreground", children: t("segments.wind.complexes.hint") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: COMPLEXOS.map((c) => {
          const isOn = c.id === active;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActive(c.id), className: `group rounded-2xl border p-5 text-left transition ${isOn ? "border-hrz-green bg-hrz-green-dark text-white shadow-lg" : "border-border bg-card text-foreground hover:border-hrz-green"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", children: c.nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: isOn ? "text-white" : "text-muted-foreground" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `mt-1 text-xs uppercase tracking-wider ${isOn ? "text-white/80" : "text-muted-foreground"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11, className: "mr-1 inline" }),
              c.municipio
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sel.img, alt: sel.nome, className: "h-full w-full object-cover object-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-hrz-green-dark/95 via-hrz-green-dark/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-7 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-white/90", children: sel.municipio }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-2 text-3xl font-bold", children: sel.nome })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: sel.descricao }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: sel.destaques.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-2 w-2 flex-none rounded-full bg-hrz-green" }),
              d
            ] }, d)) })
          ] })
        ] }, sel.id)
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-green", children: t("segments.wind.esg.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("segments.wind.esg.heading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 sm:grid-cols-2", children: PILARES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverLift, { className: "group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid p-8 shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { size: 22, strokeWidth: 1.75 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-6 font-display text-xl font-bold tracking-tight text-white", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm leading-relaxed text-white/85", children: p.text })
      ] }) }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hrz-deep py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold", children: t("segments.wind.cta.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/75", children: t("segments.wind.cta.body") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.eolicasbabilonia.com.br/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-hrz-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-hrz-green-dark", children: [
          t("segments.wind.cta.siteLink"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-hrz-green hover:text-hrz-green", children: t("segments.wind.cta.contactLink") })
      ] })
    ] }) })
  ] });
}
export {
  EolicasPage as component
};
