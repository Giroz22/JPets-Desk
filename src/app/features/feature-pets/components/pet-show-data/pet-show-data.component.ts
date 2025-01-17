import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PetsState } from "../../state/reducers/pets.reducer";
import { PetsResponse } from "../../state/models/pet.response";
import { PetRowDataComponent } from "../pet-row-data/pet-row-data.component";
import { getAll, getAllPagination } from "../../state/actions/pets.actions";

@Component({
  selector: "pet-show-data",
  imports: [PetRowDataComponent],
  templateUrl: "./pet-show-data.component.html",
  styleUrl: "./pet-show-data.component.scss",
})
export class PetShowDataComponent implements OnInit {
  pets: PetsResponse[] = [];

  ngOnInit(): void {
    this.store.dispatch(getAllPagination({ numPage: 1, size: 10 }));
  }

  constructor(private store: Store<{ petsState: PetsState }>) {
    this.store.subscribe(({ petsState }) => {
      this.pets = petsState.pets;
    });
  }
}
