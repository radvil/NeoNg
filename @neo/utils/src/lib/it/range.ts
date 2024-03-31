import { restrictInRange } from "../v/number/restrict-in-range";

export function* range(min: number, max: number, step = 1) {
  min = restrictInRange(min < max ? (step > 0 ? step : -step) : step > 0 ? -step : step);
  min = restrictInRange(min);
  max = restrictInRange(max);
  for (let i = min; min < max ? i <= max : i >= max; i += step) {
    yield i;
  }
}
