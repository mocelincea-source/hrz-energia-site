import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoWhite from "@/assets/logo-hrz-white.png";
import raio from "@/assets/raio-hrz-outline.png";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden bg-hrz-deep-radial text-white">
      <img
        src={raio}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 h-[520px] w-auto opacity-[0.07]"
      />
      <div className="container-hrz relative grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <img src={logoWhite} alt={t("footer.logoAlt")} className="h-10 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            {t("footer.tagline")}
          </p>
          <a
            href="https://www.linkedin.com/company/hrz-energia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.linkedinLabel")}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:border-hrz-electric hover:text-hrz-electric"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>

        <FooterCol title={t("footer.companyCol.title")}>
          <FooterLink to="/sobre">{t("footer.companyCol.about")}</FooterLink>
          <FooterLink to="/empresas">{t("footer.companyCol.segments")}</FooterLink>
          <FooterLink to="/transmissoras">{t("footer.companyCol.transmission")}</FooterLink>
          <FooterLink to="/eolicas">{t("footer.companyCol.wind")}</FooterLink>
          <FooterLink to="/esg">{t("footer.companyCol.esg")}</FooterLink>
        </FooterCol>

        <FooterCol title={t("footer.investorsCol.title")}>
          <FooterLink to="/investidores">{t("footer.investorsCol.overview")}</FooterLink>
          <FooterLink to="/investidores">{t("footer.investorsCol.performance")}</FooterLink>
          <FooterLink to="/investidores">{t("footer.investorsCol.governance")}</FooterLink>
        </FooterCol>

        <FooterCol title={t("footer.contactCol.title")}>
          <p className="text-sm text-white/70">{t("footer.contactCol.location")}</p>
          <a
            href="mailto:contato@hrzenergia.com.br"
            className="text-sm text-white/85 transition hover:text-hrz-electric"
          >
            {t("footer.contactCol.email")}
          </a>
          <Link
            to="/contato"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-hrz-electric hover:text-hrz-electric"
          >
            {t("footer.contactCol.cta")}
          </Link>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-hrz flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-4">
            <p>{t("footer.controlled")}</p>
            <a
              href="https://www.linkedin.com/company/hrz-energia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.linkedinLabel")}
              className="text-white/70 transition hover:text-hrz-electric"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow text-hrz-electric">{title}</h4>
      <div className="mt-4 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} className="text-sm text-white/75 transition hover:text-hrz-electric">
      {children}
    </Link>
  );
}
