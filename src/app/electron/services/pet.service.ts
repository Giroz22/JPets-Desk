import { Repository } from "typeorm";
import { PetEntity } from "../../models/pet.entity";
import { getRepository } from "../config/DataSourceConnection";
import { PetRequest } from "../../models/dtos/request/pet.request";
import { PetMapper } from "../utils/mappers/pet.mapper";
import { errorAlert } from "../utils/alerts";
import { PetResponse } from "../../models/dtos/response/pet.response";
import { StoreService } from "./store.service";

export class PetsService {
  repository: Repository<PetEntity> = getRepository(PetEntity);

  mapper: PetMapper = new PetMapper();

  public async getAllPets(): Promise<PetResponse[]> {
    return (await this.repository.find()).map((petEntity) =>
      this.mapper.petToResponse(petEntity)
    );
  }
  public async getPetbyId(petId: any): Promise<PetResponse | null> {
    const petFound = await this.repository.findOne({
      where: { id: petId },
    });
    return petFound && this.mapper.petToResponse(petFound);
  }
  public async createPet(petRequest: PetRequest): Promise<PetResponse | null> {
    try {
      const pet: PetEntity = this.mapper.requestToPet(petRequest);
      pet.store = await StoreService.getStore();

      const newPet: PetEntity = await this.repository.save(pet);

      return this.mapper.petToResponse(newPet);
    } catch (error) {
      errorAlert("Error al crear la mascota: " + error);
      return null;
    }
  }
  public async updatePet(
    petId: any,
    petRequest: PetRequest
  ): Promise<PetResponse | null> {
    try {
      await this.find(petId);

      const pet: PetEntity = this.mapper.requestToPet(petRequest);

      await this.repository.update({ id: petId }, { ...pet });

      const petUpdated: PetEntity | null = await this.repository.findOne({
        where: { id: petId },
      });

      return petUpdated && this.mapper.petToResponse(petUpdated);
    } catch (error) {
      errorAlert("Error al actualizar la mascota: " + error);
      return null;
    }
  }
  public async deletePet(petId: any): Promise<PetResponse | null> {
    const pet: PetEntity | null = await this.find(petId);
    this.repository.softRemove({ ...pet });
    return pet && this.mapper.petToResponse(pet);
  }

  private async find(petId: any): Promise<PetEntity | null> {
    let pet: PetEntity | null = new PetEntity();

    await this.repository
      .findOne({
        where: { id: petId },
      })
      .then((petFound: PetEntity | null) => {
        if (petFound == null) {
          errorAlert("No se encontro mascota con el id: " + petId);
        }

        pet = petFound;
      })
      .catch((error: any) => errorAlert("Error buscando Pet" + error));

    return pet;
  }
}
