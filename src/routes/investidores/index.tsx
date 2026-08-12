import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/investidores/")({
  head: () => ({
    meta: [
      { title: i18n.t("investors.meta.title") },
      { name: "description", content: i18n.t("investors.meta.description") },
      { property: "og:title", content: i18n.t("investors.meta.ogTitle") },
      { property: "og:description", content: i18n.t("investors.meta.ogDescription") },
    ],
  }),
});
