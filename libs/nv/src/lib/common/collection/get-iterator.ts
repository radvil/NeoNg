import { isAsyncIterable } from "./is-async-iterable";
import { isIterable } from "./is-iterable";

export function getIterator<T>(
  input: Iterable<T> | AsyncIterable<T>,
): Iterator<T> | AsyncIterator<T> {
  if (isAsyncIterable(input)) return input[Symbol.asyncIterator]();
  if (isIterable(input)) return input[Symbol.iterator]();
  throw new Error(`${input} is not an iterable`);
}
