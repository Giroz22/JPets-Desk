import { Column, OneToMany, PrimaryColumn, Entity } from "typeorm";
import { PetEntity } from "./pet.entity";

@Entity()
export class StoreEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  name: string = "";

  @OneToMany(() => PetEntity, (pet) => pet.store, {
    cascade: true,
    eager: false,
    orphanedRowAction: "soft-delete",
  })
  pets!: PetEntity[];
}
