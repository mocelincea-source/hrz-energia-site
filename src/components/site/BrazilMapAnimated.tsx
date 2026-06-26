import mapaImg from "@/assets/mapa-brasil-outline.png";
import { motion } from "motion/react";

type MapPoint = {
  name: string;
  dotX: number;
  dotY: number;
  labelX: number;
  labelY: number;
  side: "left" | "right";
  delay?: number;
};

const MAP_POINTS: MapPoint[] = [
  { name: "TMA 1", dotX: 53.0, dotY: 27.0, labelX: 72, labelY: 16, side: "right", delay: 0.0 },
  { name: "TMA 2", dotX: 54.5, dotY: 29.5, labelX: 72, labelY: 22, side: "right", delay: 0.06 },
  { name: "MGTE", dotX: 52.0, dotY: 32.5, labelX: 74, labelY: 27, side: "right", delay: 0.12 },
  { name: "Babilônia", dotX: 55.5, dotY: 44.5, labelX: 22, labelY: 42, side: "left", delay: 0.18 },
  { name: "AVT", dotX: 56.0, dotY: 56.0, labelX: 82, labelY: 43, side: "right", delay: 0.24 },
  { name: "TES", dotX: 64.0, dotY: 57.5, labelX: 80, labelY: 56, side: "right", delay: 0.3 },
  { name: "SP-MG", dotX: 58.5, dotY: 62.5, labelX: 76, labelY: 66, side: "right", delay: 0.36 },
  { name: "Aliança", dotX: 55.0, dotY: 72.0, labelX: 74, labelY: 74, side: "right", delay: 0.42 },
  { name: "Litoral Sul Transmissão", dotX: 50.0, dotY: 75.0, labelX: 36, labelY: 71, side: "left", delay: 0.48 },
  { name: "Vineyards", dotX: 46.0, dotY: 77.5, labelX: 36, labelY: 84, side: "left", delay: 0.54 },
];

const getLabelCenterX = (p: MapPoint) => {
  const widthPct = p.name.length * 1.0 + 4;
  return p.side === "left" ? p.labelX - widthPct / 2 : p.labelX + widthPct / 2;
};

export function BrazilMapAnimated({ alt = "Mapa do Brasil com os ativos da HRZ Energia" }: { alt?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-square w-full"
    >
      <img
        src={mapaImg}
        alt={alt}
        loading="lazy"
        className="absolute left-1/2 top-1/2 w-[65%] -translate-x-1/2 -translate-y-1/2"
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        aria-hidden
      >
        {MAP_POINTS.map((p, i) => {
          const endX = getLabelCenterX(p);
          return (
            <motion.line
              key={`l-${i}`}
              x1={p.dotX}
              y1={p.dotY}
              x2={endX}
              y2={p.labelY}
              stroke="var(--hrz-electric)"
              strokeWidth={0.2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.65 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4 + (p.delay ?? 0), ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {MAP_POINTS.map((p, i) => (
        <motion.span
          key={`dot-${i}`}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.dotX}%`, top: `${p.dotY}%` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.3 + (p.delay ?? 0), ease: "backOut" }}
        >
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hrz-electric opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-hrz-electric ring-2 ring-white shadow-[0_0_12px_rgba(41,168,229,0.8)]" />
          </span>
        </motion.span>
      ))}

      {MAP_POINTS.map((p, i) => (
        <div
          key={`lab-${i}`}
          className="absolute z-30"
          style={{
            left: `${getLabelCenterX(p)}%`,
            top: `${p.labelY}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: p.side === "left" ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.55 + (p.delay ?? 0), ease: "easeOut" }}
          >
            <span className="inline-block whitespace-nowrap rounded-full bg-hrz-electric px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/40 transition-transform hover:scale-105 sm:text-xs">
              {p.name}
            </span>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}