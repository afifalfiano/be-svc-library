import { IsNotEmpty } from 'class-validator';

export class CreateAuthorBookDto {
  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  asal: string;

  @IsNotEmpty()
  tgl_lahir: Date;
}
