import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { it, v } from "@neo/utils";
import { filter, map, range, toArray } from "rxjs";
import { JsonPipe } from "@angular/common";
// import * as it from "lazy-collections/src/index";

/*
 * If you’re dealing with class methods,
 * you can still use the .name property, but keep in mind that
 * minification and bundling tools might change function names,
 * so it’s not always reliable in a production environment.
 * For more complex scenarios, such as getting the name of the
 * current method from within an instance method of a class,
 * you might need to use decorators or other advanced TypeScript features1.
 */
function AnnotateName(severity: "log" | "warn" | "error" = "log") {
  return function (_: any, name: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console[severity](`Calling Method: ${String(name)}`);
      return originalMethod.apply(this, args);
    };
  };
}

const V = {
  FilterMin: 100,
  FilterMax: 100_000,
  RangeMin: 0,
  RangeMax: 1_000_000_000,
} as const;

@Component({
  standalone: true,
  selector: "neo-playground",
  styleUrl: "playground.cmp.scss",
  templateUrl: "playground.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
})
export class PlaygroundCmp {
  readonly name = signal("some🎲");
  readonly nameIsArrayLike = computed(() => v.isArrayLike(this.name()));
  readonly nameHasUnicode = computed(() => v.hasUnicode(this.name()));
  readonly nameUnicodeSize = computed(() => v.unicodeSize(this.name()));
  readonly nameSize = computed(() => v.size(this.name()));
  readonly nameSizeIsLength = computed(() => v.isLength(this.nameSize()));
  readonly nameStringSize = computed(() => v.stringSize(this.name()));
  readonly nameCapitalized = computed(() => v.capitalize(this.name()));
  readonly nameTitleCased = computed(() => v.titlecase(this.name()));
  readonly name3x = computed(() => v.repeat(this.name(), 3, " | "));

  readonly collectNumbers = it.pipe(
    it.filter((x: number) => x < V.FilterMax),
    it.map((x) => ({ value: x })),
    it.filter((x) => x.value > V.FilterMin),
    it.toArray(),
  );

  readonly rxjs$ = range(V.RangeMin, V.RangeMax).pipe(
    filter((x) => x < V.FilterMax),
    map((x) => ({ value: x })),
    filter((x) => x.value > V.FilterMin),
    toArray(),
    map((x) => x.length),
  );

  readonly logs = signal<{ [id: string]: number }>({});

  measure(fn: Function): void {
    const start = performance.now();
    fn();
    const finish = performance.now();
    console.warn(`Finished in ${finish - start}`);
  }

  @AnnotateName()
  reactiveX(): void {
    this.measure(() => {
      this.rxjs$.subscribe((total) => {
        this.logs.update((x) => {
          x["reactiveX"] = total;
          return x;
        });
      });
    });
    console.warn(this.logs());
  }

  @AnnotateName()
  lazy(): void {
    this.measure(() => {
      this.logs.update((x) => {
        x["lazy"] = this.collectNumbers(it.range(V.RangeMin, V.RangeMax)).length;
        return x;
      });
    });
    console.warn(this.logs());
  }

  @AnnotateName()
  eager(): void {
    this.measure(() => {
      this.logs.update((x) => {
        x["eager"] = v
          .countWithinRange(V.RangeMin, V.RangeMax)
          .filter((x) => x < V.FilterMax)
          .map((x) => ({ value: x }))
          .filter((x) => x.value > V.FilterMin).length;
        return x;
      });
    });
    console.warn(this.logs());
  }

  ngOnInit(): void {
    console.log(v.getIterator(["a", "b"]));
  }
}
