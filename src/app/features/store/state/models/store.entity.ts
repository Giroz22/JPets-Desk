import { PetEntity } from "../../../../../electron/models/pet.entity";

export class StoreEntity {
  id!: number;

  name: string = "";

  pets!: PetEntity[];
}
