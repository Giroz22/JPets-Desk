import { Component, Input, OnInit } from "@angular/core";

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
export class AvatarComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() size!: Sizes;

  ngOnInit(): void {
    this.src = this.src || "imgs/ImgExample.png";
    this.alt = this.alt || "Avatar";
    this.size = this.size || Sizes.md;
  }
}
