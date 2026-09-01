import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      { title: "Social | ESG na HRZ | HRZ Energia" },
      {
        name: "description",
        content:
          "Colocamos a vida em primeiro lugar e atuamos para gerar impacto positivo nas comunidades onde estamos presentes, com respeito, escuta ativa e compromisso de longo prazo.",
      },
      { property: "og:title", content: "Social | ESG na HRZ | HRZ Energia" },
      {
        property: "og:description",
        content:
          "Conheça os compromissos sociais da HRZ Energia: segurança, pessoas, comunidades e stakeholders.",
      },
    ],
  }),
});
