import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { BrazilMapAnimated } from "@/components/site/BrazilMapAnimated";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/site/motion";
import i18n from "@/i18n/config";
import substationImg from "@/assets/substation.jpg";
import windImg from "@/assets/wind-babilonia.jpg";

type AssetItem = { code: string; name: string; info: string };
type StatItem = { value: string; label: string };

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: i18n.t("segments.portfolio.meta.title") },
      { name: "description", content: i18n.t("segments.portfolio.meta.description") },
      { property: "og:title", content: i18n.t("segments.portfolio.meta.ogTitle") },
      { property: "og:description", content: i18n.t("segments.portfolio.meta.ogDescription") },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { t } = useTranslation();

  const TRANSMISSION_ASSETS = t("segments.portfolio.transmissionAssets", {
    returnObjects: true,
  }) as AssetItem[];

  const footprintStat1 = t("segments.portfolio.footprint.stat1", { returnObjects: true }) as StatItem;
  const footprintStat2 = t("segments.portfolio.footprint.stat2", { returnObjects: true }) as StatItem;
  const footprintStat3 = t("segments.portfolio.footprint.stat3", { returnObjects: true }) as StatItem;
  const footprintStat4 = t("segments.portfolio.footprint.stat4", { returnObjects: true }) as StatItem;

  const transmissionStats = t("segments.portfolio.transmission.stats", {
    returnObjects: true,
  }) as StatItem[];

  const generationStats = t("segments.portfolio.generation.stats", {
    returnObjects: true,
  }) as StatItem[];

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("segments.portfolio.hero.eyebrow")}
        title={
          <>
            {t("segments.portfolio.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("segments.portfolio.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("segments.portfolio.hero.subtitle")}
      />

      {/* National footprint */}
      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-24 top-10 h-[520px] w-auto" />
        <BoltDecor variant="solid" opacity={0.04} className="-right-20 bottom-10 h-[440px] w-auto" />
        <div className="container-hrz relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-hrz-electric">{t("segments.portfolio.footprint.eyebrow")}</p>
              <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
                {t("segments.portfolio.footprint.heading1")}
                <br />
                {t("segments.portfolio.footprint.heading2")}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {t("segments.portfolio.footprint.body")}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <MiniStat value={footprintStat1.value} label={footprintStat1.label} />
                <MiniStat value={footprintStat2.value} label={footprintStat2.label} />
                <MiniStat value={footprintStat3.value} label={footprintStat3.label} />
                <MiniStat value={footprintStat4.value} label={footprintStat4.label} />
              </div>
            </Reveal>
            <div className="p-2">
              <BrazilMapAnimated />
            </div>
          </div>
        </div>
      </section>

      {/* Transmission */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-right-24 top-1/2 h-[480px] w-auto -translate-y-1/2" />
        <div className="container-hrz relative">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow text-hrz-electric">{t("segments.portfolio.transmission.eyebrow")}</p>
              <h2 className="display-mega mt-3 text-4xl text-foreground sm:text-5xl">
                {t("segments.portfolio.transmission.heading")}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("segments.portfolio.transmission.subtitle")}
            </Reveal>
          </div>

          <Stagger className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {TRANSMISSION_ASSETS.map((a) => (
              <StaggerItem key={a.code} className="bg-card p-6 transition hover:bg-secondary/50">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-hrz-electric">
                  {a.code}
                </p>
                <p className="mt-2 font-display text-xl font-bold text-foreground">{a.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.info}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="relative mt-16 overflow-hidden rounded-3xl">
            <img
              src={substationImg}
              alt={t("segments.portfolio.transmission.imgAlt")}
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hrz-deep to-hrz-deep/0" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-6 p-10 text-white sm:grid-cols-4">
              {transmissionStats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Generation */}
      <section className="relative overflow-hidden bg-hrz-deep py-24 text-white">
        <BoltDecor variant="solid" opacity={0.08} className="-left-20 top-10 h-[500px] w-auto" />
        <div className="container-hrz relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-hrz-electric">{t("segments.portfolio.generation.eyebrow")}</p>
              <h2 className="display-mega mt-3 text-4xl sm:text-5xl">
                {t("segments.portfolio.generation.heading")}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
                {t("segments.portfolio.generation.body")}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {generationStats.map((s) => (
                  <Stat key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </Reveal>
            <HoverLift className="relative h-[420px] overflow-hidden rounded-3xl">
              <img
                src={windImg}
                alt={t("segments.portfolio.generation.imgAlt")}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </HoverLift>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-white/15 pl-4 first:border-l-0">
      <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</p>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-extrabold text-hrz-deep">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
