import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PetsService } from "../../services/pets.service";
import { exhaustMap, map } from "rxjs";
import { getAll, setAll, setPet, setPetId } from "../actions/pets.actions";

@Injectable()
export class PetsEffect {
  getAllPets$!: any;
  setPet$!: any;

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

    this.setPet$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(setPetId),
          exhaustMap((action) => this.service.getById(action.petId))
        )
        .pipe(map((pet) => setPet({ newPet: pet })))
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
