import { createReducer, on } from "@ngrx/store";
import { PetsResponse } from "../models/pet.response";
import { setAll } from "../actions/pets.actions";

export const initialState: PetsResponse[] = [];
export const petsReducer = createReducer(
  initialState,
  on(setAll, (state, { pets }) => [...pets])
);
