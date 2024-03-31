import type { LazyIt } from "../+interface";
import { reduce } from "./reduce";

function toArrayFn<T>(v: LazyIt<T>) {
  return reduce<T[], T>((acc, current) => {
    acc.push(current);
    return acc;
  }, [])(v) as T[]
}

export function toArray<T>() {
  return (data: LazyIt<T>) => {
    return toArrayFn<T>(data);
  };
}
