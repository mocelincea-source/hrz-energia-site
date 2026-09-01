import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Users,
  Building2,
  Handshake,
  CheckCircle2,
  ChevronRight,
  Shield,
  HeartHandshake,
  BookOpen,
  BarChart3,
  MessageSquare,
  LayoutDashboard,
  Users2,
  Linkedin,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import raio from "@/assets/raio-hrz-outline.png";
import raioSolid from "@/assets/raio-solid-gradient.png";
import logoWhite from "@/assets/logo-hrz-white.png";
import socialImg from "@/assets/Social.jpg";
import droneImg1 from "@/assets/Imagen-drone-1.jpeg";
import droneImg2 from "@/assets/Imagen-drone-2.jpeg";
import droneImg3 from "@/assets/Imagen-drone-3.jpeg";
import droneImg4 from "@/assets/Imagen-drone-4.jpeg";
import casaDeFarinhaImg from "@/assets/casa-da-farinha.png";

export const Route = createLazyFileRoute("/social")({
  component: SocialPage,
});

const COMPROMISSOS_ICONS = [ShieldCheck, Users, Building2, Handshake];

const FRENTES_META = [
  { image: droneImg1, icon: Shield },
  { image: droneImg2, icon: Users },
  { image: droneImg3, icon: Building2 },
  { image: droneImg4, icon: Handshake },
];

const PROGRAMAS_IMAGES = [casaDeFarinhaImg, droneImg1, droneImg2];

const TECNOLOGIAS_ICONS = [Shield, BarChart3, MessageSquare, LayoutDashboard, Users2];

function SocialPage() {
  const { t } = useTranslation();

  const frentesItems = t("social.frentes.items", {
    returnObjects: true,
  }) as Array<{ title: string; items: string[] }>;

  const programasItems = t("social.programas.items", {
    returnObjects: true,
  }) as Array<{ title: string; text: string }>;

  const tecnologiasItems = t("social.tecnologias.items", {
    returnObjects: true,
  }) as Array<{ line1: string; line2: string }>;

  return (
    <SiteShell headerVariant="dark">
      {/* ── Bloco 1: Hero Banner ────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-black -mt-20 pt-32 pb-20 lg:pt-44 lg:pb-28 text-white">
        <img
          src={socialImg}
          alt={t("social.hero.imgAlt")}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-blue-950/60" />

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
              {t("social.hero.breadcrumbParent")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-blue-400 font-medium">
              {t("social.hero.breadcrumbCurrent")}
            </span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display-mega text-5xl font-extrabold text-blue-400 sm:text-6xl lg:text-7xl leading-none mb-6"
          >
            {t("social.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl font-semibold text-white leading-snug max-w-2xl mb-5"
          >
            {t("social.hero.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm leading-relaxed text-white/75 max-w-xl sm:text-base"
          >
            {t("social.hero.description")}
          </motion.p>
        </div>
      </section>

      {/* ── Bloco 2: Nossos compromissos sociais ─────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-blue-800 mb-8">
              {t("social.compromissos.heading")}
            </h2>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {COMPROMISSOS_ICONS.map((Icon, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow h-full border border-slate-100">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800 text-sm mb-1.5">
                      {t(`social.compromissos.items.${idx}.title`)}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t(`social.compromissos.items.${idx}.text`)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Bloco 3: Frentes de atuação ──────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-blue-800 mb-8">
              {t("social.frentes.heading")}
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRENTES_META.map(({ image, icon: Icon }, idx) => {
              const frente = frentesItems[idx];
              return (
                <StaggerItem key={idx}>
                  <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full group">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={image}
                        alt={frente?.title ?? ""}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-blue-800 mb-3 text-sm">
                        {t(`social.frentes.items.${idx}.title`)}
                      </h3>

                      <ul className="space-y-1.5">
                        {(frente?.items ?? []).map((_, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2 text-xs text-slate-600"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                            {t(`social.frentes.items.${idx}.items.${itemIdx}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── Bloco 4: Programas e projetos sociais ────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                  {t("social.programas.heading")}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t("social.programas.description")}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {PROGRAMAS_IMAGES.map((image, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-4 p-4 items-start"
                  >
                    <img
                      src={image}
                      alt={programasItems[idx]?.title ?? ""}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1.5">
                      <p className="font-semibold text-blue-800 text-sm">
                        {t(`social.programas.items.${idx}.title`)}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {t(`social.programas.items.${idx}.text`)}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Card especial — Outras iniciativas */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-4 p-4 items-start">
                  <div className="w-20 h-20 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="font-semibold text-blue-800 text-sm">
                      {t("social.programas.outros.title")}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {t("social.programas.outros.text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Bloco 5: Banner inferior — Tecnologia e dados ─────────────── */}
      <section className="bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-8 rounded-xl border border-gray-200 bg-white px-8 py-7 shadow-sm">
              <div className="flex-shrink-0 lg:w-56 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
                <h2 className="text-base font-bold text-blue-800 leading-snug mb-3">
                  {t("social.tecnologias.heading")}
                </h2>
                <p className="text-xs leading-relaxed text-slate-500">
                  {t("social.tecnologias.description")}
                </p>
              </div>

              <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between px-4 gap-y-5">
                {TECNOLOGIAS_ICONS.map((Icon, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex flex-row items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 leading-snug">
                        {tecnologiasItems[idx]?.line1} <br /> {tecnologiasItems[idx]?.line2}
                      </span>
                    </div>
                    {idx < TECNOLOGIAS_ICONS.length - 1 && (
                      <div className="hidden lg:block w-px h-10 bg-gray-200 mx-5 flex-shrink-0" />
                    )}
                  </div>
                ))}
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
