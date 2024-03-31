/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @example
 *
 * isString('abc') // true
 *
 * isString(1) // false
 */
export const isString = (v: unknown): v is string => {
  return (
    typeof v === "string" ||
    (typeof v === "object" &&
      v != null &&
      !Array.isArray(v) &&
      Object.prototype.toString.call(v) === "[object String]")
  );
};
