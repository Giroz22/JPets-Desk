import { Component, OnInit } from "@angular/core";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";
import { Store } from "@ngrx/store";
import { PetsState } from "../../state/reducers/pets.reducer";
import { Router } from "@angular/router";

@Component({
  selector: "app-manager",
  imports: [],
  templateUrl: "./manager.component.html",
  styleUrl: "./manager.component.scss",
})
export class ManagerPetsComponent implements OnInit {
  petSelected!: PetResponse;
  isEditable: boolean = false;

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {
    this.store.subscribe(({ petsState }) => {
      this.petSelected = petsState.pet;
    });
  }

  ngOnInit(): void {
    if (!this.petSelected.id) {
      this.router.navigate(["/mascotas"]);
    }
  }

  edit() {
    this.isEditable = true;
    console.log("Editando a " + this.petSelected.name);
  }

  delete() {
    console.log("Eliminando a " + this.petSelected.name);
  }

  update() {}
  cancel() {
    this.isEditable = false;
  }
  back() {
    this.router.navigate(["/mascotas"]);
  }
}
