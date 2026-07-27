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

// dotX / dotY: % do container aspect-square.
// Imagem outline.png (986×1027 px) renderizada com w-[65%] centralizada:
//   X: 17.5–82.5 %  |  Y: 16.15–83.85 %
// Fórmula verificada com pixels costeiros reais da imagem:
//   dotX = 17.5 + (74 + lon) / 39.2 × 65      (lon em graus W negativos)
//   dotY = 16.15 + (5.27 − lat) / 39.02 × 67.7 (lat em graus, negativo = Sul)
const MAP_POINTS: MapPoint[] = [
  // Maranhão (MA) — TMA 1/2 litoral NE (~−3/−4 °S, −44/−43.5 °W); MGTE centro-oeste (~−5 °S, −46 °W)
  { name: "TMA 1",                   dotX: 67.2, dotY: 30.5, labelX: 78, labelY: 24, side: "right", delay: 0.0  },
  { name: "TMA 2",                   dotX: 68.1, dotY: 32.2, labelX: 78, labelY: 30, side: "right", delay: 0.06 },
  { name: "MGTE",                    dotX: 63.9, dotY: 34.0, labelX: 78, labelY: 38, side: "right", delay: 0.12 },
  // Bahia (BA) — centro-leste (~−12.5 °S, −41.5 °W); label fora do mapa à direita (oceano)
  { name: "Babilônia",               dotX: 71.4, dotY: 47.0, labelX: 73, labelY: 44, side: "right", delay: 0.18 },
  // Minas Gerais (MG) — norte do estado (~−16.5 °S, −44.5 °W)
  { name: "AVT",                     dotX: 66.4, dotY: 53.9, labelX: 76, labelY: 51, side: "right", delay: 0.24 },
  // Espírito Santo (ES) — litoral (~−20 °S, −40.5 °W); label sobre o oceano à direita
  { name: "TES",                     dotX: 73.0, dotY: 60.0, labelX: 80, labelY: 60, side: "right", delay: 0.3  },
  // Divisa SP / MG (~−22 °S, −47 °W)
  { name: "SP-MG",                   dotX: 62.3, dotY: 63.5, labelX: 73, labelY: 67, side: "right", delay: 0.36 },
  // Santa Catarina (SC) — centro-leste (~−27.5 °S, −50 °W)
  { name: "Aliança",                 dotX: 57.3, dotY: 73.0, labelX: 68, labelY: 73, side: "right", delay: 0.42 },
  // Divisa SC / RS — litoral (~−28.8 °S, −49.5 °W)
  { name: "Litoral Sul Transmissão", dotX: 58.1, dotY: 75.3, labelX: 42, labelY: 70, side: "left",  delay: 0.48 },
  // Rio Grande do Sul (RS) — centro (~−29.5 °S, −52 °W)
  { name: "Vineyards",               dotX: 54.0, dotY: 76.5, labelX: 36, labelY: 83, side: "left",  delay: 0.54 },
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