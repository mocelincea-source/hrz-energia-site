import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Leaf,
  Users,
  Scale,
  Sprout,
  Handshake,
  ShieldCheck,
  Shield,
  ArrowRight,
  ChevronRight,
  UtilityPole,
  Settings,
  CloudLightning,
  TrendingUp,
  Zap,
  CloudRain,
  BarChart3,
  FileText,
  Activity,
  Clock,
  Award,
  type LucideIcon,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { BoltDecor } from "@/components/site/BoltDecor";
import { Stagger, StaggerItem, Reveal } from "@/components/site/motion";
import i18n from "@/i18n/config";
import heroEsgImg from "@/assets/Header-ESG.jpeg";
import meioAmbienteImg from "@/assets/Meio-Ambiente.jpg";
import socialImg from "@/assets/Social.jpg";
import governancaImg from "@/assets/Governança.jpg";
import excelenciaOperacionalImg from "@/assets/Excelencia-Operacional.jpg";
import torreImg from "@/assets/Torre.jpg";
import droneImg from "@/assets/drone.jpg";
import infraImg from "@/assets/esg/infraestrutura.jpg";
import comunidadeImg from "@/assets/esg/comunidade.jpg";
import casaDaFarinhaImg from "@/assets/casa-da-farinha.png";
import dashboardEsgImg from "@/assets/DASHBOARD.jpg";

export const Route = createFileRoute("/esg")({
  head: () => ({
    meta: [
      { title: i18n.t("esg.meta.title") },
      { name: "description", content: i18n.t("esg.meta.description") },
      { property: "og:title", content: i18n.t("esg.meta.ogTitle") },
      { property: "og:description", content: i18n.t("esg.meta.ogDescription") },
    ],
  }),
  component: EsgPage,
});

const PROJECT_IMAGES = [infraImg, comunidadeImg, casaDaFarinhaImg];
const PILLAR_CARD_IMAGES = [
  meioAmbienteImg,
  socialImg,
  governancaImg,
  excelenciaOperacionalImg,
];
const PILLAR_CARD_ICONS: LucideIcon[] = [Leaf, Users, Scale, Settings];
const VALUE_ICONS: LucideIcon[] = [Users, ShieldCheck, Shield, Leaf, Handshake, Zap];

const VALUE_CHAIN_ICONS: LucideIcon[] = [
  UtilityPole,
  Settings,
  ShieldCheck,
  CloudLightning,
  Users,
  Scale,
  TrendingUp,
];

const SMART_ESG_CARD_ICONS: LucideIcon[] = [
  CloudRain,
  Sprout,
  BarChart3,
  ShieldCheck,
  FileText,
  Activity,
];

const INDICATOR_ICONS: LucideIcon[] = [Leaf, Clock, ShieldCheck, Users, Scale, Award];

const GPU_LAYER = "will-change-transform will-change-opacity";
const BTN_PRESS = `transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] ${GPU_LAYER}`;
const BTN_OUTLINE = `transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:bg-hrz-green/10 hover:shadow-lg ${GPU_LAYER}`;
const CARD_HOVER = `transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${GPU_LAYER}`;
const CARD_HOVER_DARK = `transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/30 ${GPU_LAYER}`;
const VIEWPORT_TRIGGER = "-100px";
const STAGGER_RHYTHM = 0.15;

type PillarCardItem = { title: string; description: string };
type ValueItem = { title: string; text: string };
type ValueChainStep = { label: string };
type SmartEsgCard = { title: string; description: string };
type SocialProjectItem = { tag: string; title: string; description: string };
type IndicatorItem = { category: string; value: string; label: string };

function EsgPage() {
  const { t } = useTranslation();

  const pillarItems = t("esg.pillars.items", { returnObjects: true }) as PillarCardItem[];
  const valueItems = t("esg.values.items", { returnObjects: true }) as ValueItem[];
  const valueChainSteps = t("esg.valueChain.steps", { returnObjects: true }) as ValueChainStep[];
  const smartEsgCards = t("esg.smartEsg.cards", { returnObjects: true }) as SmartEsgCard[];
  const socialProjects = t("esg.socialProjects.items", { returnObjects: true }) as SocialProjectItem[];
  const indicators = t("esg.indicators.items", { returnObjects: true }) as IndicatorItem[];

  return (
    <SiteShell headerVariant="dark">
      {/* Hero — background image */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden">
        <img
          src={heroEsgImg}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover object-right-bottom"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-hrz-deep/90 via-hrz-deep/50 to-transparent"
        />

        <div className="container-hrz relative z-10 py-32 lg:py-40">
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
            <p className="text-sm font-semibold uppercase tracking-widest text-hrz-green">
              {t("esg.hero.eyebrow")}
            </p>
          </Reveal>
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-tight text-white lg:text-7xl">
              {t("esg.hero.title")}
            </h1>
          </Reveal>
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {t("esg.hero.subtitle")}
            </p>
          </Reveal>
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.3}>
            <a
              href="#como-criamos-valor"
              className={`group mt-10 inline-flex items-center gap-2 rounded-full bg-hrz-green px-7 py-3.5 text-sm font-semibold text-white hover:bg-hrz-green-dark hover:shadow-[0_0_28px_rgba(0,125,88,0.35)] ${BTN_PRESS}`}
            >
              {t("esg.hero.cta")}
              <ArrowRight
                size={16}
                strokeWidth={1.75}
                className={`transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1`}
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Como criamos valor — value chain */}
      <section id="como-criamos-valor" className="bg-slate-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-start text-left gap-5">
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
                <p className="eyebrow text-hrz-green">{t("esg.valueChain.eyebrow")}</p>
              </Reveal>
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
                <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                  {t("esg.valueChain.title")}
                </h2>
              </Reveal>
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.2}>
                <p className="text-sm lg:text-base text-slate-600">{t("esg.valueChain.description")}</p>
              </Reveal>
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.3}>
                <a
                  href="#esg-pillars"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-hrz-green transition-colors hover:underline"
                >
                  {t("esg.valueChain.link")}
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    className={`transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-0.5`}
                  />
                </a>
              </Reveal>
            </div>

            <Stagger
              fallbackDelay={500}
              viewportMargin={VIEWPORT_TRIGGER}
              className="lg:col-span-8 xl:col-span-9 w-full grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4 lg:flex lg:flex-nowrap lg:justify-between lg:gap-x-1"
            >
              {valueChainSteps.map((step, i) => {
                const StepIcon = VALUE_CHAIN_ICONS[i];
                return (
                  <Fragment key={step.label}>
                    <StaggerItem className="w-full">
                      <ValueChainItem icon={StepIcon} label={step.label} />
                    </StaggerItem>
                    {i < valueChainSteps.length - 1 && (
                      <span
                        aria-hidden
                        className="hidden flex-shrink-0 items-start justify-center px-1 pt-8 text-slate-300 lg:flex"
                      >
                        <ChevronRight size={16} strokeWidth={1.5} />
                      </span>
                    )}
                  </Fragment>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Nossos pilares */}
      <section id="esg-pillars" className="bg-white py-24">
        <div className="container-hrz">
          <div className="text-center">
            <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
              <p className="text-sm font-semibold uppercase tracking-widest text-hrz-green">
                {t("esg.pillars.eyebrow")}
              </p>
            </Reveal>
            <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
              <h2 className="font-display mb-12 mt-4 text-3xl text-foreground lg:text-4xl">
                {t("esg.pillars.heading")}
              </h2>
            </Reveal>
          </div>

          <Stagger
            fallbackDelay={500}
            viewportMargin={VIEWPORT_TRIGGER}
            staggerChildren={STAGGER_RHYTHM}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pillarItems.map((pillar, i) => (
              <StaggerItem key={pillar.title} className="h-full">
                <PillarCard
                  image={PILLAR_CARD_IMAGES[i]}
                  icon={PILLAR_CARD_ICONS[i]}
                  title={pillar.title}
                  description={pillar.description}
                  linkLabel={t("esg.pillars.link")}
                  href="#esg-inteligente"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ESG Inteligente */}
      <section id="esg-inteligente" className="bg-hrz-deep py-24 text-white">
        <div className="container-hrz">
          <Stagger
            fallbackDelay={500}
            viewportMargin={VIEWPORT_TRIGGER}
            staggerChildren={STAGGER_RHYTHM}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6"
          >
            {/* Bloco 1 — Textos e CTA */}
            <StaggerItem className="col-span-1 flex flex-col justify-center lg:col-span-3 lg:col-start-1">
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
                <p className="text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid">
                  {t("esg.smartEsg.eyebrow")}
                </p>
              </Reveal>
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
                <h2 className="font-display mt-4 text-3xl leading-tight text-white lg:text-4xl">
                  {t("esg.smartEsg.title")}
                </h2>
              </Reveal>
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.2}>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  {t("esg.smartEsg.description")}
                </p>
              </Reveal>
              <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.3}>
                <a
                  href="#esg-inteligente"
                  className={`group ${BTN_OUTLINE} mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-hrz-green px-6 py-3 text-sm font-semibold text-hrz-green`}
                >
                  {t("esg.smartEsg.cta")}
                  <ArrowRight
                    size={16}
                    strokeWidth={1.75}
                    className={`transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1`}
                  />
                </a>
              </Reveal>
            </StaggerItem>

            {/* Bloco 2 — Dashboard */}
            <StaggerItem className="relative col-span-1 flex w-full items-center justify-center lg:col-span-4">
              <img
                src={dashboardEsgImg}
                alt={t("esg.smartEsg.dashboardAlt")}
                loading="lazy"
                decoding="async"
                className={`h-auto max-h-[500px] w-full object-contain object-center drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out hover:scale-[1.02] ${GPU_LAYER}`}
              />
            </StaggerItem>

            {/* Bloco 3 — Grid de cartões menores */}
            <StaggerItem className="col-span-1 lg:col-span-5">
              <Stagger
                fallbackDelay={500}
                viewportMargin={VIEWPORT_TRIGGER}
                staggerChildren={STAGGER_RHYTHM}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {smartEsgCards.map((card, i) => {
                  const CardIcon = SMART_ESG_CARD_ICONS[i];
                  return (
                    <StaggerItem key={card.title} className="h-full">
                      <SmartEsgCard
                        icon={CardIcon}
                        title={card.title}
                        description={card.description}
                      />
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Projetos sociais */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="solid" opacity={0.04} className="-right-20 top-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
            <p className="text-sm font-semibold uppercase tracking-widest text-hrz-green">
              {t("esg.socialProjects.eyebrow")}
            </p>
          </Reveal>
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
            <h2 className="font-display mt-4 max-w-2xl text-3xl text-foreground lg:text-4xl">
              {t("esg.socialProjects.heading")}
            </h2>
          </Reveal>
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.2}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t("esg.socialProjects.description")}
            </p>
          </Reveal>
          <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.3}>
            <Link
              to="/contato"
              className={`group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-6 py-3 text-sm font-semibold text-white hover:bg-hrz-green/90 ${BTN_PRESS}`}
            >
              {t("esg.socialProjects.cta")}
              <ArrowRight
                size={16}
                strokeWidth={1.75}
                className={`transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1`}
              />
            </Link>
          </Reveal>

          <Stagger
            fallbackDelay={500}
            viewportMargin={VIEWPORT_TRIGGER}
            staggerChildren={STAGGER_RHYTHM}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {socialProjects.map((project, i) => (
              <StaggerItem key={project.title} className="h-full">
                <SocialProjectCard
                  image={PROJECT_IMAGES[i]}
                  tag={project.tag}
                  title={project.title}
                  description={project.description}
                  linkLabel={t("esg.socialProjects.link")}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Indicadores ESG */}
      <section id="esg-indicadores" className="bg-slate-50 py-24">
        <div className="container-hrz grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-3">
            <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
              <p className="text-sm font-semibold uppercase tracking-widest text-hrz-green">
                {t("esg.indicators.eyebrow")}
              </p>
            </Reveal>
            <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
              <h2 className="font-display mt-4 text-2xl text-foreground lg:text-3xl">
                {t("esg.indicators.heading")}
              </h2>
            </Reveal>
            <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.2}>
              <a
                href="#esg-indicadores"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
              >
                {t("esg.indicators.link")}
                <ArrowRight size={14} strokeWidth={1.75} />
              </a>
            </Reveal>
          </div>

          <Stagger
            fallbackDelay={500}
            viewportMargin={VIEWPORT_TRIGGER}
            className="grid w-full min-w-0 grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-9 xl:grid-cols-6"
          >
            {indicators.map((indicator, i) => (
              <StaggerItem
                key={`${indicator.category}-${indicator.value}`}
                className="h-full min-w-0"
              >
                <IndicatorCard
                  icon={INDICATOR_ICONS[i]}
                  category={indicator.category}
                  value={indicator.value}
                  label={indicator.label}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTAs divididos */}
      <section className="bg-hrz-deep text-white">
        <Stagger fallbackDelay={500} viewportMargin={VIEWPORT_TRIGGER} className="grid grid-cols-1 border-t border-white/10 md:grid-cols-2">
          <StaggerItem className="h-full">
            <div className="relative flex h-full min-h-[320px] flex-col justify-center overflow-hidden border-b border-white/10 md:border-b-0 md:border-r lg:min-h-[400px]">
              <img
                src={torreImg}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-hrz-deep/70" />
              <div className="relative z-10 p-12 lg:p-20">
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
                  <p className="text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid">
                    {t("esg.engagement.opportunities.eyebrow")}
                  </p>
                </Reveal>
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
                  <h2 className="font-display mt-4 text-2xl text-white lg:text-3xl">
                    {t("esg.engagement.opportunities.title")}
                  </h2>
                </Reveal>
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.2}>
                  <p className="mt-2 text-base leading-relaxed text-slate-400">
                    {t("esg.engagement.opportunities.description")}
                  </p>
                </Reveal>
                <Link
                  to="/contato"
                  className={`group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-7 py-3.5 text-sm font-semibold text-white hover:bg-hrz-green-dark ${BTN_PRESS}`}
                >
                  {t("esg.engagement.opportunities.cta")}
                  <ArrowRight
                    size={16}
                    strokeWidth={1.75}
                    className={`transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1`}
                  />
                </Link>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="relative flex h-full min-h-[320px] flex-col justify-center overflow-hidden lg:min-h-[400px]">
              <img
                src={droneImg}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-hrz-deep/70" />
              <div className="relative z-10 p-12 lg:p-20">
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
                  <p className="text-sm font-semibold uppercase tracking-widest text-hrz-green-vivid">
                    {t("esg.engagement.innovation.eyebrow")}
                  </p>
                </Reveal>
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
                  <h2 className="font-display mt-4 text-2xl text-white lg:text-3xl">
                    {t("esg.engagement.innovation.title")}
                  </h2>
                </Reveal>
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.2}>
                  <p className="mt-2 text-base leading-relaxed text-slate-400">
                    {t("esg.engagement.innovation.description")}
                  </p>
                </Reveal>
                <Link
                  to="/contato"
                  className={`group mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/55 ${BTN_OUTLINE}`}
                >
                  {t("esg.engagement.innovation.cta")}
                  <ArrowRight
                    size={16}
                    strokeWidth={1.75}
                    className={`transition-transform duration-300 ease-out ${GPU_LAYER} group-hover:translate-x-1`}
                  />
                </Link>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Nossos Valores */}
      <section className="relative overflow-hidden bg-[#0a472e] py-24 text-white">
        <div className="container-hrz relative">
          <Stagger
            fallbackDelay={500}
            viewportMargin={VIEWPORT_TRIGGER}
            className="grid grid-cols-2 items-start gap-6 md:grid-cols-4 lg:grid-cols-8 lg:items-center lg:gap-4"
          >
            <StaggerItem className="col-span-2 min-w-0 md:col-span-4 lg:col-span-2">
              <div className="flex flex-col justify-center">
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0}>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/60">
                    {t("esg.values.eyebrow")}
                  </p>
                </Reveal>
                <Reveal viewportMargin={VIEWPORT_TRIGGER} delay={0.1}>
                  <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white lg:text-[32px]">
                    {t("esg.values.taglineLine1")}
                    <br className="hidden lg:block" />
                    {t("esg.values.taglineLine2")}
                  </h2>
                </Reveal>
              </div>
            </StaggerItem>

            {valueItems.map((v, i) => {
              const ValueIcon = VALUE_ICONS[i];
              return (
                <StaggerItem key={v.title} className="h-full min-w-0">
                  <ValueItemCard icon={ValueIcon} title={v.title} text={v.text} />
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </SiteShell>
  );
}

function ValueItemCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-xs leading-relaxed text-white/80">{text}</p>
    </div>
  );
}

function SocialProjectCard({
  image,
  tag,
  title,
  description,
  linkLabel,
}: {
  image: string;
  tag: string;
  title: string;
  description: string;
  linkLabel: string;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
    >
      <div className="relative h-[170px] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02] will-change-transform will-change-opacity"
        />
      </div>
      <div className="flex flex-grow flex-col p-6">
        <span className="mb-3 inline-block rounded bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {tag}
        </span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 line-clamp-3 flex-grow text-sm text-muted-foreground">{description}</p>
        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-hrz-green hover:underline"
        >
          {linkLabel}
          <ArrowRight
            size={14}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}

function IndicatorCard({
  icon: Icon,
  category,
  value,
  label,
}: {
  icon: LucideIcon;
  category: string;
  value: string;
  label: string;
}) {
  return (
    <div
      className={`group flex h-full min-w-0 w-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-3 shadow-sm lg:p-4 ${CARD_HOVER}`}
    >
      <Icon size={18} strokeWidth={1.5} className="text-hrz-green" />
      <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-400">{category}</p>
      <p className="mb-3 mt-2 text-lg font-semibold leading-none tracking-tight text-hrz-green lg:text-xl xl:text-[22px]">
        {value}
      </p>
      <p className="mt-auto text-[11px] leading-tight text-slate-500 lg:text-xs">{label}</p>
    </div>
  );
}

function PillarCard({
  image,
  icon: Icon,
  title,
  description,
  linkLabel,
  href,
}: {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <article
      className={`group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${CARD_HOVER}`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] will-change-transform will-change-opacity"
        />
      </div>
      <div className="relative p-6 pt-8">
        <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-hrz-green text-white shadow-md">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="mt-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{description}</p>
        <a
          href={href}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-hrz-green hover:underline"
        >
          {linkLabel}
          <ArrowRight
            size={14}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}

function SmartEsgCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className={`flex h-full flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] lg:p-5 ${GPU_LAYER}`}>
      <Icon size={22} strokeWidth={1.5} className="text-hrz-green" />
      <h3 className="mb-2 text-sm font-semibold leading-tight text-white lg:text-base">{title}</h3>
      <p className="text-[11px] leading-relaxed text-slate-400 lg:text-xs">{description}</p>
    </div>
  );
}

function ValueChainItem({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="group flex flex-col items-center text-center mx-auto w-full lg:w-auto lg:flex-1 lg:min-w-0 lg:max-w-[140px]">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-hrz-deep shadow-sm transition-transform duration-300 group-hover:-translate-y-1 lg:h-20 lg:w-20">
        <Icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.5} />
      </div>
      <p className="break-words hyphens-auto w-full px-1 text-xs font-semibold leading-tight text-slate-700 lg:text-sm">{label}</p>
    </div>
  );
}
