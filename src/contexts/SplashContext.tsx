import { createContext, useContext } from "react";

/**
 * `true`  → splash is gone (setShowSplash(false) was called in __root.tsx)
 * `false` → splash is still visible
 */
export const SplashContext = createContext<boolean>(false);

export function useSplashDone() {
  return useContext(SplashContext);
}
