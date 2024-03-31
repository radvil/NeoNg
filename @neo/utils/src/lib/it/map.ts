import type { LazyIt } from "../+interface";

type MapCallbackFn<T, R> = (value: T, index: number) => R;

export function map<T, R>(callback: MapCallbackFn<T, R>) {
  return function mapFn(data: LazyIt<T>) {
    if (Symbol.asyncIterator in data || data instanceof Promise) {
      return {
        async *[Symbol.asyncIterator]() {
          const stream = (data instanceof Promise ? await data : data) as AsyncIterable<T>;
          let i = 0;
          for await (const value of stream) {
            yield callback(value, i++);
          }
        },
      };
    }
    return {
      *[Symbol.iterator]() {
        let i = 0;
        for (const value of data as Iterable<T>) {
          yield callback(value, i++);
        }
      },
    };
  };
}
