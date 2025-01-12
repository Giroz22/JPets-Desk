import { Component, OnInit } from "@angular/core";
import { TableDataComponent } from "../../components/table-data/table-data.component";
import { PetsService } from "../../../services/pets.service";
import { PetRequest } from "../../../models/dtos/request/pet.request";
import { PetResponse } from "../../../models/dtos/response/pet.response";

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
