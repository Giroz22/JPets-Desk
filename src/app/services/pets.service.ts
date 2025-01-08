import { Injectable } from "@angular/core";
import { PetEntity } from "../models/pet.entity";

@Injectable({
  providedIn: "root",
})
export class PetsService implements IGenericService<PetEntity> {
  constructor() {}

  async getAll(): Promise<PetEntity[]> {
    return (await (window as any).electronAPI.getAllPets()) as PetEntity[];
  }
  async getById(id: any): Promise<PetEntity> {
    return (await (window as any).electronAPI.getPetbyId(id)) as PetEntity;
  }
  async create(entity: PetEntity): Promise<PetEntity> {
    return (await (window as any).electronAPI.createPet(entity)) as PetEntity;
  }
  async update(id: any, entity: PetEntity): Promise<PetEntity> {
    return (await (window as any).electronAPI.updatePet(
      id,
      entity
    )) as PetEntity;
  }
  async delete(id: any): Promise<void> {
    await (window as any).electronAPI.deletePet(id);
  }
}
