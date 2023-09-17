import type { GlobalStyleObject } from "@pandacss/types";

const defineGlobalStyles = <T extends GlobalStyleObject>(styles: T) => styles;

export const globalCss = defineGlobalStyles({
  // Global selection
  "::selection": {
    bg: "text.90",
    color: "background.100",
  },

  // Overriding all the settings
  "@media (prefers-reduced-motion)": {
    "*": {
      transition: "none!",
    },
  },
});
