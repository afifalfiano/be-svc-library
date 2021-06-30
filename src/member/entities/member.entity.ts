import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  Male,
  Female,
  Other,
}

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column({ type: 'enum', enum: ['Male', 'Female', 'Other'] })
  jenis_kelamin: Gender;

  @Column({ type: 'date' })
  tgl_lahir: Date;

  @Column()
  alamat: string;

  @Column()
  kontak: number;

  @Column({ type: 'timestamp', nullable: true })
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @Column({ type: 'timestamp', nullable: true })
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;
}
