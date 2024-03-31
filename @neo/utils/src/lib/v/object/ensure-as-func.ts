/**
 * Ensures that `input` is a function.
 * If the input is already a function, it returns the input as is.
 * If the input is not a function, it'll wrap it with a function before returning it.
 * @param {unknown} input - The input value
 * @returns A function that either returns the input value or the input function itself
 */
export function ensureAsFunc(input: any): Fn {
  return typeof input === 'function' ? input : () => input
}

type Fn = (...args: any) => any
