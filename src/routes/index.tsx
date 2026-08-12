import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: i18n.t("home.meta.title") },
      { name: "description", content: i18n.t("home.meta.description") },
      { property: "og:title", content: i18n.t("home.meta.ogTitle") },
      { property: "og:description", content: i18n.t("home.meta.ogDescription") },
    ],
  }),
});
