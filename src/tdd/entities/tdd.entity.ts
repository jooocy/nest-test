import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Tdd {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
