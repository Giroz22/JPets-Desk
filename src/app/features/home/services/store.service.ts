import { Injectable } from "@angular/core";
import { StoreEntity } from "../state/models/store.entity";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor() {}

  async getStore(): Promise<StoreEntity> {
    try {
      return await (window as any).electronAPI.getStore();
    } catch (error) {
      throw Error("Error al obtener la tienda");
    }
  }
}
