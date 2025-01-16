import { AutoMap } from "@automapper/classes";

export class PetRequest {
  @AutoMap()
  name: string = "";

  @AutoMap()
  ownerName: string = "";
}
