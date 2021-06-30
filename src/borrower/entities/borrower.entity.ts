import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Borrower {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_buku: number;

  @Column()
  id_anggota: number;

  @Column({ type: 'date' })
  tgl_pinjam: Date;

  @Column({ type: 'date' })
  tgl_kembali: Date;

  @Column({ type: 'timestamp', nullable: true })
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @Column({ type: 'timestamp', nullable: true })
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;
}
