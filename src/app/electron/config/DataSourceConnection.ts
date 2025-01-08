import "reflect-metadata";
import { DataSource, Repository } from "typeorm";
import { StoreEntity } from "../../models/store.entity";
import { PetEntity } from "../../models/pet.entity";

let appDataSource: DataSource;

export function openConnection() {
  appDataSource = new DataSource({
    type: "sqlite",
    database: "src/app/electron/database/jpets.sql",
    entities: [StoreEntity, PetEntity],
    synchronize: true,
  });
  appDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}

export function closeConnection() {
  appDataSource.destroy();
}

export function getRepository(entity: any): Repository<typeof entity> {
  try {
    return appDataSource.getRepository(entity);
  } catch (error) {
    throw new Error("Error al crear el repositorio: " + error);
  }
}
