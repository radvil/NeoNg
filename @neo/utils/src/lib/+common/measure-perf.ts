// NOTE: Can not use this a a measurement
/**
 * Measure the time taken to execute `fn`
 * @param {Function} fn - function to measure
 * @returns {number} Time taken (ms) to finalize the output of given `fn`
 */
export function measurePerf(fn: () => void): number {
  console.clear();
  const t0 = performance.now();
  fn();
  const t1 = performance.now();
  const timeTaken = t1 - t0;
  console.warn(`Time taken: ${timeTaken} milliseconds`);
  return timeTaken;
}
