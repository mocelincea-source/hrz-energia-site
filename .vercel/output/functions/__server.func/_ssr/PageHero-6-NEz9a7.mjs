import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { r as raioSolid } from "./raio-solid-gradient-DUOEdOlR.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { Z as Zap } from "../_libs/lucide-react.mjs";
const raio = "/assets/raio-hrz-outline-oEVWyO4a.png";
function PlatformTag({
  variant = "dark",
  className = ""
}) {
  const isDark = variant === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.span,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: `inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide ${isDark ? "border border-white/15 bg-white/5 text-white/85" : "border border-hrz-electric/20 bg-hrz-electric/10 text-hrz-deep"} ${className}`,
      children: [
        "Plataforma Integrada de Energia",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 12, className: "text-hrz-electric", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDark ? "text-white/70" : "text-hrz-mid", children: "Transmissão & Geração" })
      ]
    }
  );
}
function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "deep"
}) {
  const bg = variant === "green" ? "bg-gradient-to-br from-hrz-green-dark via-hrz-green to-hrz-green-vivid" : "bg-hrz-deep-radial";
  const eyebrowColor = variant === "green" ? "text-white/85" : "text-hrz-electric";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `relative isolate overflow-hidden ${bg} pt-32 pb-20 text-white lg:pt-40 lg:pb-28`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.img,
      {
        src: raio,
        alt: "",
        "aria-hidden": true,
        initial: { opacity: 0, scale: 1.1, rotate: -4 },
        animate: { opacity: 0.08, scale: 1, rotate: 0 },
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
        className: "pointer-events-none absolute -right-28 -top-10 hidden h-[135%] w-auto md:block"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: raioSolid,
        alt: "",
        "aria-hidden": true,
        style: { opacity: 0.12 },
        className: "pointer-events-none absolute -left-12 bottom-[-60px] hidden h-[62%] w-auto md:block"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-hrz relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformTag, { variant: "dark", className: "mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          className: `eyebrow ${eyebrowColor}`,
          children: eyebrow
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
          className: "display-mega mt-5 max-w-4xl text-balance text-4xl text-white sm:text-5xl lg:text-6xl",
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
          className: "mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base",
          children: subtitle
        }
      )
    ] })
  ] });
}
export {
  PageHero as P
};
