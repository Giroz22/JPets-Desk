import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { Store } from "@ngrx/store";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";
import { PetsState } from "../../state/reducers/pets.reducer";
import { clearPetSelected } from "../../state/actions/pets.actions";
import { PetShowDataComponent } from "../../components/pet-show-data/pet-show-data.component";
import { PetSearchComponent } from "../../components/pet-search/pet-search.component";

@Component({
  selector: "app-home-pets",
  imports: [RouterOutlet, PetSearchComponent, PetShowDataComponent],
  templateUrl: "./home-pets.component.html",
  styleUrl: "./home-pets.component.scss",
})
export class HomePetsComponent implements OnInit {
  petSelected!: PetResponse;

  ngOnInit(): void {}

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {
    store.subscribe(({ petsState }) => {
      this.petSelected = petsState.petSelected.pet;
    });
  }

  redirectFormPet() {
    this.store.dispatch(clearPetSelected());
    this.router.navigate(["/mascotas/manager"]);
  }
}
