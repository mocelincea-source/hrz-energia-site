/** Splash holds for 2s, then exit fade runs in parallel with hero reveal. */
export const SPLASH_HOLD_S = 2;
export const SPLASH_EXIT_DURATION = 0.5;
export const SPLASH_EXIT_END = SPLASH_HOLD_S + SPLASH_EXIT_DURATION;

/** Pause after splash fully gone before foreground hero content animates. */
export const HERO_BREATH = 0.25;
export const HERO_BASE = SPLASH_EXIT_END + HERO_BREATH;

/** Hero video ken-burn starts when splash exit begins (overlap, no visual gap). */
export const HERO_VIDEO_REVEAL = SPLASH_HOLD_S;

export const HERO_STAGGER = 0.22;
export const HERO_DURATION = 0.9;
