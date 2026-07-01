import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { r as raioSolid } from "./raio-solid-gradient-CmvUkfnx.mjs";
const raioOutline = "/assets/raio-outline-gradient-gizA8Aam.png";
function BoltDecor({
  variant = "outline",
  className = "",
  rotate = 0,
  opacity = 0.08
}) {
  const src = variant === "solid" ? raioSolid : raioOutline;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt: "",
      "aria-hidden": true,
      style: { transform: `rotate(${rotate}deg)`, opacity },
      className: `pointer-events-none absolute select-none ${className}`
    }
  );
}
export {
  BoltDecor as B
};
