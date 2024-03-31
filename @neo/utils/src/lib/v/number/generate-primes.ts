import { isPrime } from "./is-prime";

/**
 * @param minValue minimum value of the range
 * @param maxValue maximum value of the range
 * returns an array of prime numbers between a given range
 */
export function generatePrimes(minValue: number, maxValue: number): number[] {
  if (minValue < Number.MIN_SAFE_INTEGER) {
    throw new Error(`minValue cannot exceed ${Number.MIN_SAFE_INTEGER}`);
  }
  if (maxValue > Number.MAX_SAFE_INTEGER) {
    throw new Error(`maxValue cannot exceed ${Number.MAX_SAFE_INTEGER}`);
  }
  const primes: number[] = [];
  for (let i = minValue; i <= maxValue; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
