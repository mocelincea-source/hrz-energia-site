import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Zap,
  Wind,
  ShieldCheck,
  Activity,
  Building2,
  LineChart,
  Leaf,
  Users,
  HeartHandshake,
  Globe2,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import {
  Reveal,
  Stagger,
  StaggerItem,
  Counter,
  HoverLift,
  Parallax,
  easeOut,
} from "@/components/site/motion";
import { motion } from "motion/react";
import { TextEffect } from "@/components/core/text-effect";
import { BoltDecor } from "@/components/site/BoltDecor";
import { BrazilMapAnimated } from "@/components/site/BrazilMapAnimated";
import { PlatformTag } from "@/components/site/PlatformTag";
import i18n from "@/i18n/config";
import heroImg from "@/assets/hero-transmission.jpg";
import windImg from "@/assets/wind-babilonia.jpg";
import substationImg from "@/assets/substation.jpg";
import raioBrand from "@/assets/raio-hrz.png";
import logoWhite from "@/assets/logo-hrz-white.png";
import babiloniaImg from "@/assets/babilonia-aerial.jpg";
import heroVideo from "@/assets/hero-hrz.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: i18n.t("home.meta.title") },
      {
        name: "description",
        content: i18n.t("home.meta.description"),
      },
      { property: "og:title", content: i18n.t("home.meta.ogTitle") },
      {
        property: "og:description",
        content: i18n.t("home.meta.ogDescription"),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();

  const STATS = [
    { to: 1, prefix: "R$ ", suffix: "bi+", decimals: 0, label: t("home.stats.revenue") },
    { to: 2403, prefix: "", suffix: "", decimals: 0, label: t("home.stats.ckm") },
    { to: 14, prefix: "", suffix: "", decimals: 0, label: t("home.stats.spes") },
    { to: 136.5, prefix: "", suffix: " MW", decimals: 1, label: t("home.stats.wind") },
  ];

  const PILLARS = [
    {
      icon: ShieldCheck,
      title: t("home.pillars.disciplined.title"),
      text: t("home.pillars.disciplined.text"),
    },
    {
      icon: Activity,
      title: t("home.pillars.efficient.title"),
      text: t("home.pillars.efficient.text"),
    },
    {
      icon: Zap,
      title: t("home.pillars.reliable.title"),
      text: t("home.pillars.reliable.text"),
    },
    {
      icon: Wind,
      title: t("home.pillars.responsible.title"),
      text: t("home.pillars.responsible.text"),
    },
  ];

  return (
    <SiteShell headerVariant="dark">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden text-white">
        {/* Z-0 — Video de fundo */}
        <motion.video
          src={heroVideo}
          poster={heroImg}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6, ease: easeOut }}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Z-10 — Overlay escuro navy para contraste */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#060c1a]/80 via-[#0a1328]/70 to-[#040810]/92" />

        {/* Z-20 — Conteúdo da página */}
        <div className="relative z-20 flex h-full flex-col">
          {/* Conteúdo central: Logo + Textos com Fade-Up */}
          <div className="container-hrz flex flex-1 items-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 2.0, ease: easeOut }}
              className="grid w-full gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Coluna esquerda — Logo */}
              <div className="flex items-center justify-center lg:justify-end lg:pr-6">
                <img
                  src={logoWhite}
                  alt={t("home.hero.logoAlt")}
                  className="h-28 w-auto sm:h-32 lg:h-40"
                />
              </div>

              {/* Coluna direita — Título + Botões */}
              <div className="flex flex-col items-start text-left">
                <h1 className="display-mega max-w-3xl text-left text-3xl font-light text-white sm:text-4xl lg:text-5xl">
                  <TextEffect per="word" as="span" preset="slide" delay={2.05} className="block">
                    {t("home.hero.headline1")}
                  </TextEffect>
                  <TextEffect
                    per="word"
                    as="span"
                    preset="slide"
                    delay={2.45}
                    className="text-gradient-electric block whitespace-nowrap font-normal"
                  >
                    {t("home.hero.headline2")}
                  </TextEffect>
                </h1>

                <div className="mt-8 flex flex-wrap justify-start gap-4">
                  <Link
                    to="/transmissoras"
                    className="group inline-flex items-center gap-2 rounded-full bg-hrz-electric px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-hrz-electric/85 hover:shadow-[0_0_28px_rgba(41,168,229,0.40)]"
                  >
                    {t("home.hero.ctaTransmission")}{" "}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    to="/eolicas"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/55 hover:bg-white/[0.07]"
                  >
                    {t("home.hero.ctaWind")}{" "}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* StatsBar — ancorada na base da tela */}
          <motion.div
            className="border-t border-white/10 bg-black/30 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.3, ease: easeOut }}
          >
            <div className="container-hrz grid grid-cols-2 gap-y-6 py-5 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex flex-col items-center border-l border-white/10 px-6 text-center first:border-l-0"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 2.4 + i * 0.1, ease: easeOut }}
                >
                  <p className="font-display text-4xl font-light tracking-tight text-hrz-electric sm:text-5xl">
                    <Counter
                      to={s.to}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      fallbackDelay={2400 + i * 100}
                    />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS / WHO WE ARE */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <BoltDecor
          variant="outline"
          rotate={0}
          opacity={0.06}
          className="-left-20 top-10 h-[560px] w-auto"
        />
        <BoltDecor
          variant="solid"
          rotate={0}
          opacity={0.04}
          duration={9}
          className="-right-16 bottom-0 h-[460px] w-auto"
        />
        <div className="container-hrz relative grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("home.about.eyebrow")}</p>
            <h2 className="display-mega mt-4 text-4xl text-foreground sm:text-5xl lg:text-6xl">
              {t("home.about.heading1")}
              <br />
              <span className="text-hrz-electric">{t("home.about.heading2")}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("home.about.body1")}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("home.about.body2")}
            </p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all"
            >
              {t("home.about.cta")} <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <HoverLift className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-electric group-hover:text-hrz-electric">
                    <p.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-light tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PORTFOLIO SPLIT */}
      <section className="bg-hrz-deep text-white">
        <div className="container-hrz grid gap-6 py-16 lg:grid-cols-2 lg:py-20">
          <div className="relative min-h-[480px] overflow-hidden rounded-2xl">
            <motion.img
              src={substationImg}
              alt={t("home.portfolio.transmissionImgAlt")}
              loading="lazy"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: easeOut }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hrz-deep/90 to-hrz-deep/20" />
            <Reveal className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <p className="eyebrow text-hrz-electric">{t("home.portfolio.transmissionEyebrow")}</p>
              <h3 className="font-display mt-3 text-3xl font-bold lg:text-4xl">
                {t("home.portfolio.transmissionHeading")}
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/80">
                {t("home.portfolio.transmissionBody")}
              </p>
            </Reveal>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-2xl">
            <motion.img
              src={windImg}
              alt={t("home.portfolio.windImgAlt")}
              loading="lazy"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: easeOut }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hrz-green-dark/90 to-hrz-green/20" />
            <Reveal delay={0.15} className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <p className="eyebrow text-white">{t("home.portfolio.windEyebrow")}</p>
              <h3 className="font-display mt-3 text-3xl font-bold lg:text-4xl">
                {t("home.portfolio.windHeading")}
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/85">{t("home.portfolio.windBody")}</p>
            </Reveal>
          </div>
        </div>
        <div className="container-hrz pb-16 text-center">
          <Link
            to="/empresas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all"
          >
            {t("home.portfolio.cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ACESSO RÁPIDO */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container-hrz">
          <Reveal className="mb-10">
            <p className="eyebrow text-hrz-electric">{t("home.quickAccess.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
              {t("home.quickAccess.heading")}
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2">
            <StaggerItem>
              <HoverLift className="h-full">
                <Link
                  to="/transmissoras"
                  className="group flex h-full items-start gap-5 rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-hrz-electric/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-electric group-hover:text-hrz-electric">
                    <Zap size={22} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {t("home.quickAccess.transmission.name")}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t("home.quickAccess.transmission.description")}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-hrz-electric">
                      {t("home.quickAccess.transmission.cta")}{" "}
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </HoverLift>
            </StaggerItem>
            <StaggerItem>
              <HoverLift className="h-full">
                <Link
                  to="/eolicas"
                  className="group flex h-full items-start gap-5 rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-hrz-green/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-green group-hover:text-hrz-green">
                    <Wind size={22} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {t("home.quickAccess.wind.name")}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t("home.quickAccess.wind.description")}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-hrz-green">
                      {t("home.quickAccess.wind.cta")}{" "}
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </HoverLift>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ACTIS CONTROLLER */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <BoltDecor
          variant="solid"
          rotate={0}
          opacity={0.04}
          duration={10}
          className="-right-16 top-10 h-[460px] w-auto"
        />
        <div className="container-hrz relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-hrz-electric/30 bg-hrz-electric/10 text-hrz-electric mx-auto mb-6">
              <Globe2 size={26} strokeWidth={1.5} />
            </div>
            <p className="eyebrow text-hrz-electric">{t("home.actis.eyebrow")}</p>
            <h2 className="display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
              {t("home.actis.heading1")}{" "}
              <span className="text-hrz-electric font-normal">{t("home.actis.heading2")}</span>
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl border border-border/60 bg-card p-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("home.actis.body1")}
              </p>
            </Reveal>
            <Reveal delay={0.15} className="rounded-2xl border border-border/60 bg-card p-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("home.actis.body2")}
              </p>
            </Reveal>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/empresas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all"
            >
              {t("home.actis.cta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* National footprint */}
      <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
        <BoltDecor
          variant="outline"
          rotate={0}
          opacity={0.06}
          className="left-6 bottom-10 h-[400px] w-auto"
        />
        {/* Brand bolt floating in the empty gap between copy and map */}
        <div className="pointer-events-none absolute left-[45%] top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <motion.img
            src={raioBrand}
            alt=""
            aria-hidden
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 0.16, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: easeOut }}
            className="h-[420px] w-auto drop-shadow-[0_24px_70px_rgba(41,168,229,0.22)]"
          />
        </div>
        <div className="container-hrz relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("home.footprint.eyebrow")}</p>
            <h2 className="display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
              {t("home.footprint.heading1")}
              <br />
              <span className="text-hrz-electric font-normal">{t("home.footprint.heading2")}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("home.footprint.body")}
            </p>
            <Link
              to="/portfolio"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-hrz-electric hover:gap-3 transition-all"
            >
              {t("home.footprint.cta")} <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Parallax offset={40} className="p-2">
            <BrazilMapAnimated alt={t("home.mapAlt")} />
          </Parallax>
        </div>
      </section>

      {/* ESG SECTION */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid py-24 text-white lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full bg-hrz-green-vivid/30 blur-3xl"
        />
        <BoltDecor
          variant="solid"
          rotate={0}
          opacity={0.07}
          duration={9}
          className="right-[-40px] top-10 h-[440px] w-auto"
        />
        <div className="container-hrz grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-white/90">
              {t("home.esg.eyebrow")}
            </p>
            <h2 className="display-mega mt-4 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              {t("home.esg.headingPre")}
              <span className="font-normal">{t("home.esg.headingVerb1")}</span>
              {t("home.esg.headingMid")}
              <span className="font-normal">{t("home.esg.headingVerb2")}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
              {t("home.esg.body")}
            </p>
            <Link
              to="/esg"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-hrz-green-dark transition hover:scale-[1.04] hover:bg-white/90"
            >
              {t("home.esg.cta")}{" "}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <motion.div
            className="grid gap-5 sm:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -15% 0px", amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
            }}
          >
            <EsgCard
              icon={Users}
              metric={t("home.esg.card1.metric")}
              label={t("home.esg.card1.label")}
              text={t("home.esg.card1.text")}
            />
            <EsgCard
              icon={HeartHandshake}
              metric={t("home.esg.card2.metric")}
              label={t("home.esg.card2.label")}
              text={t("home.esg.card2.text")}
            />
            <EsgCard
              icon={Leaf}
              metric={t("home.esg.card3.metric")}
              label={t("home.esg.card3.label")}
              text={t("home.esg.card3.text")}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA / VALUE CREATION */}
      <section className="relative overflow-hidden py-28">
        <BoltDecor
          variant="outline"
          rotate={0}
          opacity={0.07}
          className="-left-10 top-0 h-[480px] w-auto"
        />
        <BoltDecor
          variant="solid"
          rotate={0}
          opacity={0.05}
          duration={9}
          className="right-10 bottom-10 h-[380px] w-auto"
        />
        <div className="container-hrz">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-hrz-electric">{t("home.value.eyebrow")}</p>
              <h2 className="display-mega mt-4 text-4xl text-foreground sm:text-5xl lg:text-6xl">
                {t("home.value.heading1")}
                <br />
                <span className="text-hrz-electric">{t("home.value.heading2")}</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {t("home.value.body")}
              </p>
              <Link
                to="/investidores"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-hrz-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.04] hover:bg-hrz-mid"
              >
                {t("home.value.cta")}{" "}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: easeOut }}
              className="relative overflow-hidden rounded-3xl"
            >
              <img
                src={babiloniaImg}
                alt={t("home.value.windImgAlt")}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-hrz-deep/25 via-transparent to-transparent" />
            </motion.div>
          </div>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
            <ValueCard
              icon={Building2}
              title={t("home.value.phase1.title")}
              text={t("home.value.phase1.text")}
            />
            <ValueCard
              icon={LineChart}
              title={t("home.value.phase2.title")}
              text={t("home.value.phase2.text")}
              accent
            />
          </Stagger>
        </div>
      </section>
    </SiteShell>
  );
}

function EsgCard({
  icon: Icon,
  metric,
  label,
  text,
}: {
  icon: typeof Leaf;
  metric: string;
  label: string;
  text: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
      }}
    >
      <HoverLift className="group h-full rounded-2xl border border-white/20 bg-white/[0.06] p-7 backdrop-blur-sm transition duration-300 hover:border-white/40 hover:bg-white/10">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition group-hover:border-white">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <p className="mt-6 font-display text-4xl font-light tracking-tight text-white">{metric}</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
          {label}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/80">{text}</p>
      </HoverLift>
    </motion.div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  text,
  accent = false,
}: {
  icon: typeof Building2;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <StaggerItem>
      <HoverLift
        className={
          "group h-full rounded-2xl border p-7 transition duration-300 " +
          (accent
            ? "border-white/15 bg-hrz-deep text-white hover:border-white/35"
            : "border-border/60 bg-card text-foreground hover:border-foreground/25")
        }
      >
        <div
          className={
            "flex h-11 w-11 items-center justify-center rounded-full border transition " +
            (accent
              ? "border-white/40 text-white group-hover:border-white"
              : "border-foreground/15 text-foreground group-hover:border-hrz-electric group-hover:text-hrz-electric")
          }
        >
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <h3 className="mt-6 font-display text-lg font-light tracking-tight">{title}</h3>
        <p
          className={
            "mt-2 text-sm leading-relaxed " + (accent ? "text-white/75" : "text-muted-foreground")
          }
        >
          {text}
        </p>
      </HoverLift>
    </StaggerItem>
  );
}
