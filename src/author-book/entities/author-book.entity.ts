import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ type: 'timestamp', nullable: true })
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @Column({ type: 'timestamp', nullable: true })
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;
}
