import { stringSize } from "./string-size";

/**
 * Repeats the given string `n` times.
 *
 * @example
 *
 * repeat('*', 3) // '***'
 *
 * repeat('abc', 2) // 'abcabc'
 *
 * repeat('abc', 0) // ''
 */
export const repeat = (value: string, n: number, separator?: string): string => {
  const withSeparator = typeof separator === "string";
  let result = "";
  if (withSeparator) value = value + separator;
  if (!(!value || n < 1 || n > Number.MAX_SAFE_INTEGER)) {
    // Leverage the exponentiation by squaring algorithm for a faster repeat.
    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
    do {
      if (n % 2) {
        result += value;
      }
      n = Math.floor(n / 2);
      if (n) {
        value += value;
      }
    } while (n);
  }
  return withSeparator ? result.slice(0, -stringSize(separator)) : result;
};
