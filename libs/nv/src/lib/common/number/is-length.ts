/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @example
 *
 * isLength(9) // true
 *
 * isLength(Number.MIN_VALUE) => false
 *
 * isLength(Infinity) => false
 *
 * isLength('3') => false
 */
export const isLength = (value: unknown) => {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
};
