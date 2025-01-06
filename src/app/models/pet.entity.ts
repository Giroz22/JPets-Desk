import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { StoreEntity } from './store.entity';

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number = 0;

  @Column({ type: 'varchar', length: 100 })
  name: string = '';

  @Column({ type: 'varchar', length: 100 })
  ownerName: string = '';

  @ManyToOne(() => StoreEntity, (store) => store.pets)
  @JoinColumn()
  store: StoreEntity = new StoreEntity();
}
