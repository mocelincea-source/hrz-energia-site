import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as ScrollProgressBar, h as PageTransition, e as easeOut, c as HERO_DURATION, d as HERO_BASE, l as logoWhite, f as HERO_STAGGER } from "./router-CsoREqJW.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { c as ChevronDown, X, d as Menu, e as Linkedin, f as Languages } from "../_libs/lucide-react.mjs";
const logoBlue = "/assets/logo-hrz-blue-hitU_Nub.png";
function LanguageToggle({ variant = "light" }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "pt";
  const isDark = variant === "dark";
  function toggle() {
    i18n.changeLanguage(lang === "pt" ? "en" : "pt");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-label": t("language.label"),
      title: t("language.switchTo"),
      className: "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition " + (isDark ? "border-white/25 text-white/85 hover:border-hrz-electric hover:text-hrz-electric" : "border-foreground/20 text-foreground/75 hover:border-hrz-electric hover:text-hrz-electric"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { size: 14 }),
        t("language.switchTo")
      ]
    }
  );
}
let _headerHasRendered = false;
const LOGO_REVEAL_DELAY = HERO_BASE;
const NAV_STAGGER_START = HERO_BASE + 0.25;
const NAV = [
  { to: "/", labelKey: "nav.home" },
  { to: "/sobre", labelKey: "nav.about" },
  {
    to: "/empresas",
    labelKey: "nav.segments",
    children: [
      { to: "/transmissoras", labelKey: "nav.transmission" },
      { to: "/eolicas", labelKey: "nav.wind" }
    ]
  },
  { to: "/esg", labelKey: "nav.esg" },
  { to: "/etica", labelKey: "nav.ethics" },
  { to: "/investidores", labelKey: "nav.investors" },
  { to: "/portfolio", labelKey: "nav.portfolio" },
  { to: "/contato", labelKey: "nav.contact" }
];
const navListVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: NAV_STAGGER_START,
      staggerChildren: HERO_STAGGER
    }
  }
};
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: HERO_DURATION, ease: easeOut } }
};
function Header({ variant = "light" }) {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const { location } = useRouterState();
  const { t } = useTranslation();
  const isDark = variant === "dark";
  const isPageLoad = reactExports.useRef(!_headerHasRendered);
  reactExports.useEffect(() => {
    _headerHasRendered = true;
  }, []);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const base = "sticky top-0 z-40 transition-all duration-300";
  const lightChrome = scrolled ? "border-b border-border/60 bg-background/75 text-foreground backdrop-blur-xl shadow-sm" : "border-b border-transparent bg-background/85 text-foreground backdrop-blur";
  const darkChrome = scrolled ? "border-b border-white/10 bg-hrz-deep/60 text-white backdrop-blur-xl shadow-lg" : "border-b border-transparent bg-transparent text-white";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      className: `${base} ${isDark ? darkChrome : lightChrome}`,
      initial: isPageLoad.current ? { opacity: 0, y: -20 } : false,
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: isPageLoad.current ? LOGO_REVEAL_DELAY : 0,
        duration: HERO_DURATION,
        ease: easeOut
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz flex h-20 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", "aria-label": "HRZ energia início", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: isDark ? logoWhite : logoBlue,
              alt: "HRZ energia",
              width: 160,
              height: 48,
              className: "h-9 w-auto"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex", "aria-label": "Navegação principal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.ul,
            {
              className: "m-0 flex list-none items-center gap-8 p-0",
              variants: navListVariants,
              initial: isPageLoad.current ? "hidden" : false,
              animate: "show",
              children: [
                NAV.map((item) => {
                  const active = location.pathname === item.to || item.children?.some((c) => location.pathname === c.to);
                  const linkClass = "text-sm font-medium transition-colors " + (active ? "text-hrz-electric" : isDark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground");
                  if (item.children) {
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { variants: navItemVariants, className: "group relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: item.to,
                          className: `${linkClass} inline-flex items-center gap-1`,
                          children: [
                            t(item.labelKey),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ChevronDown,
                              {
                                size: 14,
                                className: "transition-transform group-hover:rotate-180"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-hover:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[200px] overflow-hidden rounded-xl border border-border/60 bg-background shadow-xl ring-1 ring-black/5", children: item.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: c.to,
                          className: "block px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-hrz-electric",
                          children: t(c.labelKey)
                        },
                        c.to
                      )) }) })
                    ] }, item.to);
                  }
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.li, { variants: navItemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.to, className: linkClass, children: t(item.labelKey) }) }, item.to);
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.li, { variants: navItemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggle, { variant: isDark ? "dark" : "light" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.li, { variants: navItemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contato",
                    className: "ml-2 inline-flex items-center justify-center rounded-full bg-hrz-electric px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]",
                    children: t("nav.cta")
                  }
                ) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggle, { variant: isDark ? "dark" : "light" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Abrir menu",
                onClick: () => setOpen((v) => !v),
                className: "inline-flex h-10 w-10 items-center justify-center rounded-md " + (isDark ? "text-white" : "text-foreground"),
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 bg-background text-foreground lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-hrz flex flex-col gap-1 py-4", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              onClick: () => setOpen(false),
              className: "rounded-md px-2 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary",
              children: t(item.labelKey)
            }
          ),
          item.children?.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: c.to,
              onClick: () => setOpen(false),
              className: "rounded-md px-5 py-2 text-sm text-foreground/70 hover:bg-secondary",
              children: [
                "— ",
                t(c.labelKey)
              ]
            },
            c.to
          ))
        ] }, item.to)) }) })
      ]
    }
  );
}
const raio = "/assets/raio-hrz-outline-oEVWyO4a.png";
function Footer() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden bg-hrz-deep-radial text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: raio,
        alt: "",
        "aria-hidden": true,
        className: "pointer-events-none absolute -right-24 -bottom-24 h-[520px] w-auto opacity-[0.07]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: t("footer.logoAlt"), className: "h-10 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-sm leading-relaxed text-white/70", children: t("footer.tagline") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.linkedin.com/company/hrz-energia/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": t("footer.linkedinLabel"),
            className: "mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:border-hrz-electric hover:text-hrz-electric",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 14 }),
              " LinkedIn"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterCol, { title: t("footer.companyCol.title"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/sobre", children: t("footer.companyCol.about") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/empresas", children: t("footer.companyCol.segments") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/transmissoras", children: t("footer.companyCol.transmission") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/eolicas", children: t("footer.companyCol.wind") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/esg", children: t("footer.companyCol.esg") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/etica", children: t("footer.companyCol.ethics") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterCol, { title: t("footer.investorsCol.title"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/investidores", children: t("footer.investorsCol.overview") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/investidores", children: t("footer.investorsCol.performance") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { to: "/investidores", children: t("footer.investorsCol.governance") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterCol, { title: t("footer.contactCol.title"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70", children: t("footer.contactCol.location") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:contato@hrzenergia.com.br",
            className: "text-sm text-white/85 transition hover:text-hrz-electric",
            children: t("footer.contactCol.email")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contato",
            className: "mt-2 inline-flex w-fit items-center justify-center rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-hrz-electric hover:text-hrz-electric",
            children: t("footer.contactCol.cta")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("footer.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("footer.controlled") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.linkedin.com/company/hrz-energia/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": t("footer.linkedinLabel"),
            className: "text-white/70 transition hover:text-hrz-electric",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 })
          }
        )
      ] })
    ] }) })
  ] });
}
function FooterCol({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "eyebrow text-hrz-electric", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-col gap-2", children })
  ] });
}
function FooterLink({ to, children }) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-sm text-white/75 transition hover:text-hrz-electric", children })
  );
}
function SiteShell({
  children,
  headerVariant = "light"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgressBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { variant: headerVariant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: headerVariant === "dark" ? "-mt-20" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const raioSolid = "/assets/raio-hrz-BC8FIBTA.png";
export {
  SiteShell as S,
  raioSolid as a,
  raio as r
};
