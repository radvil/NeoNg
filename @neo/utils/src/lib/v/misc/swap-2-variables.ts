/**
 * swap 2 given variables. Note that this function is a bit slower from one that uses a 3rd variable
 * @param {number} a - first variable
 * @param {number} b - 2nd variable
 * @return {number[]} [a, b]
 */
export function swap2Variables(a: number, b: number): number[] {
  a ^= b; // a = a ^ b
  b ^= a; // b = b ^ (a ^ b) => b = b ^ b ^ a => b = a
  a ^= b; // a = (a ^ b) ^ a => a = b ^ a ^ a => a = b
  return [a, b];
}
