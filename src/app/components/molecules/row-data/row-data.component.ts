import { Component, Input, ViewEncapsulation } from "@angular/core";
import { AvatarComponent, Sizes } from "../../atoms/avatar/avatar.component";
import { CircleButtonComponent } from "../../atoms/circle-button/circle-button.component";

@Component({
  selector: "app-row-data",
  imports: [AvatarComponent, CircleButtonComponent],
  templateUrl: "./row-data.component.html",
  styleUrl: "./row-data.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class RowDataComponent {
  @Input() src: string = "";
  @Input() alt: string = "";
  @Input() action!: Function;
}
