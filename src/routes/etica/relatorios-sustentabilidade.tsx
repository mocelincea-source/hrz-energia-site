import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import { DocumentHero } from "@/components/site/DocumentHero";
import { CompanyDocumentList, type CompanySection } from "@/components/site/DocumentAccordion";

export const Route = createFileRoute("/etica/relatorios-sustentabilidade")({
  head: () => ({
    meta: [
      { title: `Relatórios de Sustentabilidade | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Acesse nossos relatórios anuais de desempenho ESG e sustentabilidade.",
      },
    ],
  }),
  component: RelatoriosSustentabilidadePage,
});

// ─── Dados por ano ────────────────────────────────────────────────────────────

const DOCS_BY_YEAR: Record<string, CompanySection[]> = {
  "2024": [
    {
      company: "Relatório de Sustentabilidade",
      groups: [
        {
          id: "relatorios-sustentabilidade-docs",
          label: "Relatório de Sustentabilidade",
          items: [
            {
              title: "Relatório de Sustentabilidade 2024",
              date: "29/04/2025",
              href: "/documentos/relatorios-sustentabilidade/relatorio 2024/Relatório de Sustentabilidade 2024.pdf",
            },
          ],
        },
      ],
    },
  ],
  "2023": [
    {
      company: "Relatório de Sustentabilidade",
      groups: [
        {
          id: "relatorios-sustentabilidade-docs",
          label: "Relatório de Sustentabilidade",
          items: [
            {
              title: "Relatório de Sustentabilidade 2023",
              date: "01/01/2024",
              href: "/documentos/relatorios-sustentabilidade/relatorio 2023/Relatório de Sustentabilidade 2023.pdf",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

function RelatoriosSustentabilidadePage() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const sections = DOCS_BY_YEAR[selectedYear] ?? DOCS_BY_YEAR["2024"];

  return (
    <>
      <DocumentHero
        title="Relatórios de Sustentabilidade"
        subtitle="Acesse nossos relatórios anuais de desempenho ESG e sustentabilidade."
        breadcrumbs={[
          { label: "Ética e Conduta", to: "/etica" },
          { label: "Relatórios de Sustentabilidade" },
        ]}
      />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <BoltDecor
          variant="outline"
          opacity={0.03}
          className="-right-24 top-10 h-[500px] w-auto"
        />
        <div className="container-hrz relative">
          {/* Year filter */}
          <div className="mb-6 flex w-full justify-end">
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-24 cursor-pointer appearance-none rounded-full border border-blue-200 bg-transparent py-2 pl-4 pr-8 text-center text-sm text-blue-900 outline-none transition-colors hover:border-blue-400"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-400"
              />
            </div>
          </div>

          <CompanyDocumentList
            sections={sections}
            defaultValue={["relatorios-sustentabilidade-docs"]}
          />
        </div>
      </section>
    </>
  );
}
