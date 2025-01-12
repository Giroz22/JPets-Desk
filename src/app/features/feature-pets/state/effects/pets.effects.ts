import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PetsService } from "../../services/pets.service";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { getAll, setAll } from "../actions/pets.actions";
import { error } from "console";

@Injectable()
export class PetsEffect {
  getAllPets$!: any;

  constructor(private actions$: Actions, private service: PetsService) {
    this.getAllPets$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(getAll),
          exhaustMap(() => this.service.getAll())
        )
        .pipe(
          map((pets) => {
            return setAll({ pets });
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
