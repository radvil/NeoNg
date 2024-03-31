export function isAsyncIterable<T>(input: unknown): input is AsyncIterable<T> {
  if (typeof input !== "object" || input === null) return false;
  return Symbol.asyncIterator in input;
}
