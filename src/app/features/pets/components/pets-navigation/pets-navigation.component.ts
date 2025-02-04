import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PetsState } from "../../state/reducers/pets.reducer";
import { getAllPagination } from "../../state/actions/pets.actions";

@Component({
  selector: "pets-navigation",
  imports: [],
  templateUrl: "./pets-navigation.component.html",
  styleUrl: "./pets-navigation.component.scss",
})
export class PetsNavigationComponent implements OnInit {
  size: number = 0;
  actualPage: number = 0;
  totalPages: number = 0;

  ngOnInit(): void {}

  constructor(private store: Store<{ petsState: PetsState }>) {
    this.store.subscribe(({ petsState }) => {
      this.size = petsState.pagination.size;
      this.actualPage = petsState.pagination.actualPage;
      this.totalPages = petsState.pagination.totalPages;
    });
  }

  setPage(page: number) {
    this.store.dispatch(getAllPagination({ numPage: page, size: this.size }));
  }

  previous() {
    if (this.actualPage > 1) this.setPage(this.actualPage - 1);
  }
  next() {
    if (this.actualPage < this.totalPages) this.setPage(this.actualPage + 1);
  }
}
