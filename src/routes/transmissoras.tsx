import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Zap,
  Activity,
  ShieldCheck,
  MapPin,
  Cable,
  Building2,
  Gauge,
  Award,
  Leaf,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { BrazilMapAnimated } from "@/components/site/BrazilMapAnimated";
import { Reveal, Parallax, Stagger, StaggerItem, HoverLift } from "@/components/site/motion";
import i18n from "@/i18n/config";
import substationImg from "@/assets/substation.jpg";
import raioBrand from "@/assets/raio-hrz.png";

type KpiItem = { value: string; label: string };
type ConcessionItem = {
  id: string;
  nome: string;
  estado: string;
  tensao: string;
  linhas: string;
  subestacoes: string;
  acessadas: string;
  aquisicao: string;
};
type DifferentialItem = { title: string; text: string };
type TimelineItem = { ano: string; titulo: string; texto: string };

const KPIS_ICONS = [Building2, Cable, Zap, Gauge, Activity, ShieldCheck];
const DIFERENCIAIS_ICONS = [ShieldCheck, Activity, Leaf, Award];

export const Route = createFileRoute("/transmissoras")({
  head: () => ({
    meta: [
      { title: i18n.t("segments.transmission.meta.title") },
      { name: "description", content: i18n.t("segments.transmission.meta.description") },
      { property: "og:title", content: i18n.t("segments.transmission.meta.ogTitle") },
      { property: "og:description", content: i18n.t("segments.transmission.meta.ogDescription") },
    ],
  }),
  component: TransmissorasPage,
});

function TransmissorasPage() {
  const { t } = useTranslation();

  const kpisData = t("segments.transmission.kpisItems", { returnObjects: true }) as KpiItem[];
  const KPIS = kpisData.map((item, i) => ({ ...item, icon: KPIS_ICONS[i] }));

  const CONCESSOES = t("segments.transmission.concessionsItems", { returnObjects: true }) as ConcessionItem[];

  const differentialsData = t("segments.transmission.differentialsItems", { returnObjects: true }) as DifferentialItem[];
  const DIFERENCIAIS = differentialsData.map((item, i) => ({ ...item, icon: DIFERENCIAIS_ICONS[i] }));

  const TIMELINE = t("segments.transmission.timelineItems", { returnObjects: true }) as TimelineItem[];

  const [active, setActive] = useState(CONCESSOES[0]?.id ?? "es");
  const sel = CONCESSOES.find((c) => c.id === active) ?? CONCESSOES[0];

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("segments.transmission.hero.eyebrow")}
        title={
          <>
            {t("segments.transmission.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("segments.transmission.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("segments.transmission.hero.subtitle")}
      />

      {/* Sobre */}
      <section className="relative overflow-hidden py-24 lg:py-28">
        <BoltDecor variant="outline" rotate={0} opacity={0.05} className="-left-16 top-8 h-[520px] w-auto" />
        <div className="container-hrz relative grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("segments.transmission.about.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
              {t("segments.transmission.about.heading1")}
              <br />
              {t("segments.transmission.about.heading2")}
            </h2>
          </Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{t("segments.transmission.about.body1")}</p>
            <p>{t("segments.transmission.about.body2")}</p>
            <p>{t("segments.transmission.about.body3")}</p>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-hrz-deep py-20 text-white">
        <div className="container-hrz">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("segments.transmission.kpis.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-4xl sm:text-5xl">{t("segments.transmission.kpis.heading")}</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KPIS.map((k) => (
              <StaggerItem key={k.label}>
                <HoverLift className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-hrz-electric">
                    <k.icon size={20} />
                  </div>
                  <p className="mt-6 font-display text-4xl font-light tracking-tight text-hrz-electric">
                    {k.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/70">{k.label}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mapa + pegada */}
      <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
        <BoltDecor variant="outline" rotate={0} opacity={0.06} className="left-6 bottom-10 h-[420px] w-auto" />
        <div className="pointer-events-none absolute left-[45%] top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <motion.img
            src={raioBrand}
            alt=""
            aria-hidden
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 0.14, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-[420px] w-auto drop-shadow-[0_24px_70px_rgba(41,168,229,0.22)]"
          />
        </div>
        <div className="container-hrz relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("segments.transmission.footprint.eyebrow")}</p>
            <h2 className="display-mega mt-4 text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
              {t("segments.transmission.footprint.heading1")}
              <br />
              <span className="text-hrz-electric font-normal">{t("segments.transmission.footprint.heading2")}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("segments.transmission.footprint.body")}
            </p>
          </Reveal>
          <Parallax offset={40} className="p-2">
            <BrazilMapAnimated />
          </Parallax>
        </div>
      </section>

      {/* Concessões interativas */}
      <section className="py-24">
        <div className="container-hrz">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("segments.transmission.concessionsSection.eyebrow")}</p>
            <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
              {t("segments.transmission.concessionsSection.heading")}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">
              {t("segments.transmission.concessionsSection.hint")}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col gap-3">
              {CONCESSOES.map((c) => {
                const isOn = c.id === active;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActive(c.id)}
                    className={`group rounded-2xl border p-5 text-left transition ${
                      isOn
                        ? "border-hrz-electric bg-hrz-deep text-white shadow-lg"
                        : "border-border bg-card text-foreground hover:border-hrz-electric"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg font-bold">{c.nome}</span>
                      <ArrowRight
                        size={16}
                        className={isOn ? "text-hrz-electric" : "text-muted-foreground"}
                      />
                    </div>
                    <p
                      className={`mt-1 text-xs uppercase tracking-wider ${
                        isOn ? "text-hrz-electric" : "text-muted-foreground"
                      }`}
                    >
                      <MapPin size={11} className="mr-1 inline" />
                      {c.estado}
                    </p>
                  </button>
                );
              })}
            </div>

            {sel && (
              <motion.div
                key={sel.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={substationImg} alt={sel.nome} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hrz-deep/95 via-hrz-deep/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="eyebrow text-hrz-electric">{sel.estado}</p>
                    <h3 className="font-display mt-2 text-3xl font-bold">{sel.nome}</h3>
                  </div>
                </div>
                <div className="grid gap-5 p-7 sm:grid-cols-2">
                  <InfoBlock label={t("segments.transmission.infoLabels.voltage")} value={sel.tensao} icon={Zap} />
                  <InfoBlock label={t("segments.transmission.infoLabels.lines")} value={sel.linhas} icon={Cable} />
                  <InfoBlock label={t("segments.transmission.infoLabels.ownSubstations")} value={sel.subestacoes} icon={Building2} />
                  <InfoBlock label={t("segments.transmission.infoLabels.accessedSubstations")} value={sel.acessadas} icon={Activity} />
                  <InfoBlock label={t("segments.transmission.infoLabels.acquisition")} value={sel.aquisicao} icon={Award} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-secondary py-24">
        <div className="container-hrz">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("segments.transmission.differentials.eyebrow")}</p>
            <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
              {t("segments.transmission.differentials.heading")}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {DIFERENCIAIS.map((d) => (
              <StaggerItem key={d.title}>
                <HoverLift className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-hrz-electric/40 hover:shadow-xl">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-hrz-electric to-hrz-deep transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-hrz-electric/15 to-hrz-electric/5 text-hrz-electric ring-1 ring-hrz-electric/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <d.icon size={22} />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-foreground">{d.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="bg-hrz-deep py-24 text-white">
        <div className="container-hrz">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("segments.transmission.timelineSection.eyebrow")}</p>
            <h2 className="display-mega mt-3 max-w-3xl text-4xl sm:text-5xl">
              {t("segments.transmission.timelineSection.heading")}
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {TIMELINE.map((tl) => (
              <StaggerItem key={tl.ano}>
                <HoverLift className="h-full rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                  <p className="font-display text-5xl font-light text-hrz-electric">{tl.ano}</p>
                  <h3 className="mt-4 text-lg font-bold text-white">{tl.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{tl.texto}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="container-hrz flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold text-foreground">
              {t("segments.transmission.cta.heading")}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {t("segments.transmission.cta.body")}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/investidores"
              className="inline-flex items-center gap-2 rounded-full bg-hrz-electric px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
            >
              {t("segments.transmission.cta.investors")} <ArrowRight size={16} />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-hrz-electric hover:text-hrz-electric"
            >
              {t("segments.transmission.cta.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function InfoBlock({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Zap;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
        <Icon size={12} /> {label}
      </p>
      <p className="mt-1 font-display text-base font-bold text-foreground">{value}</p>
    </div>
  );
}
