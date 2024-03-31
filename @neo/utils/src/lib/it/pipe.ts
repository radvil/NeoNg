import { LazyIt } from "../+interface";
import { ensureAsFunc } from "../v";

type UnaryFn<A, B> = (arg: A) => B;

export function pipe(): <T>(x: T) => T;
export function pipe<A, B>(f1: UnaryFn<A, B>): UnaryFn<A, B>;
export function pipe<A, B, C>(f1: UnaryFn<A, B>, f2: UnaryFn<B, C>): UnaryFn<A, C>;
export function pipe<A, B, C, D>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
): UnaryFn<A, D>;
export function pipe<A, B, C, D, E>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
): UnaryFn<A, E>;
export function pipe<A, B, C, D, E, F>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
): UnaryFn<A, F>;
export function pipe<A, B, C, D, E, F, G>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
  f6: UnaryFn<F, G>,
): UnaryFn<A, G>;
export function pipe<A, B, C, D, E, F, G, H>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
  f6: UnaryFn<F, G>,
  f7: UnaryFn<G, H>,
): UnaryFn<A, H>;
export function pipe<A, B, C, D, E, F, G, H, I>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
  f6: UnaryFn<F, G>,
  f7: UnaryFn<G, H>,
  f8: UnaryFn<G, I>,
): UnaryFn<A, I>;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
  f6: UnaryFn<F, G>,
  f7: UnaryFn<G, H>,
  f8: UnaryFn<G, I>,
  f9: UnaryFn<G, J>,
): UnaryFn<A, J>;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  f1: UnaryFn<A, B>,
  f2: UnaryFn<B, C>,
  f3: UnaryFn<C, D>,
  f4: UnaryFn<D, E>,
  f5: UnaryFn<E, F>,
  f6: UnaryFn<F, G>,
  f7: UnaryFn<G, H>,
  f8: UnaryFn<G, I>,
  f9: UnaryFn<G, J>,
  ...fns: UnaryFn<any, any>[]
): UnaryFn<A, unknown>;

// export function pipe<T = any, V = any>(...fns: Array<UnaryFn<T, V>>): UnaryFn<T, V> {
//   return fns.length === 1
//     ? (fns[0] as UnaryFn<T, V>)
//     : (input: T) => fns.reduce(pipeReducer, input);
// }
//
// function pipeReducer(prev: any, fn: UnaryFn<any, any>) {
//   return fn(prev);
// }

export function pipe(...fns: (UnaryFn<any, any> | LazyIt<any>)[]): UnaryFn<any, any> {
  return fns.reduceRight((f, g) => {
    const g_ = ensureAsFunc(g);
    return (...args) => f(g_(...args));
  }, ensureAsFunc(fns.pop()));
}
