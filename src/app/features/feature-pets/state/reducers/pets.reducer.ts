import { createReducer, on } from "@ngrx/store";
import { PetsResponse } from "../models/pet.response";
import {
  changeActionPet,
  createPetAction,
  deletePet,
  changePetSelected,
  setAll,
  updatePetAction,
  clearPetSelected,
  setPagination,
  setTotalPage,
} from "../actions/pets.actions";
import { ActionPet } from "../../pages/manager/manager.component";
import { PetResponse } from "../../../../../electron/models/dtos/pet.response";

export interface PetsState {
  pets: PetsResponse[];
  petSelected: PetSelected;
  pagination: {
    size: number;
    actualPage: number;
    totalPages: number;
  };
}

export interface PetSelected {
  pet: PetsResponse;
  action: ActionPet;
}

export const initialState: PetsState = {
  pets: [],
  petSelected: { pet: new PetsResponse(), action: ActionPet.CREATE },
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
    petSelected: state.petSelected,
    pagination: state.pagination,
  })),
  on(setPagination, (state, { size, actualPage }) => ({
    pets: state.pets,
    petSelected: state.petSelected,
    pagination: {
      size: size,
      actualPage: actualPage,
      totalPages: state.pagination.totalPages,
    },
  })),
  on(setTotalPage, (state, { totalPage }) => ({
    pets: state.pets,
    petSelected: state.petSelected,
    pagination: {
      size: state.pagination.size,
      actualPage: state.pagination.actualPage,
      totalPages: totalPage,
    },
  })),
  on(changePetSelected, (state, { newPetSelected }) => ({
    pets: state.pets,
    petSelected: newPetSelected,
    pagination: state.pagination,
  })),
  on(clearPetSelected, (state) => ({
    pets: state.pets,
    petSelected: {
      pet: new PetResponse(),
      action: ActionPet.CREATE,
    },
    pagination: state.pagination,
  })),
  on(createPetAction, (state, { newPet }) => ({
    pets: [...state.pets, newPet],
    petSelected: state.petSelected,
    pagination: state.pagination,
  })),
  on(updatePetAction, (state, { petUpdate }) => ({
    pets: state.pets.map((pet) => {
      if (pet.id === petUpdate.id) {
        return petUpdate;
      }
      return pet;
    }),
    petSelected: { pet: petUpdate, action: ActionPet.EDIT },
    pagination: state.pagination,
  })),
  on(deletePet, (state, { petId }) => ({
    pets: state.pets.filter((pet) => pet.id != petId),
    petSelected: state.petSelected,
    pagination: state.pagination,
  })),
  on(changeActionPet, (state, { action }) => ({
    pets: state.pets,
    petSelected: {
      pet: state.petSelected.pet,
      action: action,
    },
    pagination: state.pagination,
  }))
);
