import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import i18n from "@/i18n/config";
import mascoteFrente from "@/assets/mascote/frente.png";

export const Route = createFileRoute("/investidores")({
  head: () => ({
    meta: [
      { title: i18n.t("investors.meta.title") },
      { name: "description", content: i18n.t("investors.meta.description") },
      { property: "og:title", content: i18n.t("investors.meta.ogTitle") },
      { property: "og:description", content: i18n.t("investors.meta.ogDescription") },
    ],
  }),
  component: InvestidoresPage,
});

type KpiItem = { value: string; label: string };
type InitiativeItem = { title: string; text: string };
type PhaseData = { phase: string; range: string; title: string; items: string[] };
type DocItem = { title: string; text: string };

function InvestidoresPage() {
  const { t } = useTranslation();

  const kpis = t("investors.kpis", { returnObjects: true }) as KpiItem[];
  const initiatives = t("investors.initiatives.items", { returnObjects: true }) as InitiativeItem[];
  const phase1 = t("investors.phases.phase1", { returnObjects: true }) as PhaseData;
  const phase2 = t("investors.phases.phase2", { returnObjects: true }) as PhaseData;
  const docs = t("investors.docs.items", { returnObjects: true }) as DocItem[];

  return (
    <SiteShell headerVariant="dark">
      <PageHero
        eyebrow={t("investors.hero.eyebrow")}
        title={
          <>
            {t("investors.hero.titleLine1")}
            <br />
            <span className="text-gradient-electric">{t("investors.hero.titleLine2")}</span>
          </>
        }
        subtitle={t("investors.hero.subtitle")}
      />

      {/* KPIs */}
      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-24 top-10 h-[480px] w-auto" />
        <BoltDecor variant="solid" opacity={0.04} className="-right-20 bottom-10 h-[420px] w-auto" />
        <div className="container-hrz relative">
          <Stagger className="grid gap-5 md:grid-cols-4">
            {kpis.map((k) => (
              <StaggerItem
                key={k.label}
                className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25"
              >
                <p className="font-display text-3xl font-light tracking-tight text-hrz-deep sm:text-4xl">
                  {k.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  {k.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Iniciativas financeiras */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-right-20 top-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <p className="eyebrow text-hrz-electric">{t("investors.initiatives.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("investors.initiatives.heading")}
          </h2>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {initiatives.map((i) => (
              <StaggerItem
                key={i.title}
                className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25"
              >
                <h3 className="font-display text-xl font-light tracking-tight text-foreground">{i.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Roadmap de fases */}
      <section className="relative overflow-hidden py-24">
        <BoltDecor variant="solid" opacity={0.05} className="-left-20 top-10 h-[460px] w-auto" />
        <Stagger className="container-hrz relative grid gap-12 lg:grid-cols-2">
          <StaggerItem>
            <PhaseCard
              phase={phase1.phase}
              range={phase1.range}
              title={phase1.title}
              items={phase1.items}
            />
          </StaggerItem>
          <StaggerItem>
            <PhaseCard
              accent
              phase={phase2.phase}
              range={phase2.range}
              title={phase2.title}
              items={phase2.items}
            />
          </StaggerItem>
        </Stagger>
      </section>

      {/* Documentos */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor variant="outline" opacity={0.05} className="-left-20 bottom-10 h-[460px] w-auto" />
        <div className="container-hrz relative">
          <img
            src={mascoteFrente}
            alt={t("investors.docs.mascoteAlt")}
            className="pointer-events-none absolute -top-10 right-0 hidden h-72 w-auto drop-shadow-xl xl:block"
          />
          <p className="eyebrow text-hrz-electric">{t("investors.docs.eyebrow")}</p>
          <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
            {t("investors.docs.heading")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("investors.docs.body")}
          </p>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {docs.map((d) => (
              <StaggerItem key={d.title}>
                <DocCard title={d.title} text={d.text} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-hrz-deep px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-hrz-mid"
            >
              {t("investors.docs.requestCta")} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

function DocCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition group-hover:border-hrz-electric group-hover:text-hrz-electric">
        <FileText size={20} strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 font-display text-xl font-light tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function PhaseCard({
  phase,
  range,
  title,
  items,
  accent = false,
}: {
  phase: string;
  range: string;
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border p-7 transition duration-300 " +
        (accent
          ? "border-hrz-electric/30 bg-hrz-deep text-white hover:border-hrz-electric/60"
          : "border-border/60 bg-card text-foreground hover:border-foreground/25")
      }
    >
      <p className="eyebrow text-hrz-electric">{phase}</p>
      <p className={"mt-2 font-display text-sm font-bold tracking-wider " + (accent ? "text-white/70" : "text-muted-foreground")}>
        {range}
      </p>
      <h3 className="mt-3 font-display text-2xl font-light tracking-tight uppercase">{title}</h3>
      <ul className={"mt-7 space-y-3 text-sm leading-relaxed " + (accent ? "text-white/85" : "text-muted-foreground")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1 w-3 shrink-0 bg-hrz-electric" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
