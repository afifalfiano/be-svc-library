import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { AuthorBook } from 'src/author-book/entities/author-book.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsNotEmpty()
  judul?: string;

  @IsNotEmpty()
  pengarang?: AuthorBook[];

  @IsNotEmpty()
  penerbit?: Publisher;

  @IsNotEmpty()
  tahun_terbit?: number;

  cover?: string;
}
