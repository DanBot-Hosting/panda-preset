import type { Recursive } from "@/types/utils";
import type { Token } from "@pandacss/types";
import type { ThemeModes } from "@/types/themeModes";
import type { Palette } from "cvet";

export type ThemeColors = [string, string, string, string];

export interface Theme {
  name: string;
  value: string;
  colors: {
    [key in ThemeModes]: ThemeColors;
  };
}

export type ModifiedColor = Recursive<Record<string, Palette>>;

export type UnwrappedModifiedColor = Recursive<string | Record<string, Token>>;

export type GenerateThemeColorsAccumulator = Partial<
  Record<`_${ThemeModes}`, Token>
>;
