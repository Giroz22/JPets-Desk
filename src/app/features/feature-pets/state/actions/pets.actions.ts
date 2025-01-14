import { createAction, props } from "@ngrx/store";
import { PetsResponse } from "../models/pet.response";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";

export const setAll = createAction(
  "[Pet Component] setPets",
  props<{ newPets: PetsResponse[] }>()
);
export const setPet = createAction(
  "[Pet component] setPet",
  props<{ newPet: PetResponse }>()
);
export const setPetId = createAction(
  "[Pet component] setPetId",
  props<{ petId: number }>()
);

export const getAll = createAction("[Pet component] getAll");
