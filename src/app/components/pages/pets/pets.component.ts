import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { PetsState } from "../../../features/feature-pets/state/reducers/pets.reducer";
import { PetResponse } from "../../../../electron/models/dtos/pet.response";
import { ManagerLayoutComponent } from "../../templates/manager-layout/manager-layout.component";
import { getAll } from "../../../features/feature-pets/state/actions/pets.actions";
import { TypeDataScrollTable } from "../../organisms/scroll-table/scroll-table.component";

@Component({
  selector: "app-pets",
  imports: [ManagerLayoutComponent],
  templateUrl: "./pets.component.html",
  styleUrl: "./pets.component.scss",
})
export class PetsComponent implements OnInit {
  pets!: PetResponse[];
  petSelected!: PetResponse;
  type: TypeDataScrollTable = TypeDataScrollTable.PETS;

  ngOnInit(): void {
    this.store.dispatch(getAll());
  }

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {
    store.subscribe(({ petsState }) => {
      this.pets = petsState.pets;
      this.petSelected = petsState.petSelected.pet;
    });
  }
}
