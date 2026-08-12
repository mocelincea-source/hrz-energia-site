import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: i18n.t("contact.meta.title") },
      { name: "description", content: i18n.t("contact.meta.description") },
      { property: "og:title", content: i18n.t("contact.meta.ogTitle") },
      { property: "og:description", content: i18n.t("contact.meta.ogDescription") },
    ],
  }),
});
