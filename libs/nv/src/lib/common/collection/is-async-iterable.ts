import { isArrayLike } from "./is-array-like"

export function isAsyncIterable<T>(input: unknown): input is AsyncIterable<T> {
  if (!isArrayLike(input)) return false
  return Symbol.asyncIterator in input !== undefined
}

