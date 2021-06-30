import { Timestamp } from 'rxjs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judul: string;

  @Column()
  pengarang: string;

  @Column()
  penerbit: string;

  @Column()
  tahun_terbit: number;

  @Column({ type: 'timestamp', nullable: true })
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @Column({ type: 'timestamp', nullable: true })
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;
}
