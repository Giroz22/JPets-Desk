import { Injectable } from "@angular/core";
import { PetEntity } from "../models/pet.entity";
import { PetResponse } from "../models/dtos/response/pet.response";
import { PetRequest } from "../models/dtos/request/pet.request";

@Injectable({
  providedIn: "root",
})
export class PetsService implements IGenericService<PetRequest, PetResponse> {
  constructor() {}

  async getAll(): Promise<PetResponse[]> {
    return (await (window as any).electronAPI.getAllPets()) as PetResponse[];
  }
  async getById(id: any): Promise<PetResponse> {
    return (await (window as any).electronAPI.getPetbyId(id)) as PetResponse;
  }
  async create(entity: PetRequest): Promise<PetResponse> {
    return (await (window as any).electronAPI.createPet(entity)) as PetResponse;
  }
  async update(id: any, entity: PetRequest): Promise<PetResponse> {
    return (await (window as any).electronAPI.updatePet(
      id,
      entity
    )) as PetEntity;
  }
  async delete(id: any): Promise<PetResponse> {
    return await (window as any).electronAPI.deletePet(id);
  }
}
