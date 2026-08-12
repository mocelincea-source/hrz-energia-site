import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: i18n.t("segments.portfolio.meta.title") },
      { name: "description", content: i18n.t("segments.portfolio.meta.description") },
      { property: "og:title", content: i18n.t("segments.portfolio.meta.ogTitle") },
      { property: "og:description", content: i18n.t("segments.portfolio.meta.ogDescription") },
    ],
  }),
});
