import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteShell } from "./raio-solid-gradient-C9Az49dd.mjs";
import { P as PageHero } from "./PageHero-Beoh-tZL.mjs";
import { B as BoltDecor } from "./BoltDecor-CQSogp3n.mjs";
import { R as Reveal, S as Stagger, a as StaggerItem } from "./router-BNNZhwE6.mjs";
import { e as eduardoImg } from "./eduardo-brito-DHlBaxqU.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { S as ShieldCheck, h as BookOpen, i as MessageSquareWarning, b as ArrowRight } from "../_libs/lucide-react.mjs";
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
function EticaPage() {
  const {
    t
  } = useTranslation();
  const DOCS_ICONS = [ShieldCheck, BookOpen, MessageSquareWarning];
  const docItems = t("about.docs.items", {
    returnObjects: true
  });
  const DOCS = docItems.map((item, i) => ({
    icon: DOCS_ICONS[i],
    title: item.title,
    text: item.text,
    href: "#"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("ethics.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("ethics.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("ethics.hero.titleLine2") })
    ] }), subtitle: t("ethics.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-right-24 top-10 h-[500px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-left-20 bottom-10 h-[440px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-hrz-deep-radial", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: eduardoImg, alt: t("about.ethics.ceoAlt"), className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-lg font-bold text-foreground", children: "Eduardo Brito" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-hrz-electric", children: "CEO · HRZ Energia" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.ethics.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-3xl text-foreground sm:text-4xl", children: t("about.ethics.quote") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5 text-base leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.ethics.body1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.ethics.body2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.ethics.body3") })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-20 top-10 h-[460px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.docs.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl", children: t("about.docs.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid gap-6 lg:grid-cols-3", children: DOCS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: d.href, className: "group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-hrz-electric hover:shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-hrz-deep text-white transition group-hover:bg-hrz-electric", children: /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-bold text-foreground", children: d.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground", children: d.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric", children: [
            t("about.docs.accessDoc"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] }) }, d.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-12 rounded-3xl bg-hrz-deep p-10 text-white lg:p-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("about.docs.important.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-white/85", children: t("about.docs.important.body") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-hrz-electric px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]", children: [
            t("about.docs.cta"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  EticaPage as component
};
