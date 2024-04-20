// TODO: retest this function
export function generateRandomNumbers(
  minValue: number = Number.MIN_SAFE_INTEGER,
  maxValue: number = Number.MAX_SAFE_INTEGER,
  step = 1,
): number[] {
  if (minValue < Number.MIN_SAFE_INTEGER || maxValue > Number.MAX_SAFE_INTEGER) {
    throw new Error(
      `Values must be between ${Number.MIN_SAFE_INTEGER} and ${Number.MAX_SAFE_INTEGER}`,
    );
  }
  if (step <= 0) {
    throw new Error("Step must be a positive number");
  }

  const randomNumbers: number[] = [];
  while (minValue <= maxValue) {
    randomNumbers.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    minValue += step;
  }
  return randomNumbers;
}
