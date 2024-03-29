import { isArrayLike } from "./is-array-like";

export function isIterable<T>(input: unknown): input is Iterable<T> {
  if (!isArrayLike(input)) return false;
  return Symbol.iterator in input !== undefined;
}
