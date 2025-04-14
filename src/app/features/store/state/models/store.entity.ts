import { PetEntity } from "../../../../../../electron/domain/models/pet.entity";

export class StoreEntity {
  id!: number;

  name: string = "";

  pets!: PetEntity[];
}
