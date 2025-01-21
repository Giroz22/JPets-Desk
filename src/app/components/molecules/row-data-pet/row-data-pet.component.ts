import { Component, Input } from "@angular/core";
import { CircleButtonComponent } from "../../atoms/circle-button/circle-button.component";
import { AvatarComponent, Sizes } from "../../atoms/avatar/avatar.component";
import { PetResponse } from "../../../../electron/models/dtos/pet.response";

@Component({
  selector: "app-row-data-pet",
  imports: [AvatarComponent, CircleButtonComponent],
  templateUrl: "./row-data-pet.component.html",
  styleUrl: "./row-data-pet.component.scss",
})
export class RowDataPetComponent {
  @Input() pet!: PetResponse;
  size: Sizes = Sizes.sm;
}
