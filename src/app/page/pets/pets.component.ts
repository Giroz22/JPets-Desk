import { Component, OnInit } from "@angular/core";
import { PetsService } from "../../services/pets.service";
import { PetEntity } from "../../models/pet.entity";
import { TableDataComponent } from "../../components/table-data/table-data.component";
import { StoreService } from "../../services/store.service";

@Component({
  selector: "pets-page",
  imports: [TableDataComponent],
  templateUrl: "./pets.component.html",
  styleUrl: "./pets.component.scss",
})
export class PetsComponent implements OnInit {
  pets!: Promise<PetEntity[]>;

  constructor(
    public service: PetsService,
    private serviceStore: StoreService
  ) {}

  ngOnInit() {
    this.pets = this.service.getAll();
  }

  async crear() {
    const pet = new PetEntity();
    pet.name = "chispas";
    pet.ownerName = "Catalina";

    this.serviceStore.getStore().then((store) => {
      pet.store = store;
      this.service.create(pet);
    });
  }
}
