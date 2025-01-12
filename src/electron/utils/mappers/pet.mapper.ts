import { createMap } from "@automapper/core";
import { PetEntity } from "../../models/pet.entity";
import { mapperConfig } from "../../config/mapperConfig";
import { PetResponse } from "../../models/dtos/pet.response";
import { PetRequest } from "../../models/dtos/pet.request";

export class PetMapper {
  constructor() {
    createMap(mapperConfig, PetEntity, PetResponse);
    createMap(mapperConfig, PetRequest, PetEntity);
  }

  petToResponse(pet: PetEntity): PetResponse {
    return mapperConfig.map(pet, PetEntity, PetResponse);
  }

  requestToPet(petRequest: PetRequest): PetEntity {
    return mapperConfig.map(petRequest, PetRequest, PetEntity);
  }
}
