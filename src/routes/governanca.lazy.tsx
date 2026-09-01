import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  AlertTriangle,
  Scale,
  Eye,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Building2,
  Users,
  Briefcase,
  Layers,
  FileText,
  Lock,
  UserCheck,
  Clock,
  ExternalLink,
  Linkedin,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import raio from "@/assets/raio-hrz-outline.png";
import raioSolid from "@/assets/raio-solid-gradient.png";
import logoWhite from "@/assets/logo-hrz-white.png";
import governancaImg from "@/assets/Governança.jpg";

export const Route = createLazyFileRoute("/governanca")({
  component: GovernancaPage,
});

const COMPROMISSOS_ICONS = [ShieldCheck, AlertTriangle, Scale, Eye, BarChart3, TrendingUp];

const PILARES_ICONS = [Scale, AlertTriangle, ShieldCheck, Building2, BarChart3];

const ESTRUTURA_ICONS = [Building2, Users, Briefcase, Layers];

const DOCUMENTOS_ICONS = [FileText, FileText, FileText, FileText, FileText];

const CANAL_ICONS = [Lock, UserCheck, ShieldCheck, Clock];

function GovernancaPage() {
  const { t } = useTranslation();

  const pilaresItems = t("governanca.pilares.items", {
    returnObjects: true,
  }) as Array<{ title: string; subtitle: string; items: string[] }>;

  const documentosItems = t("governanca.documentos.items", {
    returnObjects: true,
  }) as Array<{ title: string }>;

  const canalFeatures = t("governanca.canal.features", {
    returnObjects: true,
  }) as Array<{ title: string; subtitle: string }>;

  return (
    <SiteShell headerVariant="dark">
      {/* ── Bloco 1: Hero Banner ────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-black -mt-20 pt-32 pb-20 lg:pt-44 lg:pb-28 text-white">
        <img
          src={governancaImg}
          alt={t("governanca.hero.imgAlt")}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/92 via-slate-900/78 to-blue-950/65" />

        <motion.img
          src={raio}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 1.1, rotate: -4 }}
          animate={{ opacity: 0.07, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-28 -top-10 z-20 hidden h-[135%] w-auto md:block"
        />
        <img
          src={raioSolid}
          alt=""
          aria-hidden
          style={{ opacity: 0.10 }}
          className="pointer-events-none absolute -left-12 bottom-[-60px] z-20 hidden h-[62%] w-auto md:block"
        />

        <div className="container-hrz relative z-30">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
          >
            <Link to="/esg" className="hover:text-white transition-colors">
              {t("governanca.hero.breadcrumbParent")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-blue-400 font-medium">
              {t("governanca.hero.breadcrumbCurrent")}
            </span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display-mega text-5xl font-extrabold text-blue-400 sm:text-6xl lg:text-7xl leading-none mb-6"
          >
            {t("governanca.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl font-semibold text-white leading-snug max-w-2xl mb-5"
          >
            {t("governanca.hero.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm leading-relaxed text-white/75 max-w-xl sm:text-base"
          >
            {t("governanca.hero.description")}
          </motion.p>
        </div>
      </section>

      {/* ── Bloco 2: Nossos compromissos de governança ──────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              {t("governanca.compromissos.heading")}
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPROMISSOS_ICONS.map((Icon, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow h-full border border-slate-100">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 text-sm mb-1.5">
                      {t(`governanca.compromissos.items.${idx}.title`)}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t(`governanca.compromissos.items.${idx}.text`)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Bloco 3: Nossos pilares de governança ──────────────────────── */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              {t("governanca.pilares.heading")}
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PILARES_ICONS.map((Icon, idx) => {
              const pilar = pilaresItems[idx];
              return (
                <StaggerItem key={idx}>
                  <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all p-5 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-800" />
                    </div>

                    <h3 className="font-bold text-blue-900 text-sm mb-1.5 leading-snug">
                      {t(`governanca.pilares.items.${idx}.title`)}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {t(`governanca.pilares.items.${idx}.subtitle`)}
                    </p>

                    <ul className="space-y-1.5 mt-auto">
                      {(pilar?.items ?? []).map((_, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          {t(`governanca.pilares.items.${idx}.items.${itemIdx}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── Bloco 4: Estrutura e Documentos ─────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Lado Esquerdo — Estrutura de governança */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-6">
                  {t("governanca.estrutura.heading")}
                </h2>

                <div className="flex flex-col gap-3">
                  {ESTRUTURA_ICONS.map((Icon, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blue-800" />
                        </div>
                        {idx < ESTRUTURA_ICONS.length - 1 && (
                          <div className="w-px flex-1 min-h-[20px] bg-blue-200 my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="font-semibold text-blue-900 text-sm leading-snug">
                          {t(`governanca.estrutura.items.${idx}.title`)}
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                          {t(`governanca.estrutura.items.${idx}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lado Direito — Políticas e documentos */}
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  {t("governanca.documentos.heading")}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {t("governanca.documentos.description")}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                  {DOCUMENTOS_ICONS.map((Icon, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center text-center gap-2"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-700" />
                      </div>
                      <p className="text-xs font-medium text-slate-700 leading-snug whitespace-pre-line">
                        {documentosItems[idx]?.title}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/etica"
                  className="inline-flex items-center gap-1.5 text-blue-700 font-semibold text-sm hover:text-blue-900 transition-colors"
                >
                  {t("governanca.documentos.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Bloco 5: Canal de Denúncias ──────────────────────────────────── */}
      <section className="bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="rounded-2xl bg-blue-50 border border-blue-100 px-8 py-8 flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Lado esquerdo — título e descrição */}
              <div className="flex-shrink-0 lg:w-64 border-b lg:border-b-0 lg:border-r border-blue-200 pb-6 lg:pb-0 lg:pr-8">
                <h2 className="text-lg font-bold text-blue-900 mb-2">
                  {t("governanca.canal.heading")}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("governanca.canal.description")}
                </p>
              </div>

              {/* Meio — 4 mini-features */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {CANAL_ICONS.map((Icon, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                      <Icon className="w-4.5 h-4.5 text-blue-700" />
                    </div>
                    <p className="font-bold text-blue-900 text-sm leading-none">
                      {canalFeatures[idx]?.title}
                    </p>
                    <p className="text-slate-500 text-xs leading-snug whitespace-pre-line">
                      {canalFeatures[idx]?.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Lado direito — botão */}
              <div className="flex-shrink-0 text-center">
                <Link
                  to="/etica/canal-de-denuncias"
                  className="inline-flex flex-col items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl px-6 py-4 transition-colors shadow-md"
                >
                  <span className="flex items-center gap-1.5">
                    {t("governanca.canal.cta")}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-blue-300 text-xs font-normal mt-0.5">
                    {t("governanca.canal.ctaSub")}
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Barra de assinatura (pre-footer) ─────────────────────────── */}
      <section className="w-full bg-[#0a1b2f] py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={logoWhite} alt={t("footer.prefooter.logoAlt")} className="h-7 w-auto" />
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <p className="text-sm text-white/80">
              {t("footer.prefooter.tagline")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-white/90">
              {t("footer.prefooter.website")}
            </span>
            <a
              href="https://www.linkedin.com/company/hrz-energia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.prefooter.linkedinAriaLabel")}
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
