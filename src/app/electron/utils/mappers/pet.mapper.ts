import { createMap } from "@automapper/core";
import { PetRequest } from "../../../models/dtos/request/pet.request";
import { PetResponse } from "../../../models/dtos/response/pet.response";
import { PetEntity } from "../../../models/pet.entity";
import { mapperConfig } from "../../config/mapperConfig";

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
