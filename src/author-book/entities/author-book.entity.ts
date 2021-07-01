import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @UpdateDateColumn()
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;
}
