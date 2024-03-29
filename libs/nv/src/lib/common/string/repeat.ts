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
  if (!value || n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  let value_ = value;
  do {
    if (n % 2) {
      result += value;
    }
    const n_ = Math.floor(n / 2);
    if (n_) {
      value_ += value;
    }
  } while (n);
  return result;
};
