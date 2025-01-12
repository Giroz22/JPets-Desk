import { AutoMap } from "@automapper/classes";

export class PetsResponse {
  @AutoMap()
  id!: number;

  @AutoMap()
  name: string = "";

  @AutoMap()
  ownerName: string = "";
}
