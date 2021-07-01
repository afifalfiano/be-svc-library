import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Gender } from '../entities/member.entity';

export class CreateMemberDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  jenis_kelamin: Gender;

  @IsNotEmpty()
  tgl_lahir: Date;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  kontak: number;

  @IsNotEmpty()
  password: string;
}
