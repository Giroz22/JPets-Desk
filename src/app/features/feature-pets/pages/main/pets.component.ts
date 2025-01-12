import { Component, OnInit } from "@angular/core";
import { TableDataComponent } from "../../../../shared/components/table-data/table-data.component";
import { PetsService } from "../../services/pets.service";
import { PetRequest } from "../../state/models/pet.request";
import { PetsResponse } from "../../state/models/pet.response";
import { Store } from "@ngrx/store";
import { getAll } from "../../state/actions/pets.actions";

@Component({
  selector: "pets-page",
  imports: [TableDataComponent],
  templateUrl: "./pets.component.html",
  styleUrl: "./pets.component.scss",
})
export class PetsComponent implements OnInit {
  pets!: PetsResponse[];
  showModal: boolean = false;
  selectedPet!: PetsResponse;
  showTable: boolean = false;

  constructor(
    private service: PetsService,
    private store: Store<{ pets: PetsResponse[] }>
  ) {
    this.store.select("pets").subscribe((pets) => {
      this.pets = pets;
      this.showTable = this.pets.length ? true : false;
    });
  }

  ngOnInit() {
    this.store.dispatch(getAll());
  }

  async crear() {
    const pet = new PetRequest();
    pet.name = "chispas";
    pet.ownerName = "Catalina";
    this.service.create(pet);
  }

  editPet(id: any) {}
}
