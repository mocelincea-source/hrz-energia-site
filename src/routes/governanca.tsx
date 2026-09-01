import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/governanca")({
  head: () => ({
    meta: [
      { title: "Governança | ESG na HRZ | HRZ Energia" },
      {
        name: "description",
        content:
          "Fortalecemos uma cultura de integridade, gestão de riscos e compliance para garantir decisões responsáveis, criação de valor sustentável e confiança de nossos stakeholders.",
      },
      {
        property: "og:title",
        content: "Governança | ESG na HRZ | HRZ Energia",
      },
      {
        property: "og:description",
        content:
          "Conheça os pilares de governança da HRZ Energia: ética, gestão de riscos, compliance, transparência e governança ESG.",
      },
    ],
  }),
});
