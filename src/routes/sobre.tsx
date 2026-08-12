import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: i18n.t("about.meta.title") },
      { name: "description", content: i18n.t("about.meta.description") },
      { property: "og:title", content: i18n.t("about.meta.ogTitle") },
      { property: "og:description", content: i18n.t("about.meta.ogDescription") },
    ],
  }),
});
