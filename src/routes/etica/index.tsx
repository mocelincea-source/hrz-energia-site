import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/i18n/config";

export const Route = createFileRoute("/etica/")({
  head: () => ({
    meta: [
      { title: i18n.t("ethics.meta.title") },
      { name: "description", content: i18n.t("ethics.meta.description") },
      { property: "og:title", content: i18n.t("ethics.meta.ogTitle") },
      { property: "og:description", content: i18n.t("ethics.meta.ogDescription") },
    ],
  }),
});
