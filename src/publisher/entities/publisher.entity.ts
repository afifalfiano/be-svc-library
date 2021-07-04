import { Book } from 'src/book/entities/book.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @ManyToOne(() => Book, (book) => book.penerbit, { onDelete: 'SET NULL' })
  book: Book;

  @CreateDateColumn()
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @UpdateDateColumn()
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;
}
