import { Component } from "@angular/core";
import { PetFormComponent } from "../pet-form/pet-form.component";

@Component({
  selector: "app-manager-pet",
  imports: [PetFormComponent],
  templateUrl: "./manager-pet.component.html",
  styleUrl: "./manager-pet.component.scss",
})
export class ManagerPetComponent {}
