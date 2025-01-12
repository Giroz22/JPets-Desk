import { createAction, props } from "@ngrx/store";
import { PetsResponse } from "../models/pet.response";

export const getAll = createAction("[Pet component] getAll");
export const setAll = createAction(
  "[Pet Component] setPets",
  props<{ pets: PetsResponse[] }>()
);
