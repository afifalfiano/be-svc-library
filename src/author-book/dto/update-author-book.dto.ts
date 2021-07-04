import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateAuthorBookDto } from './create-author-book.dto';

export class UpdateAuthorBookDto extends PartialType(CreateAuthorBookDto) {
    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    asal: string;

    @IsNotEmpty()
    tgl_lahir: Date;
}
