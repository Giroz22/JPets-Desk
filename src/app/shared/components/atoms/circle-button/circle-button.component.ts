import { Component, Input } from "@angular/core";

@Component({
  selector: "app-circle-button",
  imports: [],
  templateUrl: "./circle-button.component.html",
  styleUrl: "./circle-button.component.scss",
})
export class CircleButtonComponent {
  @Input() action: Function = () => {};
}
