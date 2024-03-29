import { capitalize } from "./capitalize";

/**
 * Converts the first letter of a each word of a sentence to uppercase
 *
 * @example
 *
 * titlecase('the quick brown fox') // 'The Quick Brown Fox'
 */
export const titlecase = (value: string | undefined | null): string => {
  if (!value) return "";
  return value
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};
