import type { LazyIt } from "../+interface";

type Fn<T> = (datum: T, index: number) => boolean;

export function filter<T>(fn: Fn<T>) {
  return function filterFn(data: LazyIt<T>) {
    let i = 0;
    if (Symbol.asyncIterator in data || data instanceof Promise) {
      return {
        async *[Symbol.asyncIterator]() {
          if (data instanceof Promise) data = await data;
          for await (const value of data as AsyncIterable<T>) {
            if (!fn(value, i++)) continue;
            yield value;
          }
        },
      };
    }

    return {
      *[Symbol.iterator]() {
        for (const value of data as Iterable<T>) {
          // Ignore values that do not meet the criteria
          if (!fn(value, i++)) continue;
          yield value;
        }
      },
    };
  };
}
