import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { PetsState } from "../../state/reducers/pets.reducer";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";

import { getAll, getPetById } from "../../state/actions/pets.actions";
import { ManagerLayoutComponent } from "../../../../shared/components/templates/manager-layout/manager-layout.component";
import { RowDataComponent } from "../../../../shared/components/molecules/row-data/row-data.component";
import { FormState } from "../../../../shared/state/reducers/form.reducer";
import { ActionForm } from "../../../../shared/models/ActionsForm";
import { PetFormComponent } from "../../components/organisms/pet-form/pet-form.component";
import { changeActionForm } from "../../../../shared/state/actions/form.actions";
import { TableDataComponent } from "../../../../shared/components/organisms/table-data/table-data.component";

@Component({
  selector: "app-pets",
  imports: [
    ManagerLayoutComponent,
    RowDataComponent,
    PetFormComponent,
    TableDataComponent,
  ],
  templateUrl: "./pets.component.html",
  styleUrl: "./pets.component.scss",
})
export class PetsComponent implements OnInit {
  pets!: PetResponse[];

  ngOnInit(): void {
    this.store.dispatch(getAll());
  }

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private storeForm: Store<{ FormState: FormState }>,
    private router: Router
  ) {
    store.subscribe(({ petsState }) => {
      this.pets = petsState.pets;
    });
  }

  setPetSelected(petId: number) {
    return () => {
      this.store.dispatch(getPetById({ petId }));
      this.storeForm.dispatch(
        changeActionForm({ actionForm: ActionForm.EDIT })
      );
    };
  }
}
