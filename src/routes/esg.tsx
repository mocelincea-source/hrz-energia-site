import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/esg")({
  head: () => ({
    meta: [
      { title: i18n.t("esg.meta.title") },
      { name: "description", content: i18n.t("esg.meta.description") },
      { property: "og:title", content: i18n.t("esg.meta.ogTitle") },
      { property: "og:description", content: i18n.t("esg.meta.ogDescription") },
    ],
  }),
});
