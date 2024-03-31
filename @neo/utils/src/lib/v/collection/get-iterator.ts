import type { LazyIt } from "../../+interface";
import { isAsyncIterable } from "./is-async-iterable";
import { isIterable } from "./is-iterable";

export function getIterator<T>(
  input: Iterable<T> | AsyncIterable<T>,
): Iterator<T> | AsyncIterator<T> {
  if (isAsyncIterable(input)) return input[Symbol.asyncIterator]();
  if (isIterable(input)) return input[Symbol.iterator]();
  throw new Error(`${input} is not an iterable`);
}

export function getSymbolForIterable<T>(iterable: LazyIt<T>) {
  if (Symbol.iterator in iterable) {
    return Symbol.iterator;
  }
  if (Symbol.asyncIterator in iterable) {
    return Symbol.asyncIterator;
  }
  throw new Error("Invalid iterable type. Must be Iterable or AsyncIterable.");
}
