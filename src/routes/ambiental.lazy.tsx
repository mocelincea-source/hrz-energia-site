import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf,
  CloudRain,
  Sprout,
  ClipboardList,
  ShieldCheck,
  TreePine,
  CheckCircle2,
  ChevronRight,
  Database,
  LayoutDashboard,
  FileCheck,
  Map,
  Linkedin,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import raio from "@/assets/raio-hrz-outline.png";
import raioSolid from "@/assets/raio-solid-gradient.png";
import logoWhite from "@/assets/logo-hrz-white.png";
import meioAmbienteImg from "@/assets/Meio-Ambiente.jpg";
import droneImg1 from "@/assets/Imagen-drone-1.jpeg";
import droneImg2 from "@/assets/Imagen-drone-2.jpeg";
import droneImg3 from "@/assets/Imagen-drone-3.jpeg";
import droneImg4 from "@/assets/Imagen-drone-4.jpeg";

export const Route = createLazyFileRoute("/ambiental")({
  component: AmbientalPage,
});

const COMPROMISSOS_ICONS = [ShieldCheck, TreePine, CloudRain, Leaf];

const FRENTES_META = [
  { image: droneImg1, icon: CloudRain },
  { image: droneImg2, icon: Sprout },
  { image: droneImg3, icon: Leaf },
  { image: droneImg4, icon: ClipboardList },
];

const TECNOLOGIAS_ICONS = [CloudRain, Database, LayoutDashboard, FileCheck, Map];

function AmbientalPage() {
  const { t } = useTranslation();

  const frentesItems = t("ambiental.frentes.items", {
    returnObjects: true,
  }) as Array<{ title: string; description: string; items: string[] }>;

  const tecnologiasItems = t("ambiental.tecnologias.items", {
    returnObjects: true,
  }) as Array<{ line1: string; line2: string }>;

  return (
    <SiteShell headerVariant="dark">
      {/* ── Bloco 1: Hero Banner ────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-black -mt-20 pt-32 pb-20 lg:pt-44 lg:pb-28 text-white">
        <img
          src={meioAmbienteImg}
          alt={t("ambiental.hero.imgAlt")}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-emerald-950/60" />

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
              {t("ambiental.hero.breadcrumbParent")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-emerald-400 font-medium">
              {t("ambiental.hero.breadcrumbCurrent")}
            </span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display-mega text-5xl font-extrabold text-emerald-400 sm:text-6xl lg:text-7xl leading-none mb-6"
          >
            {t("ambiental.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl font-semibold text-white leading-snug max-w-2xl mb-5"
          >
            {t("ambiental.hero.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm leading-relaxed text-white/75 max-w-xl sm:text-base"
          >
            {t("ambiental.hero.description")}
          </motion.p>
        </div>
      </section>

      {/* ── Bloco 2: Nossos compromissos ambientais ───────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-emerald-800 mb-8">
              {t("ambiental.compromissos.heading")}
            </h2>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {COMPROMISSOS_ICONS.map((Icon, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow h-full border border-slate-100">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800 text-sm mb-1.5">
                      {t(`ambiental.compromissos.items.${idx}.title`)}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t(`ambiental.compromissos.items.${idx}.text`)}
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
            <h2 className="text-2xl font-bold text-emerald-800 mb-8">
              {t("ambiental.frentes.heading")}
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
                      <div className="absolute bottom-3 left-3 w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-emerald-800 mb-2 text-sm">
                        {t(`ambiental.frentes.items.${idx}.title`)}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-3">
                        {t(`ambiental.frentes.items.${idx}.description`)}
                      </p>

                      <ul className="space-y-1.5">
                        {(frente?.items ?? []).map((_, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2 text-xs text-slate-600"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            {t(`ambiental.frentes.items.${idx}.items.${itemIdx}`)}
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

      {/* ── Bloco 4: Banner inferior — Tecnologia e dados ─────────────── */}
      <section className="bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-8 rounded-xl border border-gray-200 bg-white px-8 py-7 shadow-sm">
              <div className="flex-shrink-0 lg:w-56 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
                <h2 className="text-base font-bold text-emerald-800 leading-snug mb-3">
                  {t("ambiental.tecnologias.heading")}
                </h2>
                <p className="text-xs leading-relaxed text-slate-500">
                  {t("ambiental.tecnologias.description")}
                </p>
              </div>

              <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between px-4 gap-y-5">
                {TECNOLOGIAS_ICONS.map((Icon, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex flex-row items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-emerald-700" />
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
