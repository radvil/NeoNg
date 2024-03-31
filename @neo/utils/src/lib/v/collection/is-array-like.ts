import { isLength } from "../number/is-length";

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @example
 *
 * isArrayLike([1, 2, 3]) // true
 *
 * isArrayLike(document.body.children) // true
 *
 * isArrayLike(Function) // false
 *
 * isArrayLike('abc') // true
 */
export const isArrayLike = (value: unknown): value is ArrayLike<unknown> => {
  return (
    (value !== undefined &&
      typeof value === "object" &&
      value !== null &&
      typeof value !== "function") ||
    Array.isArray(value) ||
    (typeof value === "string" && isLength(value.length))
  );
};
