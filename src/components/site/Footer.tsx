import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import footerBg from "@/assets/nuvens-footer.jpg";

const NAV_LINKS = [
  { to: "/", labelKey: "nav.home" },
  { to: "/sobre", labelKey: "nav.about" },
  { to: "/empresas", labelKey: "nav.segments" },
  { to: "/esg", labelKey: "nav.esg" },
  { to: "/etica", labelKey: "nav.ethics" },
  { to: "/investidores", labelKey: "nav.investors" },
  { to: "/portfolio", labelKey: "nav.portfolio" },
  { to: "/contato", labelKey: "nav.contact" },
] as const;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden text-white">
      <img
        src={footerBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container-hrz relative py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Coluna 1 — CTA principal */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl leading-tight text-white lg:text-4xl">
              {t("footer.cta.title")}
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-300">{t("footer.cta.subtitle")}</p>
            <FooterCtaButton label={t("footer.cta.button")} />
          </div>

          {/* Coluna 2 — Sobre a HRZ */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white">{t("footer.brand.title")}</h3>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">{t("footer.brand.description")}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/hrz-energia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.linkedinLabel")}
                className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10"
              >
                <Linkedin size={16} strokeWidth={1.75} />
              </a>
              <a
                href="https://www.linkedin.com/company/hrz-energia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.socialLabel")}
                className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10"
              >
                <Share2 size={16} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Coluna 3 — Navegação */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white">{t("footer.navigation.title")}</h3>
            <nav className="mt-4 flex flex-col gap-3 text-xs text-slate-400">
              {NAV_LINKS.map((item) => (
                <FooterNavLink key={item.to} to={item.to}>
                  {t(item.labelKey)}
                </FooterNavLink>
              ))}
            </nav>
          </div>

          {/* Coluna 4 — Contato */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white">{t("footer.contact.title")}</h3>
            <div className="mt-4 flex flex-col gap-2 text-xs text-slate-400">
              <p>{t("footer.contact.location")}</p>
              <a
                href={`mailto:${t("footer.contact.email")}`}
                className="transition hover:text-white"
              >
                {t("footer.contact.email")}
              </a>
              <a href={`tel:${t("footer.contact.phone").replace(/\s/g, "")}`} className="transition hover:text-white">
                {t("footer.contact.phone")}
              </a>
            </div>
            <FooterCtaButton label={t("footer.contact.button")} className="mt-6" />
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-hrz flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p>{t("footer.controlled")}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCtaButton({ label, className = "mt-6" }: { label: string; className?: string }) {
  return (
    <Link
      to="/contato"
      className={`group inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 ${className}`}
    >
      {label}
      <ArrowRight
        size={16}
        strokeWidth={1.75}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

function FooterNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const { location } = useRouterState();
  const isActive = location.pathname === to;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link
      to={to as any}
      className={
        isActive
          ? "font-semibold text-hrz-electric transition-colors"
          : "text-white/70 transition-colors hover:text-white"
      }
    >
      {children}
    </Link>
  );
}
