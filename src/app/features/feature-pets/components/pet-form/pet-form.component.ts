import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  ActionPet,
  PetSelected,
  PetsState,
} from "../../state/reducers/pets.reducer";
import { Router } from "@angular/router";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";
import { PetRequest } from "../../state/models/pet.request";
import {
  changeActionPet,
  createPet,
  deletePet,
  updatePet,
} from "../../state/actions/pets.actions";
import Swal from "sweetalert2";
import { FormGroup, FormsModule } from "@angular/forms";

@Component({
  selector: "pet-form",
  imports: [FormsModule],
  standalone: true,
  templateUrl: "./pet-form.component.html",
  styleUrl: "./pet-form.component.scss",
})
export class PetFormComponent {
  petSelected: PetSelected = {
    pet: new PetResponse(),
    action: ActionPet.CREATE,
  };
  petForm: PetRequest = new PetRequest();
  previewImg: string = "imgs/ImgExample.png";

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private router: Router
  ) {
    this.store.subscribe(({ petsState }) => {
      this.petSelected = petsState.petSelected;
      this.petForm = { ...this.petSelected.pet };
    });
  }

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
      console.log(this.petForm);
      this.store.dispatch(createPet({ newPet: this.petForm }));
      this.router.navigate(["/mascotas"]);
    }
    this.previewImg = "";
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

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const renderResult = reader.result as string;
        if (renderResult.length > 0) {
          this.petForm.image = renderResult;
        } else {
          this.petForm.image = "imgs/ImgExample.png";
        }
      };
      reader.readAsDataURL(file); // Leer el archivo como base64
    }
  }
}
