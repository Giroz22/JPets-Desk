import { Component, Input, input } from "@angular/core";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";
import { Store } from "@ngrx/store";
import { ActionPet, PetsState } from "../../state/reducers/pets.reducer";
import { Router } from "@angular/router";
import { setPetId } from "../../state/actions/pets.actions";

@Component({
  selector: "pet-row-data",
  imports: [],
  templateUrl: "./pet-row-data.component.html",
  styleUrl: "./pet-row-data.component.scss",
})
export class PetRowDataComponent {
  @Input() pet: PetResponse = new PetResponse();
  isHover: boolean = false;

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {}

  showDetails(id: number) {
    this.router.navigate(["/mascotas/manager"]);
    this.store.dispatch(setPetId({ petId: id, action: ActionPet.EDIT }));
  }
}
