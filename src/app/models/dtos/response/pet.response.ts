import { AutoMap } from "@automapper/classes";

export class PetResponse {
  @AutoMap()
  id!: number;

  @AutoMap()
  name: string = "";

  @AutoMap()
  ownerName: string = "";
}