import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActionPet, PetsState } from "../../state/reducers/pets.reducer";
import { PetsResponse } from "../../state/models/pet.response";
import { getAllPagination, setPetId } from "../../state/actions/pets.actions";
import { Router } from "@angular/router";
import { PetsNavigationComponent } from "../pets-navigation/pets-navigation.component";

@Component({
  selector: "pets-table",
  templateUrl: "./pets-table.component.html",
  styleUrl: "./pets-table.component.scss",
  imports: [PetsNavigationComponent],
})
export class PetsTableComponent {
  pets: PetsResponse[] = [];
  showTable: boolean = false;

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {
    this.store.subscribe(({ petsState }) => {
      this.pets = petsState.pets;
      this.showTable = petsState.pets != undefined && petsState.pets.length > 0;
    });
  }

  ngOnInit() {
    this.store.dispatch(getAllPagination({ numPage: 1, size: 5 }));
  }

  showDetails(id: number) {
    this.router.navigate(["/manager"]);
    this.store.dispatch(setPetId({ petId: id, action: ActionPet.EDIT }));
  }
}
