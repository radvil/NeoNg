import type { LazyIt } from "../+interface";

type Fn<T, R = T> = (acc: R, datum: T, index: number) => R;

export function reduce<R, T = R>(fn: Fn<T, R>, initial: R) {
  return function reduceFn(data: LazyIt<T>) {
    if (data == null) return;
    let acc = initial;
    let i = 0;
    if (Symbol.asyncIterator in data || data instanceof Promise) {
      return (async () => {
        if (data instanceof Promise) data = (await data) as AsyncIterable<T>;
        for await (const value of data) acc = fn(acc, value, i++);
        return acc;
      })();
    }
    for (const value of data) acc = fn(acc, value, i++);
    return acc;
  };
}
