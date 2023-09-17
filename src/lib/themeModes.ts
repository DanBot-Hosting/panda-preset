import type { ThemeModes } from "@/types/themeModes";

export const themeModes = ["dark", "light"] as const;

/**
 * Generates and returns a record of theme mode conditions.
 *
 * @return {Partial<Record<ThemeModes, string>>} The generated theme mode conditions.
 */
export function generateThemeModeConditions() {
  let result: Partial<Record<ThemeModes, string>> = {};

  for (let mode of themeModes) {
    result[mode] = `[data-theme-mode=${mode}] &`;
  }

  return result;
}
