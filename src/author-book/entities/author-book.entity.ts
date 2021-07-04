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
export class AuthorBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  asal: string;

  @Column({ type: 'date' })
  tgl_lahir: Date;

  @ManyToOne(() => Book, (book) => book.pengarang, { onDelete: 'SET NULL' })
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
