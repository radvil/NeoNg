/**
 * Using bitwise AND with 1, if the result is not 0, the number is odd
 * @param {number} n - value to check
 * @return {boolean}
 */
export function isOdd(n: number): boolean {
  return (n & 1) === 1;
}
