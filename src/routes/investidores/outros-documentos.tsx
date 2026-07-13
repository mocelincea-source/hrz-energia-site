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
            href: "",
          },
          {
            title: "Escritura de Emissão - 1º aditamento",
            date: "30/01/2026",
            href: "",
          },
          {
            title: "Anúncio de Encerramento",
            date: "30/01/2026",
            href: "",
          },
          {
            title: "Anúncio de Início",
            date: "29/01/2026",
            href: "",
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
            href: "",
          },
          {
            title: "Instrução de voto à distância AGD - 12/02/2026",
            date: "11/02/2026",
            href: "",
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
            href: "",
          },
          {
            title: "Instrução de voto à distância AGD - 12/02/2026",
            date: "11/02/2026",
            href: "",
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
            href: "",
          },
          {
            title: "Anúncio de Início",
            date: "25/02/2026",
            href: "",
          },
          {
            // "2o" preservado do legado (sem ordinal feminino/masculino)
            title: "2o Aditamento à Escritura de Emissão",
            date: "25/02/2026",
            href: "",
          },
          {
            title: "Comunicado ao Mercado",
            date: "25/02/2026",
            href: "",
          },
          {
            title: "Comunicado ao Mercado",
            date: "24/02/2026",
            href: "",
          },
          {
            title: "Aviso ao Mercado",
            date: "19/02/2026",
            href: "",
          },
          {
            // "1o" preservado do legado
            title: "1o Aditamento à Escritura de Emissão",
            date: "13/02/2026",
            href: "",
          },
          {
            // "5a" preservado do legado
            title: "Escritura de Emissão - 5a Emissão",
            date: "19/12/2025",
            href: "",
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
            href: "",
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
            href: "",
          },
          {
            title: "ICSD 2024 - HRZ ES",
            date: "31/12/2024",
            href: "",
          },
          {
            title: "ICSD 2023 - HRZ ES",
            date: "31/12/2023",
            href: "",
          },
          {
            title: "ICSD 2022 - HRZ ES",
            date: "31/12/2022",
            href: "",
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
            href: "",
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
            href: "",
          },
          {
            title: "Comunicado ao Mercado",
            date: "28/04/2025",
            href: "",
          },
          {
            title: "Anúncio de Início",
            date: "23/04/2025",
            href: "",
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
            href: "",
          },
          {
            title: "Anúncio de Início",
            date: "22/05/2025",
            href: "",
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
