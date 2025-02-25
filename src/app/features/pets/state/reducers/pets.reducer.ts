import { createReducer, on } from "@ngrx/store";
import { PetsResponse } from "../models/pet.response";
import {
  createPetAction,
  deletePet,
  setAll,
  updatePetAction,
  setPagination,
  setTotalPage,
} from "../actions/pets.actions";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";
import { ActionForm } from "../../../../shared/models/ActionsForm";

export interface PetsState {
  pets: PetsResponse[];
  pagination: {
    size: number;
    actualPage: number;
    totalPages: number;
  };
}
export interface PetSelected {
  pet: PetsResponse;
  action: ActionForm;
}

export const initialState: PetsState = {
  pets: [],
  pagination: {
    size: 10,
    actualPage: 1,
    totalPages: 0,
  },
};
export const petsReducer = createReducer(
  initialState,
  on(setAll, (state, { newPets }) => ({
    pets: [...newPets],
    pagination: state.pagination,
  })),
  on(setPagination, (state, { size, actualPage }) => ({
    pets: state.pets,
    pagination: {
      size: size,
      actualPage: actualPage,
      totalPages: state.pagination.totalPages,
    },
  })),
  on(setTotalPage, (state, { totalPage }) => ({
    pets: state.pets,
    pagination: {
      size: state.pagination.size,
      actualPage: state.pagination.actualPage,
      totalPages: totalPage,
    },
  })),
  on(createPetAction, (state, { newPet }) => ({
    pets: [...state.pets, newPet],
    pagination: state.pagination,
  })),
  on(updatePetAction, (state, { petUpdate }) => ({
    pets: state.pets.map((pet) => {
      if (pet.id === petUpdate.id) {
        return petUpdate;
      }
      return pet;
    }),
    petSelected: { pet: petUpdate, action: ActionForm.EDIT },
    pagination: state.pagination,
  })),
  on(deletePet, (state, { petId }) => ({
    pets: state.pets.filter((pet) => pet.id != petId),
    pagination: state.pagination,
  }))
);
