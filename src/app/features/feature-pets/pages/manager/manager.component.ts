import { Component, Input, OnInit } from "@angular/core";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";
import { Store } from "@ngrx/store";
import { PetSelected, PetsState } from "../../state/reducers/pets.reducer";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import {
  changeActionPet,
  createPet,
  deletePet,
  updatePet,
} from "../../state/actions/pets.actions";
import { FormsModule } from "@angular/forms";
import { PetRequest } from "../../state/models/pet.request";

export enum ActionPet {
  EDIT = "EDIT",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}

@Component({
  selector: "app-manager",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./manager.component.html",
  styleUrl: "./manager.component.scss",
})
export class ManagerPetsComponent implements OnInit {
  petForm: PetRequest = new PetRequest();
  petSelected: PetSelected = {
    pet: new PetResponse(),
    action: ActionPet.CREATE,
  };

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {
    this.store.subscribe(({ petsState }) => {
      this.petSelected = petsState.petSelected;
      this.petForm = { ...this.petSelected.pet };
    });
  }

  ngOnInit(): void {}

  setActionEdit() {
    this.store.dispatch(changeActionPet({ action: ActionPet.EDIT }));
  }
  setActionUpdate() {
    this.store.dispatch(changeActionPet({ action: ActionPet.UPDATE }));
  }

  submit() {
    if (this.petSelected.pet.id) {
      this.store.dispatch(
        updatePet({ petId: this.petSelected.pet.id, petUpdate: this.petForm })
      );
    } else {
      this.store.dispatch(createPet({ newPet: this.petForm }));
      this.router.navigate(["/mascotas"]);
    }
  }

  delete() {
    Swal.fire({
      title: `Estas seguro de eliminar a ${this.petSelected.pet.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deletePet({ petId: this.petSelected.pet.id }));
        this.router.navigate(["/mascotas"]);
      }
    });
  }

  backHome() {
    this.router.navigate(["/mascotas"]);
  }
}
