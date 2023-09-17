import type { Palette } from "cvet";
import type { Amount } from "cvet/types";
import type { Recursive } from "@/types/utils";
import type { ThemeModes } from "@/types/themeModes";
import type { Token } from "@pandacss/types";

export interface Color {
  name: string;
  value: string;
  skipModification?: boolean;
  colors: Record<ThemeModes, Palette> | (() => Recursive<Token>);
  tokens: Amount[];
}
