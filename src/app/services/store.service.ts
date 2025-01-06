import { Injectable } from "@angular/core";
import { StoreEntity } from "../models/store.entity";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor() {}

  async getStore(): Promise<StoreEntity> {
    try {
      return (await (window as any).electronAPI.getStore()) as StoreEntity;
    } catch (error) {
      throw Error("Error al obtener la tienda");
    }
  }
}
