// src/typings/electron-api.d.ts
import { StoreEntity } from "../app/models/store.entity";

declare global {
  interface Window {
    electronAPI: {
      getStore: () => any;
    };
  }
}
