import { Component } from "@angular/core";
import { PetsTableComponent } from "../../components/pets-table/pets-table.component";

@Component({
  selector: "app-home-pets",
  imports: [PetsTableComponent],
  templateUrl: "./home-pets.component.html",
  styleUrl: "./home-pets.component.scss",
})
export class HomePetsComponent {}
