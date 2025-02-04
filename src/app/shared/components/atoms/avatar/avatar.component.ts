import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

export enum Sizes {
  xl = "xl",
  lg = "lg",
  md = "md",
  sm = "sm",
}

@Component({
  selector: "app-avatar",
  imports: [],
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.scss",
})
export class AvatarComponent implements OnInit, OnChanges {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() size!: string | Sizes;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["src"]) this.src = this.src || "imgs/ImgExample.png";
  }

  ngOnInit(): void {
    this.src = this.src || "imgs/ImgExample.png";
    this.alt = this.alt || "Avatar";
    this.size = this.size || Sizes.md;
  }
}
