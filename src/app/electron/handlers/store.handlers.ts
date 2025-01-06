import { ipcMain } from "electron";
import { StoreEntity } from "../../models/store.entity";
import { Repository } from "typeorm";
import { DataSourceConnection } from "../config/DataSourceConnection";

const appDataSource = new DataSourceConnection();
const repository: Repository<StoreEntity> =
  appDataSource.getRepository(StoreEntity);

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
