import { AutoMap } from "@automapper/classes";

export class PetRequest {
  @AutoMap()
  name: string = "";

  @AutoMap()
  ownerName: string = "";

  @AutoMap()
  tel: string = "";

  @AutoMap()
  image!: string;
}
