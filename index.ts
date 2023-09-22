import {
  generateBlurModeConditions,
  generateBlurModes,
  generateColors,
  generateThemeModeConditions,
  generateThemeConditions,
  generateTransitionConditions,
  globalCss,
  keyframes,
} from "@/lib";
import type { Preset } from "@pandacss/types";

const definePreset = <T extends Preset>(preset: T) => preset;

export const dbhPreset = definePreset({
  conditions: {
    ...generateThemeModeConditions(),
    ...generateThemeConditions(),
    ...generateBlurModeConditions(),
    ...generateTransitionConditions(),
  },

  globalCss,

  // Useful for theme customization
  theme: {
    extend: { keyframes },
    semanticTokens: {
      blurs: generateBlurModes(),
      colors: generateColors(),
    },
  },
});

export * from "@/lib";
export * as Preset from "@/types";
