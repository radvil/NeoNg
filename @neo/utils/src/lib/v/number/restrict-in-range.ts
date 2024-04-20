/*
 * TODO: check this!
 * return the clamped value within the specified range,
 * ensuring that it is greater than or equal to the minimum value
 * and less than or equal to the maximum value.
 * This is a useful for constraining a value within a specified range.
 * */
export function restrictInRange(
  input: number,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
) {
  return Math.min(max, Math.max(min, input));
}
