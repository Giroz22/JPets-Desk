import { Injectable } from "@angular/core";
import { PetResponse } from "../state/models/pet.response";
import { PetRequest } from "../state/models/pet.request";

@Injectable({
  providedIn: "root",
})
export class PetsService
  implements
    IGetAll<PetResponse>,
    IGetById<PetResponse, number>,
    ICreate<PetRequest, PetResponse>,
    IUpdate<PetRequest, PetResponse, number>,
    IDelete<PetResponse, number>
{
  constructor() {}

  async getAll(): Promise<PetResponse[]> {
    return await (window as any).electronAPI.getAllPets();
  }
  async getById(id: number): Promise<PetResponse> {
    return await (window as any).electronAPI.getPetbyId(id);
  }
  async create(entity: PetRequest): Promise<PetResponse> {
    return await (window as any).electronAPI.createPet(entity);
  }
  async update(id: number, entity: PetRequest): Promise<PetResponse> {
    return await (window as any).electronAPI.updatePet(id, entity);
  }
  async delete(id: any): Promise<PetResponse> {
    return await (window as any).electronAPI.deletePet(id);
  }
}
