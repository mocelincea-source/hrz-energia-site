import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { BarChart3, FileText, FolderOpen, Building2, ArrowRight } from "lucide-react";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/investidores/")({
  head: () => ({
    meta: [
      { title: i18n.t("investors.meta.title") },
      { name: "description", content: i18n.t("investors.meta.description") },
      { property: "og:title", content: i18n.t("investors.meta.ogTitle") },
      { property: "og:description", content: i18n.t("investors.meta.ogDescription") },
    ],
  }),
  component: InvestidoresIndexPage,
});

type KpiItem = { value: string; label: string };

const NAV_CARDS = [
  {
    icon: BarChart3,
    title: "Demonstrações financeiras",
    description:
      "Balanços patrimoniais, DREs e demonstrações financeiras auditadas das empresas do grupo.",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: "/investidores/demonstracoes-financeiras" as any,
  },
  {
    icon: FileText,
    title: "Relatórios agente fiduciário",
    description:
      "Relatórios trimestrais e anuais dos agentes fiduciários das debêntures emitidas.",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: "/investidores/relatorios-agente-fiduciario" as any,
  },
  {
    icon: FolderOpen,
    title: "Outros documentos",
    description:
      "Estatutos sociais, atas de assembleia, escrituras de emissão e documentos corporativos.",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: "/investidores/outros-documentos" as any,
  },
  {
    icon: Building2,
    title: "Transmissora SPMG S.A.",
    description:
      "Documentação financeira e regulatória específica da Transmissora SPMG S.A.",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: "/investidores/transmissora-spmg-s-a" as any,
  },
];

function InvestidoresIndexPage() {
  const { t } = useTranslation();
  const kpis = t("investors.kpis", { returnObjects: true }) as KpiItem[];

  return (
    <>
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
        <BoltDecor
          variant="solid"
          opacity={0.04}
          className="-right-20 bottom-10 h-[420px] w-auto"
        />
        <div className="container-hrz relative">
          <Stagger className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {kpis.map((k) => (
              <StaggerItem
                key={k.label}
                className="h-full rounded-2xl border border-border/60 bg-card p-7 transition duration-300 hover:border-foreground/25 hover:shadow-md"
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

      {/* Navigation Cards */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <BoltDecor
          variant="outline"
          opacity={0.04}
          className="-left-20 bottom-10 h-[460px] w-auto"
        />
        <div className="container-hrz relative">
          <Reveal>
            <p className="eyebrow text-hrz-electric">{t("investors.docs.eyebrow")}</p>
            <h2 className="display-mega mt-3 max-w-3xl text-4xl text-foreground sm:text-5xl">
              {t("investors.docs.heading")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t("investors.docs.body")}
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {NAV_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <Link
                    to={card.to}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-hrz-electric/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors duration-300 group-hover:border-hrz-electric group-hover:text-hrz-electric">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-hrz-electric opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Acessar
                      <ArrowRight size={14} strokeWidth={2} />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
