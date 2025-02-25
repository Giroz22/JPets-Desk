import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Router } from "@angular/router";

import Swal from "sweetalert2";
import { FormsModule } from "@angular/forms";
import { PetsState } from "../../../state/reducers/pets.reducer";
import { PetRequest } from "../../../state/models/pet.request";
import {
  createPet,
  deletePet,
  updatePet,
} from "../../../state/actions/pets.actions";
import { AvatarComponent } from "../../../../../shared/components/atoms/avatar/avatar.component";
import { ActionForm } from "../../../../../shared/models/ActionsForm";
import { FormState } from "../../../../../shared/state/reducers/form.reducer";
import {
  changeActionForm,
  setDataForm,
} from "../../../../../shared/state/actions/form.actions";
import { ButtonsActionFormComponent } from "../../../../../shared/components/molecules/buttons-action-form/buttons-action-form.component";

@Component({
  selector: "app-pet-form",
  imports: [FormsModule, AvatarComponent, ButtonsActionFormComponent],
  standalone: true,
  templateUrl: "./pet-form.component.html",
  styleUrl: "./pet-form.component.scss",
})
export class PetFormComponent implements OnInit {
  petForm: PetRequest = new PetRequest();
  actionForm: ActionForm = ActionForm.CREATE;

  private previusState: ActionForm = ActionForm.HIDDEN;

  constructor(
    private store: Store<{ petsState: PetsState }>,
    private storeForm: Store<{ FormState: FormState }>,
    private router: Router
  ) {
    this.storeForm.subscribe(({ FormState }) => {
      this.actionForm = FormState.actionForm;

      if (
        FormState.actionForm === ActionForm.CREATE &&
        this.previusState !== ActionForm.CREATE
      ) {
        this.cleanForm();
      }
      //Evita ciclo infinito entre el cambio de estado y la actualización del formulario
      this.previusState = FormState.actionForm;
      const petSelected = FormState.data ?? new PetRequest();

      this.petForm = { ...petSelected };
    });
  }

  cleanForm() {
    this.storeForm.dispatch(setDataForm({ data: new PetRequest() }));
  }

  ngOnInit() {}

  setActionEdit() {
    this.storeForm.dispatch(changeActionForm({ actionForm: ActionForm.EDIT }));
  }
  setActionUpdate() {
    this.storeForm.dispatch(
      changeActionForm({ actionForm: ActionForm.UPDATE })
    );
  }

  submit() {
    const idExist: boolean = this.petForm.id > 0;

    if (idExist) {
      this.store.dispatch(
        updatePet({ petId: this.petForm.id, petUpdate: this.petForm })
      );
    } else {
      console.log(this.petForm);
      this.store.dispatch(createPet({ newPet: this.petForm }));
      this.router.navigate(["/mascotas"]);
    }
    this.cleanForm();
  }

  delete() {
    Swal.fire({
      title: `Estas seguro de eliminar a ${this.petForm.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deletePet({ petId: this.petForm.id }));
        this.router.navigate(["/mascotas"]);
      }
    });
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

  setName(name: string) {
    this.storeForm.dispatch(setDataForm({ data: { ...this.petForm, name } }));
  }
}
