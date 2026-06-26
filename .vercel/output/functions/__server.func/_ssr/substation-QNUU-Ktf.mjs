import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const mapaImg = "/assets/mapa-brasil-outline-CJy7w5rF.png";
const MAP_POINTS = [
  { name: "TMA 1", dotX: 53, dotY: 27, labelX: 72, labelY: 16, side: "right", delay: 0 },
  { name: "TMA 2", dotX: 54.5, dotY: 29.5, labelX: 72, labelY: 22, side: "right", delay: 0.06 },
  { name: "MGTE", dotX: 52, dotY: 32.5, labelX: 74, labelY: 27, side: "right", delay: 0.12 },
  { name: "Babilônia", dotX: 55.5, dotY: 44.5, labelX: 22, labelY: 42, side: "left", delay: 0.18 },
  { name: "AVT", dotX: 56, dotY: 56, labelX: 82, labelY: 43, side: "right", delay: 0.24 },
  { name: "TES", dotX: 64, dotY: 57.5, labelX: 80, labelY: 56, side: "right", delay: 0.3 },
  { name: "SP-MG", dotX: 58.5, dotY: 62.5, labelX: 76, labelY: 66, side: "right", delay: 0.36 },
  { name: "Aliança", dotX: 55, dotY: 72, labelX: 74, labelY: 74, side: "right", delay: 0.42 },
  { name: "Litoral Sul Transmissão", dotX: 50, dotY: 75, labelX: 36, labelY: 71, side: "left", delay: 0.48 },
  { name: "Vineyards", dotX: 46, dotY: 77.5, labelX: 36, labelY: 84, side: "left", delay: 0.54 }
];
const getLabelCenterX = (p) => {
  const widthPct = p.name.length * 1 + 4;
  return p.side === "left" ? p.labelX - widthPct / 2 : p.labelX + widthPct / 2;
};
function BrazilMapAnimated({ alt = "Mapa do Brasil com os ativos da HRZ Energia" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      className: "relative aspect-square w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: mapaImg,
            alt,
            loading: "lazy",
            className: "absolute left-1/2 top-1/2 w-[65%] -translate-x-1/2 -translate-y-1/2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            className: "pointer-events-none absolute inset-0 z-10 h-full w-full",
            "aria-hidden": true,
            children: MAP_POINTS.map((p, i) => {
              const endX = getLabelCenterX(p);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.line,
                {
                  x1: p.dotX,
                  y1: p.dotY,
                  x2: endX,
                  y2: p.labelY,
                  stroke: "var(--hrz-electric)",
                  strokeWidth: 0.2,
                  strokeLinecap: "round",
                  initial: { pathLength: 0, opacity: 0 },
                  whileInView: { pathLength: 1, opacity: 0.65 },
                  viewport: { once: true, margin: "-80px" },
                  transition: { duration: 0.6, delay: 0.4 + (p.delay ?? 0), ease: "easeOut" }
                },
                `l-${i}`
              );
            })
          }
        ),
        MAP_POINTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            className: "absolute z-20 -translate-x-1/2 -translate-y-1/2",
            style: { left: `${p.dotX}%`, top: `${p.dotY}%` },
            initial: { scale: 0, opacity: 0 },
            whileInView: { scale: 1, opacity: 1 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.35, delay: 0.3 + (p.delay ?? 0), ease: "backOut" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3 items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-hrz-electric opacity-60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-hrz-electric ring-2 ring-white shadow-[0_0_12px_rgba(41,168,229,0.8)]" })
            ] })
          },
          `dot-${i}`
        )),
        MAP_POINTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute z-30",
            style: {
              left: `${getLabelCenterX(p)}%`,
              top: `${p.labelY}%`,
              transform: "translate(-50%, -50%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: p.side === "left" ? -12 : 12 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-80px" },
                transition: { duration: 0.45, delay: 0.55 + (p.delay ?? 0), ease: "easeOut" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block whitespace-nowrap rounded-full bg-hrz-electric px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/40 transition-transform hover:scale-105 sm:text-xs", children: p.name })
              }
            )
          },
          `lab-${i}`
        ))
      ]
    }
  );
}
const substationImg = "/assets/substation-CU_WwJvp.jpg";
export {
  BrazilMapAnimated as B,
  substationImg as s
};
