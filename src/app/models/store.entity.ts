import { Column, OneToMany, PrimaryColumn, Entity } from 'typeorm';
import { PetEntity } from './pet.entity';

@Entity()
export class StoreEntity {
  @PrimaryColumn()
  id: number = 0;

  @Column()
  name: string = '';

  //@OneToMany(() => PetEntity, (pet) => pet.store)
  @OneToMany(() => PetEntity, (pet) => pet.store)
  pets!: PetEntity[];
}
