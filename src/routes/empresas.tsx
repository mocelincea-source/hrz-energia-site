import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Zap, Wind, Building2, Globe2, Network } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { BrazilMapAnimated } from "@/components/site/BrazilMapAnimated";
import { Reveal, Parallax } from "@/components/site/motion";
import i18n from "@/i18n/config";
import substationImg from "@/assets/substation.jpg";
import windImg from "@/assets/wind-babilonia.jpg";
import raioBrand from "@/assets/raio-hrz.png";

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: i18n.t("companies.meta.title") },
      { name: "description", content: i18n.t("companies.meta.description") },
      { property: "og:title", content: i18n.t("companies.meta.ogTitle") },
      { property: "og:description", content: i18n.t("companies.meta.ogDescription") },
    ],
  }),
  component: EmpresasPage,
});

type OrgDetail = { label: string; value: string };

type OrgNode = {
  id: string;
  title: string;
  subtitle: string;
  tone: "electric" | "white" | "card";
  icon: typeof Globe2;
  details: OrgDetail[];
  description: string;
};

const ORG_NODE_CONFIGS: Pick<OrgNode, "id" | "title" | "tone" | "icon">[] = [
  { id: "actis",        title: "Actis LLP",        tone: "electric", icon: Globe2   },
  { id: "hrz",          title: "HRZ Energia",       tone: "white",    icon: Building2 },
  { id: "transmissoras", title: "Transmissoras",    tone: "card",     icon: Zap      },
  { id: "babilonia",    title: "Eólicas Babilônia", tone: "card",     icon: Wind     },
];

function EmpresasPage() {
  const { t } = useTranslation();

  const orgNodes: OrgNode[] = ORG_NODE_CONFIGS.map((cfg) => ({
    ...cfg,
    subtitle:    t(`companies.orgNodes.${cfg.id}.subtitle`),
    description: t(`companies.orgNodes.${cfg.id}.description`),
    details:     t(`companies.orgNodes.${cfg.id}.details`, { returnObjects: true }) as OrgDetail[],
  }));

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("companies.hero.eyebrow")}
        title={
          <>
            {t("companies.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("companies.hero.titleHighlight")}</span>
          </>
        }
        subtitle={t("companies.hero.subtitle")}
      />

      {/* Lógica da plataforma integrada */}
      <section className="py-24">
        <div className="container-hrz grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-hrz-electric">{t("companies.logic.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
              {t("companies.logic.heading1")}
              <br />
              {t("companies.logic.heading2")}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{t("companies.logic.body1")}</p>
            <p>{t("companies.logic.body2")}</p>
          </div>
        </div>
      </section>

      {/* Cards das duas empresas */}
      <section className="bg-secondary py-24">
        <div className="container-hrz grid gap-8 lg:grid-cols-2">
          {/* Transmissoras */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src={substationImg}
                alt={t("companies.cards.transmission.imgAlt")}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hrz-deep/95 via-hrz-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-hrz-electric">
                  <Zap size={20} />
                </div>
                <p className="mt-4 eyebrow text-hrz-electric">{t("companies.cards.transmission.eyebrow")}</p>
                <h3 className="font-display mt-2 text-3xl font-bold">{t("companies.cards.transmission.name")}</h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("companies.cards.transmission.description")}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Metric value="9"       label={t("companies.cards.transmission.metricLabel1")} />
                <Metric value="2.403"   label={t("companies.cards.transmission.metricLabel2")} />
                <Metric value="R$ 935m" label={t("companies.cards.transmission.metricLabel3")} />
              </div>
              <a
                href="https://www.hrztransmissoras.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-hrz-mid"
              >
                {t("companies.cards.transmission.cta")} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Eólicas Babilônia */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src={windImg}
                alt={t("companies.cards.wind.imgAlt")}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hrz-green-dark/95 via-hrz-green/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-hrz-green">
                  <Wind size={20} />
                </div>
                <p className="mt-4 eyebrow text-white">{t("companies.cards.wind.eyebrow")}</p>
                <h3 className="font-display mt-2 text-3xl font-bold">{t("companies.cards.wind.name")}</h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("companies.cards.wind.description")}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Metric value="136,5 MW" label={t("companies.cards.wind.metricLabel1")} />
                <Metric value="65"       label={t("companies.cards.wind.metricLabel2")} />
                <Metric value="57%"      label={t("companies.cards.wind.metricLabel3")} />
              </div>
              <a
                href="https://www.eolicasbabilonia.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-hrz-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-hrz-green-dark"
              >
                {t("companies.cards.wind.cta")} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa compartilhado */}
      <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
        <BoltDecor
          variant="outline"
          rotate={0}
          opacity={0.06}
          className="left-6 bottom-10 h-[400px] w-auto"
        />
        {/* Brand bolt flutuante entre copy e mapa */}
        <div className="pointer-events-none absolute left-[45%] top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <motion.img
            src={raioBrand}
            alt=""
            aria-hidden
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 0.16, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-[420px] w-auto drop-shadow-[0_24px_70px_rgba(41,168,229,0.22)]"
          />
        </div>
        <div className="container-hrz relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("companies.footprint.eyebrow")}</p>
            <h2 className="display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
              {t("companies.footprint.heading1")}
              <br />
              <span className="text-hrz-electric font-normal">{t("companies.footprint.heading2")}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("companies.footprint.body")}
            </p>
          </Reveal>
          <Parallax offset={40} className="p-2">
            <BrazilMapAnimated />
          </Parallax>
        </div>
      </section>

      {/* Estrutura Societária */}
      <section className="bg-hrz-deep py-24 text-white">
        <div className="container-hrz">
          <p className="eyebrow text-hrz-electric">{t("companies.corporate.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl sm:text-5xl">
            {t("companies.corporate.heading")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {t("companies.corporate.body")}
          </p>

          <OrgChart nodes={orgNodes} exploreHint={t("companies.corporate.exploreHint")} />
        </div>
      </section>
    </SiteShell>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-xl font-extrabold text-hrz-deep">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function OrgChart({ nodes, exploreHint }: { nodes: OrgNode[]; exploreHint: string }) {
  const [activeId, setActiveId] = useState<string>("hrz");
  const active = nodes.find((n) => n.id === activeId) ?? nodes[1];

  const [actis, hrz, trans, bab] = nodes;

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      {/* Chart */}
      <div className="relative flex flex-col items-center gap-5">
        <OrgBox node={actis} active={activeId === actis.id} onClick={() => setActiveId(actis.id)} />
        <AnimatedConnector />
        <OrgBox node={hrz} active={activeId === hrz.id} onClick={() => setActiveId(hrz.id)} />
        <AnimatedConnector />
        <div className="relative grid w-full gap-6 sm:grid-cols-2">
          {/* horizontal branch */}
          <span className="pointer-events-none absolute left-1/4 right-1/4 top-0 hidden h-px -translate-y-3 bg-white/25 sm:block" aria-hidden />
          <OrgBox node={trans} active={activeId === trans.id} onClick={() => setActiveId(trans.id)} />
          <OrgBox node={bab}   active={activeId === bab.id}   onClick={() => setActiveId(bab.id)}   />
        </div>
      </div>

      {/* Details panel */}
      <div className="lg:pl-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-hrz-electric text-white">
                <active.icon size={22} />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">{active.title}</p>
                <p className="text-xs uppercase tracking-wider text-hrz-electric">{active.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/80">{active.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {active.details.map((d) => (
                <div key={d.label} className="rounded-xl bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/60">{d.label}</p>
                  <p className="mt-1 font-display text-base font-bold text-white">{d.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/50">
              <Network size={12} /> {exploreHint}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function OrgBox({
  node,
  active,
  onClick,
}: {
  node: OrgNode;
  active: boolean;
  onClick: () => void;
}) {
  const base =
    node.tone === "electric"
      ? "bg-hrz-electric text-white"
      : node.tone === "white"
        ? "bg-white text-hrz-deep"
        : "border border-white/15 bg-white/5 text-white";
  const ring = active ? "ring-2 ring-hrz-electric ring-offset-2 ring-offset-hrz-deep" : "ring-0";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full max-w-md rounded-2xl px-6 py-5 text-center transition ${base} ${ring}`}
    >
      <div className="flex items-center justify-center gap-2">
        <node.icon size={16} className="opacity-80" />
        <p className="font-display text-lg font-bold">{node.title}</p>
      </div>
      <p className="mt-1 text-xs uppercase tracking-wider opacity-80">{node.subtitle}</p>
    </motion.button>
  );
}

function AnimatedConnector() {
  return (
    <motion.span
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ transformOrigin: "top" }}
      className="h-8 w-px bg-gradient-to-b from-hrz-electric to-white/20"
      aria-hidden
    />
  );
}
