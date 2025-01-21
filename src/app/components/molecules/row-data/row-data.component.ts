import { Component, Input, ViewEncapsulation } from "@angular/core";
import { AvatarComponent, Sizes } from "../../atoms/avatar/avatar.component";
import { CircleButtonComponent } from "../../atoms/circle-button/circle-button.component";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-row-data",
  imports: [AvatarComponent, CircleButtonComponent, TitleCasePipe],
  templateUrl: "./row-data.component.html",
  styleUrl: "./row-data.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class RowDataComponent {
  @Input() data!: any;
  attributesValue: any[] = Object.values(this.data);
}
