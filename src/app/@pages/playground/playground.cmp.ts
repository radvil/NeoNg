import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { it, v } from "@neo/utils";

@Component({
  standalone: true,
  selector: "neo-playground",
  styleUrl: "playground.cmp.scss",
  templateUrl: "playground.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundCmp {
  readonly name = signal("injoker 🎲 madafaka");
  readonly nameIsArrayLike = computed(() => v.isArrayLike(this.name()));
  readonly nameHasUnicode = computed(() => v.hasUnicode(this.name()));
  readonly nameUnicodeSize = computed(() => v.unicodeSize(this.name()));
  readonly nameSize = computed(() => v.size(this.name()));
  readonly nameSizeIsLength = computed(() => v.isLength(this.nameSize()));
  readonly nameStringSize = computed(() => v.stringSize(this.name()));
  readonly nameCapitalized = computed(() => v.capitalize(this.name()));
  readonly nameTitleCased = computed(() => v.titlecase(this.name()));
  readonly name3x = computed(() => v.repeat(this.name(), 3, " | "));

  readonly collectPrimes = it.pipe(
    it.filter((x: number) => x < 10_000),
    it.map((x) => ({ value: x })),
    it.filter((x) => x.value > 1_000),
    it.toArray(),
  );

  readonly totalPrimNumbers = signal(0);

  gen(): void {
    const results = this.collectPrimes(it.primesInRange(0, 1_000_000));
    this.totalPrimNumbers.set(results.length);
    console.warn(results);
  }

  ngOnInit(): void {}
}
