import { Zap } from "lucide-react";
import { motion } from "motion/react";

export function PlatformTag({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide ${
        isDark
          ? "border border-white/15 bg-white/5 text-white/85"
          : "border border-hrz-electric/20 bg-hrz-electric/10 text-hrz-deep"
      } ${className}`}
    >
      Plataforma Integrada de Energia
      <Zap size={12} className="text-hrz-electric" fill="currentColor" />
      <span className={isDark ? "text-white/70" : "text-hrz-mid"}>
        Transmissão &amp; Geração
      </span>
    </motion.span>
  );
}
