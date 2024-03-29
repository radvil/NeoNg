import { hasUnicode } from "./has-unicode";

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
export const repeat = (value: string, n: number): string => {
  let result = "";
  if (hasUnicode(value)) {
    for (let i = 0; i < n; i++) {
      result += value
    }
    return result
  }
  try {
    if (!value || n < 1 || n > Number.MAX_SAFE_INTEGER) {
      return result;
    }
  } catch (e) {
    return result;
  }
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
  return result;
};
