import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  DeleteDateColumn,
} from "typeorm";
import { StoreEntity } from "./store.entity";

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  name: string = "";

  @Column({ type: "varchar", length: 100 })
  ownerName: string = "";

  @ManyToOne(() => StoreEntity, (store) => store.pets)
  @JoinColumn()
  store!: StoreEntity;

  @DeleteDateColumn()
  deletedDate!: Date;
}
