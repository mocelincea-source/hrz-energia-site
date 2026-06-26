import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteShell } from "./raio-solid-gradient-e3zx332G.mjs";
import { P as PageHero } from "./PageHero-CYVsIgyU.mjs";
import { B as BoltDecor } from "./BoltDecor-BXAJvxLL.mjs";
import { S as Stagger, a as StaggerItem, R as Reveal } from "./router-CsoREqJW.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { b as ArrowRight, F as FileText } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
const mascoteFrente = "/assets/frente-D8kGn40X.png";
function InvestidoresPage() {
  const {
    t
  } = useTranslation();
  const kpis = t("investors.kpis", {
    returnObjects: true
  });
  const docs = t("investors.docs.items", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("investors.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("investors.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("investors.hero.titleLine2") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-24 top-10 h-[480px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-right-20 bottom-10 h-[420px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid gap-5 md:grid-cols-4", children: kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-light tracking-tight text-hrz-deep sm:text-4xl", children: k.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs uppercase tracking-wider text-muted-foreground", children: k.label })
      ] }, k.label)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-20 bottom-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mascoteFrente, alt: t("investors.docs.mascoteAlt"), className: "pointer-events-none absolute -top-10 right-0 hidden h-72 w-auto drop-shadow-xl xl:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("investors.docs.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("investors.docs.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground", children: t("investors.docs.body") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 lg:grid-cols-3", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocCard, { title: d.title, text: d.text }) }, d.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: "inline-flex items-center gap-2 rounded-full bg-hrz-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-hrz-mid", children: [
          t("investors.docs.requestCta"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] })
    ] })
  ] });
}
function DocCard({
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-electric group-hover:text-hrz-electric", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20, strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl font-light tracking-tight text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: text })
  ] });
}
export {
  InvestidoresPage as component
};
