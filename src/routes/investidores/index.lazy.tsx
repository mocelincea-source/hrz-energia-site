import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { BoltDecor } from "@/components/site/BoltDecor";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { BarChart3, FileText, FolderOpen, ArrowRight } from "lucide-react";
import videoHeader from "@/assets/VideoHeader-03.mp4";
import investidoresPoster from "@/assets/posters/investidores-poster.jpg";

export const Route = createLazyFileRoute("/investidores/")({
  component: InvestidoresIndexPage,
});

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
];

function InvestidoresIndexPage() {
  const { t } = useTranslation();

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
        videoSrc={videoHeader}
        posterSrc={investidoresPoster}
        compact
      />

      <section className="relative overflow-hidden bg-secondary pt-8 pb-14 lg:pt-10 lg:pb-16">
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

          <Stagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
