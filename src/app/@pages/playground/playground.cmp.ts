import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  type OnInit,
} from "@angular/core";
import { nv } from "@nv";

@Component({
  standalone: true,
  selector: "neo-playground",
  styleUrl: "playground.cmp.scss",
  templateUrl: "playground.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundCmp implements OnInit {
  readonly name = signal("injoker 🎲 madafaka");
  readonly nameIsArrayLike = computed(() => nv.isArrayLike(this.name()));
  readonly nameHasUnicode = computed(() => nv.hasUnicode(this.name()));
  readonly nameUnicodeSize = computed(() => nv.unicodeSize(this.name()));
  readonly nameSize = computed(() => nv.size(this.name()));
  readonly nameSizeIsLength = computed(() => nv.isLength(this.nameSize()));
  readonly nameStringSize = computed(() => nv.stringSize(this.name()));
  readonly nameCapitalized = computed(() => nv.capitalize(this.name()));
  readonly nameTitleCased = computed(() => nv.titlecase(this.name()));
  readonly name3x = computed(() => nv.repeat(this.name(), 3, " | "));

  ngOnInit(): void {}
}
