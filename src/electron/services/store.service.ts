import { Repository } from "typeorm";
import { StoreEntity } from "../models/store.entity";
import { getRepository } from "../config/DataSourceConnection";

export class StoreService {
  static async getStore() {
    const repository: Repository<StoreEntity> = getRepository(StoreEntity);

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
  }
}
