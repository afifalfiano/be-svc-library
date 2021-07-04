import { Timestamp } from 'rxjs';
import { AuthorBook } from 'src/author-book/entities/author-book.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judul: string;

  @OneToMany(() => AuthorBook, (author) => author.book)
  pengarang: AuthorBook[];

  @OneToMany(() => Publisher, (publish) => publish.book)
  penerbit: Publisher;

  @Column()
  tahun_terbit: number;

  @CreateDateColumn()
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @UpdateDateColumn()
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;
}
