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
            href: "",
          },
          {
            title: "Demonstrações financeiras 2024 - HRZ Transmissão e Participações",
            date: "31/12/2024",
            href: "",
          },
          {
            // Typo preservado do legado: "Trasnsmissão"
            title: "Demonstrações Financeiras 2023 - HRZ Trasnsmissão e Participações",
            date: "31/12/2023",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2022 - HRZ Transmissão e Participações",
            date: "31/12/2022",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2021 - HRZ Transmissão e Participações",
            date: "31/12/2021",
            href: "",
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
            href: "",
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
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2024 - HRZ ES",
            date: "31/12/2024",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2023 - HRZ ES",
            date: "31/12/2023",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2022 - HRZ ES",
            date: "31/12/2022",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2021 - HRZ ES",
            date: "31/12/2021",
            href: "",
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
            href: "",
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
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2024 - HRZ Transmissora SPMG",
            date: "31/12/2024",
            href: "",
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
            href: "",
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
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2024 - Transmissão Aliança SC",
            date: "31/12/2024",
            href: "",
          },
        ],
      },
      {
        id: "alianca-dcr",
        label: "Demonstrações Contábeis Regulatórias",
        items: [],
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
            href: "",
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
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2025 - SE Vineyards Transmissão de Energia",
            date: "31/12/2025",
            href: "",
          },
          {
            title: "3 ITR 2025 - SE Vineyards Transmissão de Energia",
            date: "30/09/2025",
            href: "",
          },
          {
            title: "2 ITR 2025 - SE Vineyards Transmissão de Energia",
            date: "30/06/2025",
            href: "",
          },
          {
            title: "1 ITR 2025 - SE Vineyards Transmissão de Energia",
            date: "31/03/2025",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2024 - SE Vineyards Transmissão de Energia",
            date: "31/12/2024",
            href: "",
          },
          {
            title: "3 ITR 2024 - SE Vineyards Transmissão de Energia",
            date: "30/09/2024",
            href: "",
          },
          {
            title: "2 ITR 2024 - SE Vineyards Transmissão de Energia",
            date: "30/06/2024",
            href: "",
          },
          {
            title: "1 ITR 2024 - SE Vineyards Transmissão de Energia",
            date: "31/03/2024",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2023 - SE Vineyards Transmissão de Energia",
            date: "31/12/2023",
            href: "",
          },
          {
            title: "3 ITR 2023 - SE Vineyards Transmissão de Energia",
            date: "30/09/2023",
            href: "",
          },
          {
            title: "2 ITR 2023 - SE Vineyards Transmissão de Energia",
            date: "30/06/2023",
            href: "",
          },
          {
            title: "1 ITR 2023 - SE Vineyards Transmissão de Energia",
            date: "31/03/2023",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2022 - SE Vineyards Transmissão de Energia",
            date: "31/12/2022",
            href: "",
          },
          {
            title: "3 ITR 2022 - SE Vineyards Transmissão de Energia",
            date: "30/09/2022",
            href: "",
          },
          {
            title: "2 ITR 2022 - SE Vineyards Transmissão de Energia",
            date: "30/06/2022",
            href: "",
          },
          {
            title: "1 ITR 2022 - SE Vineyards Transmissão de Energia",
            date: "31/03/2022",
            href: "",
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
            href: "",
          },
          {
            title: "DCRs 2024 - SE Vineyards Transmissão de Energia",
            date: "31/12/2024",
            href: "",
          },
          {
            title: "DCRs 2023 - SE Vineyards Transmissão de Energia",
            date: "31/12/2023",
            href: "",
          },
          {
            title: "DCRs 2022 - SE Vineyards Transmissão de Energia",
            date: "31/12/2022",
            href: "",
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
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2024 - Água Vermelha Transmissão de Energia- AVT",
            date: "31/12/2024",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2023 - Água Vermelha Transmissão de Energia- AVT",
            date: "31/12/2023",
            href: "",
          },
          {
            title: "Demonstrações Financeiras 2022 - Água Vermelha Transmissão de Energia- AVT",
            date: "31/12/2022",
            href: "",
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
            href: "",
          },
          {
            title: "DCRs 2024 - Água Vermelha Transmissão de Energia",
            date: "31/12/2024",
            href: "",
          },
          {
            title: "DCRs 2023 - Água Vermelha Transmissão de Energia",
            date: "31/12/2023",
            href: "",
          },
          {
            title: "DCRs 2022 - Água Vermelha Transmissão de Energia",
            date: "31/12/2022",
            href: "",
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
            href: "",
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
