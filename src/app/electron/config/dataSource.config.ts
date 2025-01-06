import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { StoreEntity } from '../../models/store.entity';
import { PetEntity } from '../../models/pet.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'src/app/electron/database/jpets.sql',
  entities: [StoreEntity, PetEntity],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
