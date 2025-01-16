import { Component, OnInit } from "@angular/core";
import { PetsTableComponent } from "../../components/pets-table/pets-table.component";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";
import { PetsState } from "../../state/reducers/pets.reducer";
import { clearPetSelected } from "../../state/actions/pets.actions";

@Component({
  selector: "app-home-pets",
  imports: [PetsTableComponent],
  templateUrl: "./home-pets.component.html",
  styleUrl: "./home-pets.component.scss",
})
export class HomePetsComponent implements OnInit {
  petSelected!: PetResponse;

  ngOnInit(): void {
    this.store.dispatch(clearPetSelected());
  }

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {
    store.subscribe(({ petsState }) => {
      this.petSelected = petsState.petSelected.pet;
    });
  }

  redirectFormPet() {
    this.router.navigate(["/manager"]);
  }
}
