import { createReducer, on } from "@ngrx/store";
import { PetsResponse } from "../models/pet.response";
import { setAll, setPet } from "../actions/pets.actions";

export interface PetsState {
  pets: PetsResponse[];
  pet: PetsResponse;
}

export const initialState: PetsState = { pets: [], pet: new PetsResponse() };
export const petsReducer = createReducer(
  initialState,
  on(setAll, (state, { newPets }) => ({
    pets: [...newPets],
    pet: state.pet,
  })),
  on(setPet, (state, { newPet }) => ({
    pets: state.pets,
    pet: newPet,
  }))
);
