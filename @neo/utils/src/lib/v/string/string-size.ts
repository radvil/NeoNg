import { hasUnicode } from "./has-unicode";
import { unicodeSize } from "./unicode-size";

/**
 * Gets the number of symbols in `string`.
 */
export const stringSize = (value: string): number => {
  return hasUnicode(value) ? unicodeSize(value) : value.length;
};
