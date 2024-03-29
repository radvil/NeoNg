export type MaybePromise<T> = T | Promise<T>
export type AsyncLikeIterable<T> = MaybePromise<Iterable<T> | AsyncIterable<T>>
