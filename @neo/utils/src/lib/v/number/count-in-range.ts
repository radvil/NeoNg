/*
 * Example usage: const rangeCount = countWithinRange(1, 10);
 * console.log(rangeCount); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * */
export function countWithinRange(start: number, end: number, step = 1): number[] {
  if (start < Number.MIN_SAFE_INTEGER || end > Number.MAX_SAFE_INTEGER) {
    throw new Error(
      `The start and end values must be between ${Number.MIN_SAFE_INTEGER} and ${Number.MAX_SAFE_INTEGER}`,
    );
  }
  if (start > end) {
    throw new Error("The start value must be less than or equal to the end value");
  }
  const result: number[] = [];
  for (let i = start; i <= end; i+=step) {
    result.push(i);
  }
  return result;
}
