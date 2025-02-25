import { AutoMap } from "@automapper/classes";

export class PetRequest {
  @AutoMap()
  id: number = 0;

  @AutoMap()
  name: string = "";

  @AutoMap()
  ownerName: string = "";

  @AutoMap()
  tel: string = "";

  @AutoMap()
  image: string = "";
}
