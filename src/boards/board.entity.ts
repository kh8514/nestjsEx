import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStaus } from './board.model';

export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStaus;
}
