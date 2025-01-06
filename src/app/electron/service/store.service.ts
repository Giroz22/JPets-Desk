import { ipcMain } from "electron";
import { AppDataSource } from "../config/dataSource.config";
import { StoreEntity } from "../../models/store.entity";

export const repository = AppDataSource.getRepository(StoreEntity);

ipcMain.handle("get-store", async () => {
  let store: StoreEntity | null;

  store = await repository.findOne({
    where: {
      id: 1,
    },
  });

  if (!store) {
    store = new StoreEntity();
    store.id = 1;
    store.name = "JPets";
    return await repository.save(store);
  }

  return store;
});
