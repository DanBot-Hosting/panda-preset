import type { Blur, Option } from "@/types";
import type { Token } from "@pandacss/types";

const blurs: Blur[] = [
  {
    name: "Full",
    value: "full",
    tokens: [3, 5, 7],
    modes: {
      full: true,
      limited: false,
    },
  },
  {
    name: "Limited",
    value: "limited",
    tokens: [3, 5, 7],
    modes: {
      full: true,
      limited: true,
    },
  },
  {
    name: "Disabled",
    value: "disabled",
  },
];

/**
 * Generates and returns a record of theme conditions.
 *
 * @return {Record<string, string>} The generated theme conditions.
 */
export function generateBlurModeConditions() {
  let result: Record<string, string> = {};

  for (let i in blurs) {
    result[blurs[i].value] = `[data-blur-mode=${blurs[i].value}] &`;
  }

  return result;
}

/**
 * Generate blur modes and their values depending on blur mode conditions.
 *
 * @returns {Record<string, Record<number, Token>>} Blurs and show values depending on blur mode.
 */
export function generateBlurModes() {
  const result: Record<string, Record<number, Token>> = {};

  for (let blur of blurs) {
    let part: Record<number, Token> = {};
    const { tokens, modes } = blur;

    if (!tokens || !modes) continue;
    for (let token of tokens) {
      let tokenValue: Token = { value: {} };

      for (let mode in modes) {
        tokenValue.value[`_${mode}`] = {
          value: modes[mode] ? `${token}px` : "0px",
        };
      }

      part[token] = tokenValue;
    }

    result[blur.value] = part;
  }

  return result;
}

/**
 * Generates an array of Option objects based on the blurs array.
 *
 * @return {Option[]} An array of Option objects.
 */
export function generateBlurModeOptions(): Option[] {
  return blurs.map(({ value }) => ({
    label: value,
    value,
  }));
}
