import type { ValueOrPromise } from "./v";

export type LazyIt<V> = ValueOrPromise<Iterable<V> | AsyncIterable<V>>;
