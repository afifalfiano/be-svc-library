import { IsNotEmpty, IsNumber } from 'class-validator';
import { AuthorBook } from 'src/author-book/entities/author-book.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';

export class CreateBookDto {
  @IsNotEmpty()
  judul: string;

  @IsNotEmpty()
  pengarang: AuthorBook[];

  @IsNotEmpty()
  penerbit: Publisher;

  @IsNotEmpty()
  @IsNumber()
  tahun_terbit: number;

  cover?: string;
}
