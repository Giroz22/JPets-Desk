import { Injectable } from "@angular/core";
import { StoreEntity } from "../models/store.entity";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor() {}

  async getStore(): Promise<StoreEntity | null> {
    try {
      // Validar si electronAPI está disponible
      if (
        !(window as any).electronAPI ||
        !(window as any).electronAPI.getStore
      ) {
        console.error("electronAPI o el método getStore no están disponibles.");
        return null;
      }

      // Llamar al método expuesto por Electron
      const store = (await (
        window as any
      ).electronAPI.getStore()) as StoreEntity;

      console.log("Store obtenida:", store);
      return store;
    } catch (error) {
      console.error("Error al obtener la tienda:", error);
      return null;
    }
  }
}
