import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  DeleteDateColumn,
} from "typeorm";
import { StoreEntity } from "./store.entity";
import { AutoMap } from "@automapper/classes";

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  @AutoMap()
  name: string = "";

  @Column({ type: "varchar", length: 100 })
  @AutoMap()
  ownerName: string = "";

  @ManyToOne(() => StoreEntity, (store) => store.pets)
  @JoinColumn()
  store!: StoreEntity;

  @DeleteDateColumn()
  deletedDate!: Date | null;
}
