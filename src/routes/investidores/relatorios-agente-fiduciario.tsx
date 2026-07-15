import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import { DocumentHero } from "@/components/site/DocumentHero";
import { CompanyDocumentList, type CompanySection } from "@/components/site/DocumentAccordion";

export const Route = createFileRoute("/investidores/relatorios-agente-fiduciario")({
  head: () => ({
    meta: [
      { title: `Relatórios Agente Fiduciário | ${i18n.t("investors.meta.title")}` },
      {
        name: "description",
        content:
          "Relatórios anuais dos agentes fiduciários das emissões de debêntures do grupo HRZ Energia.",
      },
    ],
  }),
  component: RelatoriosAgenteFiduciarioPage,
});

// ─── Dados ────────────────────────────────────────────────────────────────────
// Títulos, códigos e datas copiados LITERALMENTE do site legado.
// href deixado como "" para substituição pelos links reais.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS: CompanySection[] = [
  {
    company: "Grupo HRZ Transmissoras",
    groups: [
      {
        id: "af-2023",
        label: "Relatório Anual do Agente Fiduciário - 2023",
        items: [
          {
            title: "NVHZ13 - HRZ Transmissora - Relatório Anual do AF - 2023",
            date: "31/12/2023",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2023/NVHZ13 - HRZ Transmissora - Relatório Anual do AF - 2023.pdf",
          },
        ],
      },
      {
        id: "af-2024",
        label: "Relatório Anual do Agente Fiduciário - 2024",
        items: [],
      },
      {
        id: "af-2025",
        label: "Relatório Anual do Agente Fiduciário - 2025",
        items: [
          {
            title: "NVHZ13 - HRZ Transmissora - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/NVHZ13 - HRZ Transmissora - Relatório Anual do AF - 2025.pdf",
          },
          {
            title: "EDFY11 - Edify - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/EDFY11  - Edify - Relatório Anual do AF - 2025.pdf",
          },
          {
            title: "VNYD12 - Vineyards - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/VNYD12 - Vineyards - Relatório Anual do AF - 2025.pdf",
          },
          {
            title: "MGSP14 - SPMG 4ª Emissão - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/MGSP14 - SPMG 4ª Emissão - Relatório Anual do AF - 2025.pdf",
          },
          {
            title: "EDGY11 - Edge - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/EDGY11 - Edge - Relatório Anual do AF - 2025.pdf",
          },
          {
            title: "VICY11 - Victory - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/VICY11  - Victory - Relatório Anual do AF - 2025.pdf",
          },
          {
            title: "MGSP12 - SPMG 2ª Emissão - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/MGSP12 - SPMG 2ª Emissão - Relatório Anual do AF - 2025.pdf",
          },
          {
            title: "EDPT11 - Horizon ES - Relatório Anual do AF - 2025",
            date: "31/12/2025",
            href: "/documentos/relatorios-agente-fiduciario/Grupo HRZ Transmissoras/Relatório Anual do Agente Fiduciário - 2025/EDPT11 - Horizon ES - Relatório Anual do AF - 2025.pdf",
          },
        ],
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

function RelatoriosAgenteFiduciarioPage() {
  return (
    <>
      <DocumentHero
        title="Relatórios agente fiduciário"
        subtitle="Relatórios anuais emitidos pelos agentes fiduciários das emissões de debêntures do grupo HRZ Energia."
        breadcrumbs={[
          { label: "Relações com investidores", to: "/investidores" },
          { label: "Relatórios agente fiduciário" },
        ]}
      />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <BoltDecor
          variant="solid"
          opacity={0.03}
          className="-left-20 bottom-10 h-[480px] w-auto"
        />
        <div className="container-hrz relative">
          <CompanyDocumentList sections={SECTIONS} defaultValue={["af-2025"]} />
        </div>
      </section>
    </>
  );
}
