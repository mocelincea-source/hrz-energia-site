import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageToggle({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "pt";
  const isDark = variant === "dark";

  function toggle() {
    i18n.changeLanguage(lang === "pt" ? "en" : "pt");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("language.label")}
      title={t("language.switchTo")}
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition " +
        (isDark
          ? "border-white/25 text-white/85 hover:border-hrz-electric hover:text-hrz-electric"
          : "border-foreground/20 text-foreground/75 hover:border-hrz-electric hover:text-hrz-electric")
      }
    >
      <Languages size={14} />
      {t("language.switchTo")}
    </button>
  );
}
