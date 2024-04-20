/**
 * normally we'll do it like this
 * function isPowerOfTwo(n: number) {
 *   if (n === 0) return false;
 *   let log2n = Math.log2(n);
 *   return Math.floor(log2n) === log2n;
 * }
 */

/**
 * check if n is power of 2
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOf2(n: number): boolean {
  return (n & (n - 1)) === 0 && n !== 0;
}
