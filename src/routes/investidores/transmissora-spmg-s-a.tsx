import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";
import { BoltDecor } from "@/components/site/BoltDecor";
import { DocumentHero } from "@/components/site/DocumentHero";
import { CompanyDocumentList, type CompanySection } from "@/components/site/DocumentAccordion";

export const Route = createFileRoute("/investidores/transmissora-spmg-s-a")({
  head: () => ({
    meta: [
      { title: `Transmissora SPMG S.A. | ${i18n.t("investors.meta.title")}` },
      {
        name: "description",
        content:
          "Documentação financeira da Transmissora SPMG S.A.",
      },
    ],
  }),
  component: TransmissoraSpmgPage,
});

// ─── Dados ────────────────────────────────────────────────────────────────────
// Conteúdo copiado literalmente do site legado.
// href deixado como "" para substituição pelo link real.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS: CompanySection[] = [
  {
    company: "Transmissora SPMG S.A.",
    groups: [
      {
        id: "spmg-dem-fin",
        label: "Demonstrações Financeiras",
        items: [],
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

function TransmissoraSpmgPage() {
  return (
    <>
      <DocumentHero
        title="Transmissora SPMG S.A."
        subtitle="Documentação financeira da Transmissora SPMG S.A."
        breadcrumbs={[
          { label: "Relações com investidores", to: "/investidores" },
          { label: "Transmissora SPMG S.A." },
        ]}
      />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <BoltDecor
          variant="outline"
          opacity={0.03}
          className="-left-20 top-10 h-[500px] w-auto"
        />
        <BoltDecor
          variant="solid"
          opacity={0.03}
          className="-right-20 bottom-10 h-[400px] w-auto"
        />
        <div className="container-hrz relative">
          <CompanyDocumentList sections={SECTIONS} defaultValue={["spmg-dem-fin"]} />
        </div>
      </section>
    </>
  );
}
