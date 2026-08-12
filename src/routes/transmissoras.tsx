import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/transmissoras")({
  head: () => ({
    meta: [
      { title: i18n.t("segments.transmission.meta.title") },
      { name: "description", content: i18n.t("segments.transmission.meta.description") },
      { property: "og:title", content: i18n.t("segments.transmission.meta.ogTitle") },
      { property: "og:description", content: i18n.t("segments.transmission.meta.ogDescription") },
    ],
  }),
});
