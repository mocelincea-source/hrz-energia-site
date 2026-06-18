import raioOutline from "@/assets/raio-outline-gradient.png";
import raioSolid from "@/assets/raio-solid-gradient.png";

type Variant = "outline" | "solid";

export function BoltDecor({
  variant = "outline",
  className = "",
  rotate = 0,
  opacity = 0.08,
}: {
  variant?: Variant;
  className?: string;
  rotate?: number;
  opacity?: number;
  float?: boolean;
  duration?: number;
  amplitude?: number;
}) {
  const src = variant === "solid" ? raioSolid : raioOutline;
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      style={{ transform: `rotate(${rotate}deg)`, opacity }}
      className={`pointer-events-none absolute select-none ${className}`}
    />
  );
}
