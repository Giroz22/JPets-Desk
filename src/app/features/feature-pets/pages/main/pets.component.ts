import { Component, OnInit } from "@angular/core";
import { TableDataComponent } from "../../../../shared/components/table-data/table-data.component";
import { PetsService } from "../../services/pets.service";
import { PetRequest } from "../../state/models/pet.request";
import { PetResponse } from "../../state/models/pet.response";

@Component({
  selector: "pets-page",
  imports: [TableDataComponent],
  templateUrl: "./pets.component.html",
  styleUrl: "./pets.component.scss",
})
export class PetsComponent implements OnInit {
  pets!: Promise<PetResponse[]>;
  showModal: boolean = false;
  selectedPet!: PetResponse;

  constructor(public service: PetsService) {}

  ngOnInit() {
    this.pets = this.service.getAll();
  }

  async crear() {
    const pet = new PetRequest();
    pet.name = "chispas";
    pet.ownerName = "Catalina";
    this.service.create(pet).then((newpet) => {
      console.log(pet);
      console.log(newpet);
    });
  }

  editPet(id: any) {}

  //Implementar Redux!!!
}
