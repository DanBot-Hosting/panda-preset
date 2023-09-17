import type { CssKeyframes } from "@pandacss/types";

const defineKeyframes = <T extends CssKeyframes>(keyframes: T) => keyframes;

export const keyframes = defineKeyframes({
  // Loading spinning animation
  spin: {
    to: {
      transform: "rotate(360deg)",
    },
  },
});
