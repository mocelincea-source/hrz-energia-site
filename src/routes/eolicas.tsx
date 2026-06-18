import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Wind,
  Leaf,
  Sun,
  MapPin,
  Gauge,
  Activity,
  ShieldCheck,
  Users,
  Sprout,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem, HoverLift, Parallax } from "@/components/site/motion";
import i18n from "@/i18n/config";
import raioBrand from "@/assets/raio-hrz.png";
import babiloniaDayImg from "@/assets/babilonia-aerial-day.jpg";
import aerialRow from "@/assets/babilonia/babilonia-aerial-row.jpg.asset.json";
import aerialDusk from "@/assets/babilonia/babilonia-aerial-dusk.jpg.asset.json";
import aerialSunset from "@/assets/babilonia/babilonia-aerial-sunset.jpg.asset.json";

type KpiItem = { value: string; label: string };
type ComplexItem = {
  id: string;
  nome: string;
  municipio: string;
  descricao: string;
  destaques: string[];
};
type PilarItem = { title: string; text: string };

const KPIS_ICONS = [Wind, Activity, Gauge, Sun, Leaf, ShieldCheck];
const PILARES_ICONS = [Leaf, Sprout, Users, ShieldCheck];
const COMPLEX_IMAGES = [aerialRow.url, aerialDusk.url, aerialSunset.url];

export const Route = createFileRoute("/eolicas")({
  head: () => ({
    meta: [
      { title: i18n.t("segments.wind.meta.title") },
      { name: "description", content: i18n.t("segments.wind.meta.description") },
      { property: "og:title", content: i18n.t("segments.wind.meta.ogTitle") },
      { property: "og:description", content: i18n.t("segments.wind.meta.ogDescription") },
    ],
  }),
  component: EolicasPage,
});

function EolicasPage() {
  const { t } = useTranslation();

  const kpisData = t("segments.wind.kpisItems", { returnObjects: true }) as KpiItem[];
  const KPIS = kpisData.map((item, i) => ({ ...item, icon: KPIS_ICONS[i] }));

  const complexesData = t("segments.wind.complexesItems", { returnObjects: true }) as ComplexItem[];
  const COMPLEXOS = complexesData.map((item, i) => ({ ...item, img: COMPLEX_IMAGES[i] }));

  const pilaresData = t("segments.wind.pilaresItems", { returnObjects: true }) as PilarItem[];
  const PILARES = pilaresData.map((item, i) => ({ ...item, icon: PILARES_ICONS[i] }));

  const REGIOES = t("segments.wind.regioes", { returnObjects: true }) as string[];

  const [active, setActive] = useState(COMPLEXOS[0]?.id ?? "morro");
  const sel = COMPLEXOS.find((c) => c.id === active) ?? COMPLEXOS[0];

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("segments.wind.hero.eyebrow")}
        title={
          <>
            {t("segments.wind.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("segments.wind.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("segments.wind.hero.subtitle")}
      />

      {/* Visão geral com imagem */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="container-hrz grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-hrz-green">{t("segments.wind.overview.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
              {t("segments.wind.overview.heading1")}
              <br />
              {t("segments.wind.overview.heading2")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t("segments.wind.overview.body1")}</p>
              <p>{t("segments.wind.overview.body2")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {REGIOES.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1 rounded-full border border-hrz-green/40 bg-hrz-green/10 px-3 py-1 text-xs font-semibold text-hrz-green-dark"
                >
                  <MapPin size={11} /> {r}
                </span>
              ))}
            </div>
          </Reveal>
          <Parallax offset={30}>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={babiloniaDayImg}
                alt={t("segments.wind.overview.imgAlt")}
                className="h-[460px] w-full object-cover object-center"
              />
            </motion.div>
          </Parallax>
        </div>
      </section>

      {/* KPIs */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid py-24 text-white">
        <motion.img
          src={raioBrand}
          alt=""
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute -right-12 -bottom-10 h-[480px] w-auto"
        />
        <div className="container-hrz relative">
          <Reveal>
            <p className="eyebrow text-white/80">{t("segments.wind.kpis.eyebrow")}</p>
            <h2 className="display-mega mt-3 text-4xl sm:text-5xl">{t("segments.wind.kpis.heading")}</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KPIS.map((k) => (
              <StaggerItem key={k.label}>
                <HoverLift className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80">
                    <k.icon size={20} />
                  </div>
                  <p className="mt-6 font-display text-4xl font-light tracking-tight text-white">{k.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/80">{k.label}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Complexos interativos */}
      <section className="py-24">
        <div className="container-hrz">
          <Reveal>
            <p className="eyebrow text-hrz-green">{t("segments.wind.complexes.eyebrow")}</p>
            <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
              {t("segments.wind.complexes.heading")}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">
              {t("segments.wind.complexes.hint")}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col gap-3">
              {COMPLEXOS.map((c) => {
                const isOn = c.id === active;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActive(c.id)}
                    className={`group rounded-2xl border p-5 text-left transition ${
                      isOn
                        ? "border-hrz-green bg-hrz-green-dark text-white shadow-lg"
                        : "border-border bg-card text-foreground hover:border-hrz-green"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg font-bold">{c.nome}</span>
                      <ArrowRight
                        size={16}
                        className={isOn ? "text-white" : "text-muted-foreground"}
                      />
                    </div>
                    <p
                      className={`mt-1 text-xs uppercase tracking-wider ${
                        isOn ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      <MapPin size={11} className="mr-1 inline" />
                      {c.municipio}
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
                  <img src={sel.img} alt={sel.nome} className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hrz-green-dark/95 via-hrz-green-dark/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="eyebrow text-white/90">{sel.municipio}</p>
                    <h3 className="font-display mt-2 text-3xl font-bold">{sel.nome}</h3>
                  </div>
                </div>
                <div className="space-y-5 p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">{sel.descricao}</p>
                  <ul className="space-y-2">
                    {sel.destaques.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1 flex h-2 w-2 flex-none rounded-full bg-hrz-green" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Pilares ESG */}
      <section className="bg-secondary py-24">
        <div className="container-hrz">
          <Reveal>
            <p className="eyebrow text-hrz-green">{t("segments.wind.esg.eyebrow")}</p>
            <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
              {t("segments.wind.esg.heading")}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {PILARES.map((p) => (
              <StaggerItem key={p.title}>
                <HoverLift className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid p-8 shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:shadow-2xl">
                  <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                    <p.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-white">{p.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/85">{p.text}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hrz-deep py-20 text-white">
        <div className="container-hrz flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold">
              {t("segments.wind.cta.heading")}
            </h3>
            <p className="mt-2 text-white/75">
              {t("segments.wind.cta.body")}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.eolicasbabilonia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-hrz-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-hrz-green-dark"
            >
              {t("segments.wind.cta.siteLink")} <ArrowRight size={16} />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-hrz-green hover:text-hrz-green"
            >
              {t("segments.wind.cta.contactLink")}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
