import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/eolicas")({
  head: () => ({
    meta: [
      { title: i18n.t("segments.wind.meta.title") },
      { name: "description", content: i18n.t("segments.wind.meta.description") },
      { property: "og:title", content: i18n.t("segments.wind.meta.ogTitle") },
      { property: "og:description", content: i18n.t("segments.wind.meta.ogDescription") },
    ],
  }),
});
