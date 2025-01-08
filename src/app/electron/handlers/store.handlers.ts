import { ipcMain } from "electron";
import { StoreEntity } from "../../models/store.entity";
import { Repository } from "typeorm";
import { getRepository } from "../config/DataSourceConnection";

const repository: Repository<StoreEntity> = getRepository(StoreEntity);

ipcMain.handle("get-store", async () => {
  let store: StoreEntity | null;

  store = await repository.findOne({
    where: {
      id: 1,
    },
    relations: {
      pets: true,
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
