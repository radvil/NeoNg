import { getProtoTag } from "../../_utils/get-proto-tag";

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @example
 *
 * isString('abc') // true
 *
 * isString(1) // false
 */
export const isString = (value: any): boolean => {
  const type = typeof value;
  return (
    type === 'string' ||
    (type === 'object' &&
      value != null &&
      !Array.isArray(value) &&
      getProtoTag(value) === '[object String]')
  );
};

