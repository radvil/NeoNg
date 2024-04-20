/**
 * Using bitwise AND with 1, if the result is 0, the number is even
 * @param {number} n - value to check
 * @return {boolean}
 */
export function isEven(n: number): boolean {
  return (n & 1) === 0;
}
