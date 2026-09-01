import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ambiental")({
  head: () => ({
    meta: [
      { title: "Ambiental | ESG na HRZ | HRZ Energia" },
      {
        name: "description",
        content:
          "Gerimos nossos ativos com responsabilidade ambiental, antecipamos riscos climáticos e promovemos a conservação da biodiversidade para uma infraestrutura energética mais sustentável e resiliente.",
      },
      { property: "og:title", content: "Ambiental | ESG na HRZ | HRZ Energia" },
      {
        property: "og:description",
        content:
          "Conheça os compromissos ambientais da HRZ Energia: resiliência climática, gestão ambiental, biodiversidade e conformidade.",
      },
    ],
  }),
});
