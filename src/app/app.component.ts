import { Component } from "@angular/core";
import { PetsComponent } from "./features/feature-pets/pages/main/pets.component";

@Component({
  selector: "app-root",
  imports: [PetsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
