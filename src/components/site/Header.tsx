import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import logoBlue from "@/assets/logo-hrz-blue.png";
import logoWhite from "@/assets/logo-hrz-white.png";
import { LanguageToggle } from "./LanguageToggle";
import { easeOut } from "./motion";

/**
 * Module-level flag — resets to false on every page load / F5 (JS re-evaluation),
 * but stays true across client-side navigations (no module re-evaluation).
 * This ensures the splash-coordinated animations only fire on hard load.
 */
let _headerHasRendered = false;

/** Seconds: matches the moment the SplashOverlay fires onDone and starts its exit fade. */
const LOGO_REVEAL_DELAY = 1.6;

/** Seconds: when the first nav link starts pinging in. */
const NAV_STAGGER_START = 1.8;

type NavItem = {
  to: string;
  labelKey: string;
  children?: { to: string; labelKey: string }[];
};

const NAV: NavItem[] = [
  { to: "/", labelKey: "nav.home" },
  { to: "/sobre", labelKey: "nav.about" },
  {
    to: "/empresas",
    labelKey: "nav.segments",
    children: [
      { to: "/transmissoras", labelKey: "nav.transmission" },
      { to: "/eolicas", labelKey: "nav.wind" },
    ],
  },
  { to: "/esg", labelKey: "nav.esg" },
  { to: "/etica", labelKey: "nav.ethics" },
  { to: "/investidores", labelKey: "nav.investors" },
  { to: "/contato", labelKey: "nav.contact" },
];

/** Stagger container: orchestrates the children sequence. */
const navListVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: NAV_STAGGER_START,
      staggerChildren: 0.1,
    },
  },
};

/** Each nav item drops in from slightly above with a fade. */
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const { t } = useTranslation();
  const isDark = variant === "dark";

  /**
   * Capture whether this is a fresh page-load mount before the flag flips.
   * useRef holds the value captured at this component's construction time,
   * so re-renders don't change the snapshot.
   */
  const isPageLoad = useRef(!_headerHasRendered);

  useEffect(() => {
    _headerHasRendered = true;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = "sticky top-0 z-40 transition-all duration-300";
  const lightChrome = scrolled
    ? "border-b border-border/60 bg-background/75 text-foreground backdrop-blur-xl shadow-sm"
    : "border-b border-transparent bg-background/85 text-foreground backdrop-blur";
  const darkChrome = scrolled
    ? "border-b border-white/10 bg-hrz-deep/60 text-white backdrop-blur-xl shadow-lg"
    : "border-b border-transparent bg-transparent text-white";

  return (
    <motion.header
      className={`${base} ${isDark ? darkChrome : lightChrome}`}
      initial={isPageLoad.current ? { opacity: 0, y: -20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: isPageLoad.current ? LOGO_REVEAL_DELAY : 0,
        duration: 0.65,
        ease: easeOut,
      }}
    >
      <div className="container-hrz flex h-20 items-center justify-between">
        {/* Logo — visibility carried by the header's own entry animation */}
        <Link to="/" className="flex items-center gap-2" aria-label="HRZ energia início">
          <img
            src={isDark ? logoWhite : logoBlue}
            alt="HRZ energia"
            width={160}
            height={48}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav — links "ping" in one by one after the header descends */}
        <nav className="hidden lg:flex" aria-label="Navegação principal">
          <motion.ul
            className="m-0 flex list-none items-center gap-8 p-0"
            variants={navListVariants}
            initial={isPageLoad.current ? "hidden" : false}
            animate="show"
          >
            {NAV.map((item) => {
              const active =
                location.pathname === item.to ||
                item.children?.some((c) => location.pathname === c.to);
              const linkClass =
                "text-sm font-medium transition-colors " +
                (active
                  ? "text-hrz-electric"
                  : isDark
                    ? "text-white/85 hover:text-white"
                    : "text-foreground/75 hover:text-foreground");

              if (item.children) {
                return (
                  <motion.li key={item.to} variants={navItemVariants} className="group relative">
                    <Link
                      to={item.to}
                      className={`${linkClass} inline-flex items-center gap-1`}
                    >
                      {t(item.labelKey)}
                      <ChevronDown
                        size={14}
                        className="transition-transform group-hover:rotate-180"
                      />
                    </Link>
                    <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-hover:block">
                      <div className="min-w-[200px] overflow-hidden rounded-xl border border-border/60 bg-background shadow-xl ring-1 ring-black/5">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-hrz-electric"
                          >
                            {t(c.labelKey)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.li>
                );
              }

              return (
                <motion.li key={item.to} variants={navItemVariants}>
                  <Link to={item.to} className={linkClass}>
                    {t(item.labelKey)}
                  </Link>
                </motion.li>
              );
            })}

            <motion.li variants={navItemVariants}>
              <LanguageToggle variant={isDark ? "dark" : "light"} />
            </motion.li>

            <motion.li variants={navItemVariants}>
              <Link
                to="/contato"
                className="ml-2 inline-flex items-center justify-center rounded-full bg-hrz-electric px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
              >
                {t("nav.cta")}
              </Link>
            </motion.li>
          </motion.ul>
        </nav>

        {/* Mobile toggle — visible when header descends */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle variant={isDark ? "dark" : "light"} />
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={
              "inline-flex h-10 w-10 items-center justify-center rounded-md " +
              (isDark ? "text-white" : "text-foreground")
            }
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background text-foreground lg:hidden">
          <div className="container-hrz flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <div key={item.to} className="flex flex-col">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary"
                >
                  {t(item.labelKey)}
                </Link>
                {item.children?.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-5 py-2 text-sm text-foreground/70 hover:bg-secondary"
                  >
                    — {t(c.labelKey)}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
