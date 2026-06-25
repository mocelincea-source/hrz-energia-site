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
type DocItem = { title: string; text: string };

function InvestidoresPage() {
  const { t } = useTranslation();

  const kpis = t("investors.kpis", { returnObjects: true }) as KpiItem[];
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
