import { Component, OnInit } from "@angular/core";
import { PetFormComponent } from "../pet-form/pet-form.component";

@Component({
  selector: "pet-manager",
  imports: [PetFormComponent],
  templateUrl: "./pet-manager.component.html",
  styleUrl: "./pet-manager.component.scss",
})
export class PetManagerComponent implements OnInit {
  ngOnInit(): void {}
}
