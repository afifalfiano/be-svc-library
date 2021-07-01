import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

export enum Gender {
  Male,
  Female,
  Other,
}

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

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

  @Column()
  password: string;

  @CreateDateColumn()
  tgl_input: Date;

  @Column({ nullable: true })
  user_input: string;

  @UpdateDateColumn()
  tgl_update: Date;

  @Column({ nullable: true })
  user_update: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
