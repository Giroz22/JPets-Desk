import { createAction, props } from "@ngrx/store";
import { PetsResponse } from "../models/pet.response";
import { ActionPet, PetSelected } from "../reducers/pets.reducer";
import { PetRequest } from "../models/pet.request";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";

export const setAll = createAction(
  "[Pet Component] setPets",
  props<{ newPets: PetsResponse[] }>()
);
export const changePetSelected = createAction(
  "[Pet component] changePetSelected",
  props<{ newPetSelected: PetSelected }>()
);
export const setPetId = createAction(
  "[Pet component] setPetId",
  props<{ petId: number; action: ActionPet }>()
);
export const clearPetSelected = createAction(
  "[Pet component] cleanPetSelected"
);

export const changeActionPet = createAction(
  "[Pet component] changeActionPet",
  props<{ action: ActionPet }>()
);

export const getAll = createAction("[Pet component] getAll");
export const getAllPagination = createAction(
  "[Pet component] getAllPagination",
  props<{ numPage: number; size: number }>()
);

export const createPetAction = createAction(
  "[Pet component] create",
  props<{ newPet: PetResponse }>()
);
export const updatePetAction = createAction(
  "[Pet component] updatePet",
  props<{ petUpdate: PetResponse }>()
);
export const deletePet = createAction(
  "[Pet component] delete",
  props<{ petId: number }>()
);

export const setPagination = createAction(
  "[Pet component] setPagination",
  props<{ size: number; actualPage: number }>()
);

export const setTotalPage = createAction(
  "[Pet component] setTotalPage",
  props<{ totalPage: number }>()
);

//Effects
export const createPet = createAction(
  "[Pet component] createPet",
  props<{ newPet: PetRequest }>()
);
export const updatePet = createAction(
  "[Pet component]",
  props<{ petId: number; petUpdate: PetRequest }>()
);
