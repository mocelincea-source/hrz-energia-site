import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteShell } from "./raio-solid-gradient-DTZntqVI.mjs";
import { P as PageHero } from "./PageHero-VTDQ1two.mjs";
import { R as Reveal, F as Float, S as Stagger, a as StaggerItem } from "./router-D2eUFBWB.mjs";
import { B as BoltDecor } from "./BoltDecor-Dlsbq8t1.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { w as Mail, M as MapPin, e as Linkedin, x as Briefcase, y as CircleCheck, z as Upload, P as Phone, D as User } from "../_libs/lucide-react.mjs";
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
const mascoteOi = "/assets/oi-D5HF-CtN.png";
function ContatoPage() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { headerVariant: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: t("contact.hero.eyebrow"), title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("contact.hero.titleLine1"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-electric", children: t("contact.hero.titleLine2") })
    ] }), subtitle: t("contact.hero.subtitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-left-24 top-10 h-[500px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-right-20 bottom-10 h-[420px] w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-12 lg:grid-cols-[1.1fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "rounded-3xl border border-border bg-card p-8 lg:p-10", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("contact.form.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold text-foreground", children: t("contact.form.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.form.fieldName"), name: "name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.form.fieldCompany"), name: "company" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.form.fieldEmail"), name: "email", type: "email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "subject", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: t("contact.form.fieldSubject") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "subject", name: "subject", defaultValue: "", className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: t("contact.form.subjectPlaceholder") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "investidor", children: t("contact.form.subjectInvestor") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "imprensa", children: t("contact.form.subjectPress") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "parceiro", children: t("contact.form.subjectPartner") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "comunidade", children: t("contact.form.subjectCommunity") })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: t("contact.form.fieldMessage") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 inline-flex items-center justify-center rounded-full bg-hrz-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-hrz-mid", children: t("contact.form.submitBtn") })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: Mail, title: t("contact.cards.emailTitle"), text: t("contact.cards.emailValue") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: MapPin, title: t("contact.cards.locationTitle"), text: t("contact.cards.locationValue") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.linkedin.com/company/hrz-energia/", target: "_blank", rel: "noopener noreferrer", className: "group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-hrz-electric/40 hover:shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-y-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-deep to-hrz-electric text-white shadow-md ring-1 ring-hrz-electric/30 transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-hrz-electric", children: "LinkedIn" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base text-foreground", children: "linkedin.com/company/hrz-energia" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-hrz-deep p-8 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("contact.investorsBox.eyebrow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-relaxed text-white/85", children: t("contact.investorsBox.body") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { className: "flex justify-center pt-4", amplitude: 12, duration: 4.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mascoteOi, alt: t("contact.mascoteAlt"), className: "h-72 w-auto drop-shadow-xl" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiderancaSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrabalheConosco, {})
  ] });
}
const LEADERSHIP_CONTACTS = [{
  name: "Contato HRZ",
  role: "Canal Institucional",
  email: "contato@hrztransmissoras.com.br",
  phone: "+55 11 99922-3631"
}, {
  name: "Eduardo Brito",
  role: "CEO",
  email: "eduardo.brito@hrztransmissoras.com.br"
}, {
  name: "Fernando Oliveira",
  role: "CFO",
  email: "fernando.oliveira@hrztransmissoras.com.br"
}, {
  name: "Ítalo Augusto David",
  role: "COO",
  email: "italo.david@hrztransmissoras.com.br"
}, {
  name: "Tiago Cacozzi",
  role: "QHSE",
  email: "tiago.cacozzi@hrztransmissoras.com.br"
}, {
  name: "Juliana Scalzo",
  role: "CLO",
  email: "juliana.scalzo@hrztransmissoras.com.br"
}];
function LiderancaSection() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-right-20 top-10 h-[460px] w-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mx-auto max-w-xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("contact.leadership.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: t("contact.leadership.heading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: LEADERSHIP_CONTACTS.map((contact) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadershipContactCard, { contact }) }, contact.email)) })
    ] })
  ] });
}
function LeadershipContactCard({
  contact
}) {
  const AvatarIcon = contact.phone ? Phone : User;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-hrz-electric/40 hover:shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-y-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-deep to-hrz-electric text-white shadow-md ring-1 ring-hrz-electric/30 transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarIcon, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold leading-tight text-foreground", children: contact.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs font-semibold uppercase tracking-wider text-hrz-electric", children: contact.role })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
      contact.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${contact.phone.replace(/\s/g, "")}`, className: "flex min-w-0 items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "shrink-0 text-hrz-electric" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: contact.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${contact.email}`, className: "flex min-w-0 items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "shrink-0 text-hrz-electric" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: contact.email })
      ] })
    ] })
  ] });
}
function TrabalheConosco() {
  const {
    t
  } = useTranslation();
  const [fileName, setFileName] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const areas = t("contact.careers.areas", {
    returnObjects: true
  });
  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-secondary py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "outline", opacity: 0.05, className: "-right-20 top-10 h-[460px] w-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BoltDecor, { variant: "solid", opacity: 0.04, className: "-left-24 bottom-0 h-[420px] w-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("contact.careers.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-mega mt-3 text-4xl text-foreground sm:text-5xl", children: t("contact.careers.heading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground", children: t("contact.careers.body") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BenefitRow, { icon: Briefcase, title: t("contact.careers.benefit1Title"), text: t("contact.careers.benefit1Text") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BenefitRow, { icon: CircleCheck, title: t("contact.careers.benefit2Title"), text: t("contact.careers.benefit2Text") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center rounded-3xl border border-hrz-electric/40 bg-card p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-hrz-electric text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 26 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl font-bold text-foreground", children: t("contact.careers.successTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground", children: t("contact.careers.successBody") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          setSubmitted(false);
          setFileName("");
        }, className: "mt-6 inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition hover:border-hrz-electric hover:text-hrz-electric", children: t("contact.careers.successCta") })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "rounded-3xl border border-border bg-card p-8 lg:p-10", onSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-hrz-electric", children: t("contact.careers.formEyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl font-extrabold text-foreground", children: t("contact.careers.formHeading") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.careers.fieldFullName"), name: "career-name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.careers.fieldEmail"), name: "career-email", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.careers.fieldPhone"), name: "career-phone", type: "tel", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "career-area", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: t("contact.careers.fieldAreaLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "career-area", name: "career-area", defaultValue: "", required: true, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: t("contact.careers.fieldAreaPlaceholder") }),
              areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, children: a }, a))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "career-cv", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: t("contact.careers.fieldCvLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "career-cv", className: "mt-2 flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-dashed border-input bg-background px-4 py-4 text-sm text-muted-foreground transition hover:border-hrz-electric hover:text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 16 }),
                fileName || t("contact.careers.fieldCvPlaceholder")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-hrz-deep px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white", children: t("contact.careers.fieldCvAttach") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "career-cv", name: "career-cv", type: "file", required: true, accept: ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document", className: "sr-only", onChange: (e) => setFileName(e.target.files?.[0]?.name ?? "") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "career-message", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: t("contact.careers.fieldMessageLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "career-message", name: "career-message", rows: 4, maxLength: 1e3, placeholder: t("contact.careers.fieldMessagePlaceholder"), className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 inline-flex items-center justify-center rounded-full bg-hrz-electric px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-hrz-electric/90", children: t("contact.careers.submitBtn") })
        ] })
      ] }) })
    ] })
  ] });
}
function BenefitRow({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hrz-electric/10 text-hrz-electric", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: text })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-hrz-electric" })
  ] });
}
function ContactCard({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-hrz-electric/40 hover:shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-y-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-deep to-hrz-electric text-white shadow-md ring-1 ring-hrz-electric/30 transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-hrz-electric", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base text-foreground", children: text })
    ] })
  ] });
}
export {
  ContatoPage as component
};
