import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import { DocumentHero } from "@/components/site/DocumentHero";
import { CompanyDocumentList, type CompanySection } from "@/components/site/DocumentAccordion";

export const Route = createFileRoute("/investidores/outros-documentos")({
  head: () => ({
    meta: [
      { title: `Outros Documentos | ${i18n.t("investors.meta.title")}` },
      {
        name: "description",
        content:
          "Escrituras de emissão, AGDs, ICSDs e demais documentos corporativos do grupo HRZ Energia.",
      },
    ],
  }),
  component: OutrosDocumentosPage,
});

// ─── Dados ────────────────────────────────────────────────────────────────────
// Títulos, datas e categorias copiados LITERALMENTE do site legado.
// Erros de digitação originais preservados ("Debentures", "2o", "5a").
// href deixado como "" para substituição pelos links reais.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS: CompanySection[] = [
  // 1 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Éden Empreendimentos e Participações S.A.",
    groups: [
      {
        id: "eden-emissao",
        label: "Emissão de Debêntures",
        items: [
          {
            title: "Escritura de Emissão",
            date: "30/01/2026",
            href: "/documentos/outros-documentos/Éden Empreendimentos e Participações S.A/Emissão de Debêntures/projeto_eden_escritura_de_emissao_v._assinada55642149.1.pdf",
          },
          {
            title: "Escritura de Emissão - 1º aditamento",
            date: "30/01/2026",
            href: "/documentos/outros-documentos/Éden Empreendimentos e Participações S.A/Emissão de Debêntures/projeto_eden_1o_aditamento_escritura_de_emissao_v.assinada.pdf",
          },
          {
            title: "Anúncio de Encerramento",
            date: "30/01/2026",
            href: "/documentos/outros-documentos/Éden Empreendimentos e Participações S.A/Emissão de Debêntures/anuncio_de_encerramento.pdf",
          },
          {
            title: "Anúncio de Início",
            date: "29/01/2026",
            href: "/documentos/outros-documentos/Éden Empreendimentos e Participações S.A/Emissão de Debêntures/projeto_eden_anuncio_de_inicio_v._final_pdf55705034.1.pdf",
          },
        ],
      },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────────────────
  {
    // Nome preservado com espaço antes do traço: "SP -MG"
    company: "TRANSMISSORA SP -MG S.A.",
    groups: [
      {
        id: "spmg-agd-2a",
        label: "AGD 2ª Emissão - MGSP12",
        items: [
          {
            title: "Edital de Convocação AGD - 12/02/2026",
            date: "11/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/AGD 2ª Emissão - MGSP12/Edital de Convocação AGD - 12_02_2026.pdf",
          },
          {
            title: "Instrução de voto à distância AGD - 12/02/2026",
            date: "11/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/AGD 2ª Emissão - MGSP12/Instrução de voto à distância  AGD - 12_02_2026.pdf",
          },
        ],
      },
      {
        id: "spmg-agd-4a",
        label: "AGD 4ª Emissão - MGSP14",
        items: [
          {
            title: "Edital de Convocação AGD - 12/02/2026",
            date: "11/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/AGD 4ª Emissão - MGSP14/Edital de Convocação AGD - 12_02_2026.pdf",
          },
          {
            title: "Instrução de voto à distância AGD - 12/02/2026",
            date: "11/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/AGD 4ª Emissão - MGSP14/Instrução de voto à distância  AGD - 12_02_2026.pdf",
          },
        ],
      },
      {
        // "Debentures" sem acento e "5ª Emissão" preservados do legado
        id: "spmg-emissao-5a",
        label: "Emissão de Debentures - 5ª Emissão",
        items: [
          {
            title: "Anúncio de Encerramento",
            date: "26/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/Anúncio de Encerramento.pdf",
          },
          {
            title: "Anúncio de Início",
            date: "25/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/Anúncio de Início.pdf",
          },
          {
            // "2o" preservado do legado (sem ordinal feminino/masculino)
            title: "2o Aditamento à Escritura de Emissão",
            date: "25/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/2o Aditamento à Escritura de Emissão.pdf",
          },
          {
            title: "Comunicado ao Mercado",
            date: "25/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/Comunicado ao Mercado.pdf",
          },
          {
            title: "Comunicado ao Mercado",
            date: "24/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/Comunicado ao Mercado2.pdf",
          },
          {
            title: "Aviso ao Mercado",
            date: "19/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/Aviso ao Mercado.pdf",
          },
          {
            // "1o" preservado do legado
            title: "1o Aditamento à Escritura de Emissão",
            date: "13/02/2026",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/1o Aditamento à Escritura de Emissão.pdf",
          },
          {
            // "5a" preservado do legado
            title: "Escritura de Emissão - 5a Emissão",
            date: "19/12/2025",
            href: "/documentos/outros-documentos/TRANSMISSORA SP -MG S.A/Emissão de Debentures - 5ª Emissão/Escritura de Emissão - 5a Emissão .pdf",
          },
        ],
      },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────────────────
  {
    company: "HRZ ES - Horizon Transmissão ES S.A.",
    groups: [
      {
        id: "hrz-es-agd",
        label: "AGD",
        items: [
          {
            title: "Edital de Convocação AGD - 02/06/2023",
            date: "02/06/2023",
            href: "/documentos/outros-documentos/HRZ ES - Horizon Transmissão ES S.A/AGD/Edital de Convocação AGD - 02_06_2023.pdf",
          },
        ],
      },
      {
        id: "hrz-es-icsd",
        label: "ICSD",
        items: [
          {
            title: "ICSD 2025 - HRZ ES",
            date: "31/12/2025",
            href: "/documentos/outros-documentos/HRZ ES - Horizon Transmissão ES S.A/ICSD/ICSD 2025 - HRZ ES.pdf",
          },
          {
            title: "ICSD 2024 - HRZ ES",
            date: "31/12/2024",
            href: "/documentos/outros-documentos/HRZ ES - Horizon Transmissão ES S.A/ICSD/ICSD 2024 - HRZ ES.pdf",
          },
          {
            title: "ICSD 2023 - HRZ ES",
            date: "31/12/2023",
            href: "/documentos/outros-documentos/HRZ ES - Horizon Transmissão ES S.A/ICSD/ICSD 2023 - HRZ ES.pdf",
          },
          {
            title: "ICSD 2022 - HRZ ES",
            date: "31/12/2022",
            href: "/documentos/outros-documentos/HRZ ES - Horizon Transmissão ES S.A/ICSD/ICSD 2022 - HRZ ES.pdf",
          },
        ],
      },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────────────────
  {
    company: "HRZ Transmissão e Participações S.A.",
    groups: [
      {
        id: "hrz-tp-icsd",
        label: "ICSD",
        items: [
          {
            // Caixa alta preservada do legado
            title: "ICSD 2025 - HRZ TRANSMISSÃO E PARTICIPAÇÕES S.A.",
            date: "31/12/2025",
            href: "/documentos/outros-documentos/HRZ Transmissão e Participações S.A/ICSD/ICSD 2025 - HRZ TRANSMISSÃO E PARTICIPAÇÕES S.A..pdf",
          },
        ],
      },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Edge Empreendimentos e Participações S.A.",
    groups: [
      {
        id: "edge-emissao",
        label: "Emissão de Debêntures",
        items: [
          {
            title: "Anúncio de Encerramento",
            date: "30/04/2025",
            href: "/documentos/outros-documentos/Edge Empreendimentos e Participações S.A/Emissão de Debêntures/Anúncio de Encerramento.pdf",
          },
          {
            title: "Comunicado ao Mercado",
            date: "28/04/2025",
            href: "/documentos/outros-documentos/Edge Empreendimentos e Participações S.A/Emissão de Debêntures/Comunicado ao Mercado.pdf",
          },
          {
            title: "Anúncio de Início",
            date: "23/04/2025",
            href: "/documentos/outros-documentos/Edge Empreendimentos e Participações S.A/Emissão de Debêntures/Anúncio de Início.pdf",
          },
        ],
      },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────────────────
  {
    company: "Victory Empreendimentos e Participações S.A.",
    groups: [
      {
        id: "victory-emissao",
        label: "Emissão de Debêntures",
        items: [
          {
            title: "Anúncio de Encerramento",
            date: "29/05/2025",
            href: "/documentos/outros-documentos/Victory Empreendimentos e Participações S.A/Emissão de Debêntures/Anúncio de Encerramento.pdf",
          },
          {
            title: "Anúncio de Início",
            date: "22/05/2025",
            href: "/documentos/outros-documentos/Victory Empreendimentos e Participações S.A/Emissão de Debêntures/Anúncio de Início.pdf",
          },
        ],
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

function OutrosDocumentosPage() {
  return (
    <>
      <DocumentHero
        title="Outros documentos"
        subtitle="Escrituras de emissão, AGDs, ICSDs e demais documentos corporativos das empresas do grupo HRZ Energia."
        breadcrumbs={[
          { label: "Relações com investidores", to: "/investidores" },
          { label: "Outros documentos" },
        ]}
      />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <BoltDecor
          variant="outline"
          opacity={0.03}
          className="-right-24 top-20 h-[480px] w-auto"
        />
        <div className="container-hrz relative">
          <CompanyDocumentList sections={SECTIONS} defaultValue={["spmg-emissao-5a"]} />
        </div>
      </section>
    </>
  );
}
