import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import { DocumentHero } from "@/components/site/DocumentHero";
import { CompanyDocumentList, type CompanySection } from "@/components/site/DocumentAccordion";

export const Route = createFileRoute("/etica/politica-anticorrupcao")({
  head: () => ({
    meta: [
      { title: `Política Anticorrupção | ${i18n.t("ethics.meta.title")}` },
      {
        name: "description",
        content:
          "Diretrizes para prevenção, detecção e tratamento de práticas de corrupção em todas as operações HRZ.",
      },
    ],
  }),
  component: PoliticaAnticorrupcaoPage,
});

// ─── Dados por ano ────────────────────────────────────────────────────────────

const DOCS_BY_YEAR: Record<string, CompanySection[]> = {
  "2025": [
    {
      company: "Documentos da Política Anticorrupção",
      groups: [
        {
          id: "politica-anticorrupcao-docs",
          label: "Política Anticorrupção",
          items: [
            {
              title: "Responsible Procurement Policy",
              date: "12/03/2025",
              href: "/documentos/politica-anticorrupção/politica 2025/Responsible Procurement Policy.pdf",
            },
            {
              title: "Política de Compras Responsáveis",
              date: "11/03/2025",
              href: "/documentos/politica-anticorrupção/politica 2025/Política de Compras Responsáveis .pdf",
            },
          ],
        },
      ],
    },
  ],
  "2024": [
    {
      company: "Documentos da Política Anticorrupção",
      groups: [
        {
          id: "politica-anticorrupcao-docs",
          label: "Política Anticorrupção",
          items: [
            {
              title: "Política Anticorrupção",
              date: "01/01/2024",
              href: "/documentos/politica-anticorrupção/politica 2024/Política Anticorrupção.pdf",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

function PoliticaAnticorrupcaoPage() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const sections = DOCS_BY_YEAR[selectedYear] ?? DOCS_BY_YEAR["2025"];

  return (
    <>
      <DocumentHero
        title="Política Anticorrupção"
        subtitle="Diretrizes para prevenção, detecção e tratamento de práticas de corrupção em todas as operações HRZ."
        breadcrumbs={[
          { label: "Ética e Conduta", to: "/etica" },
          { label: "Política Anticorrupção" },
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
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-400"
              />
            </div>
          </div>

          <CompanyDocumentList
            sections={sections}
            defaultValue={["politica-anticorrupcao-docs"]}
          />
        </div>
      </section>
    </>
  );
}
