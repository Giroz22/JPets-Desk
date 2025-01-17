import { AutoMap } from "@automapper/classes";

export class PetResponse {
  @AutoMap()
  id!: number;

  @AutoMap()
  name: string = "";

  @AutoMap()
  ownerName: string = "";

  @AutoMap()
  tel: string = "";

  @AutoMap()
  image!: string;
}
