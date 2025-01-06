import "reflect-metadata";
import { DataSource, EntityTarget, Repository } from "typeorm";
import { StoreEntity } from "../../models/store.entity";
import { PetEntity } from "../../models/pet.entity";

export class DataSourceConnection {
  private appDataSource!: DataSource;

  constructor() {
    this.appDataSource = new DataSource({
      type: "sqlite",
      database: "src/app/electron/database/jpets.sql",
      entities: [StoreEntity, PetEntity],
      synchronize: true,
    });

    this.appDataSource
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  }

  getRepository(entity: any): Repository<typeof entity> {
    try {
      return this.appDataSource.getRepository(entity);
    } catch (error) {
      throw new Error(
        "No se puede generar un repositorio de la entidad: " + typeof entity
      );
    }
  }
}
