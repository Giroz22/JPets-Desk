import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PetsService } from "../../services/pets.service";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs";
import {
  changePetSelected,
  createPet,
  createPetAction,
  deletePet,
  getAll,
  getAllPagination,
  setAll,
  setPagination,
  setPetId,
  setTotalPage,
  updatePet,
  updatePetAction,
} from "../actions/pets.actions";
import Swal from "sweetalert2";
import { mapWithArguments } from "@automapper/core";

@Injectable()
export class PetsEffect {
  getAllPets$!: any;
  getAllPetsPagination$!: any;
  changePetSelected$!: any;
  create$!: any;
  updatePet$!: any;
  deletePet$!: any;

  constructor(private actions$: Actions, private service: PetsService) {
    this.getAllPets$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(getAll),
          exhaustMap(() => this.service.getAll())
        )
        .pipe(
          map((pets) => {
            return setAll({ newPets: pets });
          })
        )
    );

    this.getAllPetsPagination$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getAllPagination),
        exhaustMap(({ numPage, size }) =>
          this.service.getAllPetsPagination(numPage, size).pipe(
            concatMap(({ data, totalPages }) => {
              return [
                setPagination({ actualPage: numPage, size: size }),
                setAll({ newPets: data }),
                setTotalPage({ totalPage: totalPages }),
              ];
            })
          )
        )
      )
    );

    this.changePetSelected$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setPetId),
        exhaustMap((props) =>
          this.service.getById(props.petId).pipe(
            map((pet) =>
              changePetSelected({
                newPetSelected: { pet, action: props.action },
              })
            )
          )
        )
      )
    );

    this.create$ = createEffect(() =>
      this.actions$.pipe(
        ofType(createPet),
        exhaustMap((props) =>
          this.service.create(props.newPet).pipe(
            map((newPet) => {
              Swal.fire({
                title: `${newPet.name} fue agregado correctamente!!`,
                icon: "success",
                draggable: true,
              });
              return createPetAction({ newPet });
            })
          )
        )
      )
    );

    this.updatePet$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updatePet),
        exhaustMap(({ petId, petUpdate }) =>
          this.service.update(petId, petUpdate).pipe(
            map((petUpdated) => {
              Swal.fire({
                title: `${petUpdate.name} fue actualizado correctamente!!`,
                icon: "success",
                draggable: true,
              });
              return updatePetAction({ petUpdate: petUpdated });
            })
          )
        )
      )
    );

    this.deletePet$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(deletePet),
          exhaustMap((action) => this.service.delete(action.petId))
        )
        .pipe(
          map((pet) => {
            Swal.fire({
              title: `${pet.name} fue eliminado correctamente!!`,
              icon: "success",
            });
            return deletePet({ petId: pet.id });
          })
        )
    );
  }

  // getAllPets$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAll),
  //     exhaustMap(() =>
  //       this.service.getAll().pipe(
  //         map((pets) => setAll({ pets })),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );
}
