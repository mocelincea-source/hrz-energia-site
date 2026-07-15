import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import { DocumentHero } from "@/components/site/DocumentHero";
import { CompanyDocumentList, type CompanySection } from "@/components/site/DocumentAccordion";

export const Route = createFileRoute("/investidores/demonstracoes-financeiras")({
  head: () => ({
    meta: [
      { title: `Demonstrações Financeiras | ${i18n.t("investors.meta.title")}` },
      {
        name: "description",
        content:
          "Demonstrações financeiras auditadas das empresas do grupo HRZ Energia.",
      },
    ],
  }),
  component: DemonstracoesFinanceirasPage,
});

// ─── Dados ────────────────────────────────────────────────────────────────────
// Títulos, datas e categorias copiados LITERALMENTE do site legado.
// href deixado como "" para substituição pelos links reais.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS: CompanySection[] = [
  // 1 ─────────────────────────────────────────────────────────────────────────
  {
    company: "HRZ Transmissão e Participações S.A.",
    groups: [
      {
        id: "hrz-tp-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações financeiras 2025 - HRZ Transmissão e Participações",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/HRZ Transmissão e Participações S.A/Demonstrações financeiras/Demonstrações financeiras 2025  - HRZ Transmissão e Participações .pdf",
          },
          {
            title: "Demonstrações financeiras 2024 - HRZ Transmissão e Participações",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/HRZ Transmissão e Participações S.A/Demonstrações financeiras/Demonstrações financeiras 2024  - HRZ Transmissão e Participações.pdf",
          },
          {
            // Typo preservado do legado: "Trasnsmissão"
            title: "Demonstrações Financeiras 2023 - HRZ Trasnsmissão e Participações",
            date: "31/12/2023",
            href: "/documentos/demonstracoes-financeiras/HRZ Transmissão e Participações S.A/Demonstrações financeiras/Demonstrações Financeiras 2023 - HRZ Trasnsmissão e Participações.pdf",
          },
          {
            title: "Demonstrações Financeiras 2022 - HRZ Transmissão e Participações",
            date: "31/12/2022",
            href: "/documentos/demonstracoes-financeiras/HRZ Transmissão e Participações S.A/Demonstrações financeiras/Demonstrações Financeiras 2022 - HRZ Transmissão e Participações.pdf",
          },
          {
            title: "Demonstrações Financeiras 2021 - HRZ Transmissão e Participações",
            date: "31/12/2021",
            href: "/documentos/demonstracoes-financeiras/HRZ Transmissão e Participações S.A/Demonstrações financeiras/Demonstrações Financeiras 2021 - HRZ Transmissão e Participações.pdf",
          },
        ],
      },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Horizon Transmissão MA I S.A.",
    groups: [
      {
        id: "horizon-ma1-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações financeiras 2025 - TMA I",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Horizon Transmissão MA I S.A/Demonstrações financeiras/Demonstrações financeiras 2025 - TMA I.pdf",
          },
        ],
      },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────────────────
  {
    // Typo preservado do legado: "Tranmissão"
    company: "Horizon Tranmissão ES S.A.",
    groups: [
      {
        id: "horizon-es-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações Financeiras 2025 - HRZ ES",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Horizon Tranmissão ES S.A/Demonstrações financeiras/Demonstrações Financeiras 2025 - HRZ ES.pdf",
          },
          {
            title: "Demonstrações Financeiras 2024 - HRZ ES",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/Horizon Tranmissão ES S.A/Demonstrações financeiras/Demonstrações Financeiras 2024 - HRZ ES.pdf",
          },
          {
            title: "Demonstrações Financeiras 2023 - HRZ ES",
            date: "31/12/2023",
            href: "/documentos/demonstracoes-financeiras/Horizon Tranmissão ES S.A/Demonstrações financeiras/Demonstrações Financeiras 2023 - HRZ ES.pdf",
          },
          {
            title: "Demonstrações Financeiras 2022 - HRZ ES",
            date: "31/12/2022",
            href: "/documentos/demonstracoes-financeiras/Horizon Tranmissão ES S.A/Demonstrações financeiras/Demonstrações Financeiras 2022 - HRZ ES.pdf",
          },
          {
            title: "Demonstrações Financeiras 2021 - HRZ ES",
            date: "31/12/2021",
            href: "/documentos/demonstracoes-financeiras/Horizon Tranmissão ES S.A/Demonstrações financeiras/Demonstrações Financeiras 2021 - HRZ ES.pdf",
          },
        ],
      },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Edify Empreendimentos e Participações S.A.",
    groups: [
      {
        id: "edify-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações financeiras 2025 - Edify",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Edify Empreendimentos e Participações S.A/Demonstrações financeiras/Demonstrações financeiras 2025 - Edify.pdf",
          },
        ],
      },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Transmissora SPMG S.A.",
    groups: [
      {
        id: "spmg-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações Financeiras 2025 - HRZ Transmissora SPMG",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Transmissora SPMG S.A/Demonstrações financeiras/Demonstrações Financeiras 2025 - HRZ Transmissora SPMG.pdf",
          },
          {
            title: "Demonstrações Financeiras 2024 - HRZ Transmissora SPMG",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/Transmissora SPMG S.A/Demonstrações financeiras/Demonstrações Financeiras 2024 - HRZ Transmissora SPMG.pdf",
          },
        ],
      },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Edge Empreendimentos e Participações S.A.",
    groups: [
      {
        id: "edge-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações Financeiras 2025 - Edge",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Edge Empreendimentos e Participações S.A/Demonstrações financeiras/Demonstrações Financeiras 2025 - Edge.pdf",
          },
        ],
      },
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Aliança Transmissora de Energia S.A.",
    groups: [
      {
        id: "alianca-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações Financeiras 2025 - Transmissão Aliança SC",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Aliança Transmissora de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2025 - Transmissão Aliança SC.pdf",
          },
          {
            title: "Demonstrações Financeiras 2024 - Transmissão Aliança SC",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/Aliança Transmissora de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2024 - Transmissão Aliança SC.pdf",
          },
        ],
      },
      {
        id: "alianca-dcr",
        label: "Demonstrações Contábeis Regulatórias",
        items: [], // TODO: PDF pendente
      },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Victory Empreendimentos e Participações S.A.",
    groups: [
      {
        id: "victory-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações Financeiras 2025 - Victory 2025",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Victory Empreendimentos e Participações S.A/Demonstrações financeiras/Demonstrações Financeiras 2025 - Victory 2025.pdf",
          },
        ],
      },
    ],
  },

  // 9 ─────────────────────────────────────────────────────────────────────────
  {
    company: "SE Vineyards Transmissão de Energia S.A.",
    groups: [
      {
        id: "se-vineyards-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "1 ITR 2026 - SE Vineyards Transmissão de Energia",
            date: "31/03/2026",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/1 ITR 2026 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "Demonstrações Financeiras 2025 - SE Vineyards Transmissão de Energia",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2025 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "3 ITR 2025 - SE Vineyards Transmissão de Energia",
            date: "30/09/2025",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/3  ITR 2025 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "2 ITR 2025 - SE Vineyards Transmissão de Energia",
            date: "30/06/2025",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/2  ITR 2025 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "1 ITR 2025 - SE Vineyards Transmissão de Energia",
            date: "31/03/2025",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/1 ITR 2025 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "Demonstrações Financeiras 2024 - SE Vineyards Transmissão de Energia",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras  2024 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "3 ITR 2024 - SE Vineyards Transmissão de Energia",
            date: "30/09/2024",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/3  ITR 2024 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "2 ITR 2024 - SE Vineyards Transmissão de Energia",
            date: "30/06/2024",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/2 ITR 2024 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "1 ITR 2024 - SE Vineyards Transmissão de Energia",
            date: "31/03/2024",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/1 ITR 2024 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "Demonstrações Financeiras 2023 - SE Vineyards Transmissão de Energia",
            date: "31/12/2023",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2023 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "3 ITR 2023 - SE Vineyards Transmissão de Energia",
            date: "30/09/2023",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/3 ITR 2023 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "2 ITR 2023 - SE Vineyards Transmissão de Energia",
            date: "30/06/2023",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/2 ITR 2023 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "1 ITR 2023 - SE Vineyards Transmissão de Energia",
            date: "31/03/2023",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/1 ITR 2023 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "Demonstrações Financeiras 2022 - SE Vineyards Transmissão de Energia",
            date: "31/12/2022",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2022 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "3 ITR 2022 - SE Vineyards Transmissão de Energia",
            date: "30/09/2022",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/3 ITR 2022 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "2 ITR 2022 - SE Vineyards Transmissão de Energia",
            date: "30/06/2022",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/2 ITR 2022 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "1 ITR 2022 - SE Vineyards Transmissão de Energia",
            date: "31/03/2022",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações financeiras/1 ITR 2022 - SE Vineyards Transmissão de Energia.pdf",
          },
        ],
      },
      {
        id: "se-vineyards-dcr",
        label: "Demonstrações Contábeis Regulatórias",
        items: [
          {
            title: "DCRs 2025 - SE Vineyards Transmissão de Energia",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2025 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "DCRs 2024 - SE Vineyards Transmissão de Energia",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2024 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "DCRs 2023 - SE Vineyards Transmissão de Energia",
            date: "31/12/2023",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2023 - SE Vineyards Transmissão de Energia.pdf",
          },
          {
            title: "DCRs 2022 - SE Vineyards Transmissão de Energia",
            date: "31/12/2022",
            href: "/documentos/demonstracoes-financeiras/SE Vineyards Transmissão de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2022 - SE Vineyards Transmissão de Energia.pdf",
          },
        ],
      },
    ],
  },

  // 10 ────────────────────────────────────────────────────────────────────────
  {
    company: "Água Vermelha Transmissora de Energia S.A.",
    groups: [
      {
        id: "agua-vermelha-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações Financeiras 2025 - Água Vermelha Transmissão de Energia- AVT",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2025 - Água Vermelha Transmissão de Energia- AVT.pdf",
          },
          {
            title: "Demonstrações Financeiras 2024 - Água Vermelha Transmissão de Energia- AVT",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2024 - Água Vermelha Transmissão de Energia- AVT.pdf",
          },
          {
            title: "Demonstrações Financeiras 2023 - Água Vermelha Transmissão de Energia- AVT",
            date: "31/12/2023",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2023 - Água Vermelha Transmissão de Energia- AVT.pdf",
          },
          {
            title: "Demonstrações Financeiras 2022 - Água Vermelha Transmissão de Energia- AVT",
            date: "31/12/2022",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações financeiras/Demonstrações Financeiras 2022 - Água Vermelha Transmissão de Energia- AVT.pdf",
          },
        ],
      },
      {
        id: "agua-vermelha-dcr",
        label: "Demonstrações Contábeis Regulatórias",
        items: [
          {
            title: "DCRs 2025 - Água Vermelha Transmissão de Energia",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2025 - Água Vermelha Transmissão de Energia.pdf",
          },
          {
            title: "DCRs 2024 - Água Vermelha Transmissão de Energia",
            date: "31/12/2024",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2024 - Água Vermelha Transmissão de Energia.pdf",
          },
          {
            title: "DCRs 2023 - Água Vermelha Transmissão de Energia",
            date: "31/12/2023",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2023 - Água Vermelha Transmissão de Energia.pdf",
          },
          {
            title: "DCRs 2022 - Água Vermelha Transmissão de Energia",
            date: "31/12/2022",
            href: "/documentos/demonstracoes-financeiras/Água Vermelha Transmissora de Energia S.A/Demonstrações Contábeis Regulatórias/DCRs 2022 - Água Vermelha Transmissão de Energia.pdf",
          },
        ],
      },
    ],
  },

  // 11 ────────────────────────────────────────────────────────────────────────
  {
    company: "Transmissão Litoral Sul S.A.",
    groups: [
      {
        id: "litoral-sul-dem-fin",
        label: "Demonstrações financeiras",
        items: [
          {
            title: "Demonstrações financeiras 2025 - Litoral Sul",
            date: "31/12/2025",
            href: "/documentos/demonstracoes-financeiras/Transmissão Litoral Sul S.A/Demonstrações financeiras/Demonstrações financeiras 2025 - Litoral Sul.pdf",
          },
        ],
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

function DemonstracoesFinanceirasPage() {
  return (
    <>
      <DocumentHero
        title="Demonstrações financeiras"
        subtitle="Demonstrações financeiras auditadas das empresas do grupo HRZ Energia."
        breadcrumbs={[
          { label: "Relações com investidores", to: "/investidores" },
          { label: "Demonstrações financeiras" },
        ]}
      />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <BoltDecor
          variant="outline"
          opacity={0.03}
          className="-right-24 top-10 h-[500px] w-auto"
        />
        <div className="container-hrz relative">
          <CompanyDocumentList sections={SECTIONS} defaultValue={["hrz-tp-dem-fin"]} />
        </div>
      </section>
    </>
  );
}
