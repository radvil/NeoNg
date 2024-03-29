/* eslint-disable @typescript-eslint/no-explicit-any */

import { hasUnicode } from "./has-unicode";
import { unicodeSize } from "./unicode-size";

/**
 * Gets the number of symbols in `string`.
 */
export const stringSize = (value: any): number => {
  return hasUnicode(value) ? unicodeSize(value) : value.length;
};

