import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { PetsState } from "../../state/reducers/pets.reducer";
import { PetsResponse } from "../../state/models/pet.response";
import { getAll, setPetId } from "../../state/actions/pets.actions";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "pets-table",
  imports: [RouterLink],
  templateUrl: "./pets-table.component.html",
  styleUrl: "./pets-table.component.scss",
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
    this.store.dispatch(getAll());
  }

  showDetails(id: number) {
    this.store.dispatch(setPetId({ petId: id }));
    // this.router.navigate([""]);
  }
}
