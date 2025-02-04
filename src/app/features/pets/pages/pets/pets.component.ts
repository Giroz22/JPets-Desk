import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ActionPet, PetsState } from "../../state/reducers/pets.reducer";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";

import { getAll, setPetId } from "../../state/actions/pets.actions";
import { ManagerLayoutComponent } from "../../../../shared/components/templates/manager-layout/manager-layout.component";
import { ManagerPetComponent } from "../../components/organisms/manager-pet/manager-pet.component";
import { RowDataComponent } from "../../../../shared/components/molecules/row-data/row-data.component";
import { TypeDataScrollTable } from "../../../../shared/components/organisms/scroll-table/scroll-table.component";

@Component({
  selector: "app-pets",
  imports: [ManagerLayoutComponent, ManagerPetComponent, RowDataComponent],
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

  setPetSelected(petId: number) {
    return () =>
      this.store.dispatch(setPetId({ petId, action: ActionPet.EDIT }));
  }
}
