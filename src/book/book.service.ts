import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorBook } from 'src/author-book/entities/author-book.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = await this.bookRepository.create(createBookDto);

    return await this.bookRepository.save(newBook);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({
      relations: ['pengarang', 'penerbit'],
    });
  }

  async findOne(id: number): Promise<Book> {
    const idBook = await this.bookRepository.findOneOrFail(id, {
      relations: ['pengarang', 'penerbit'],
    });
    if (!idBook.id) {
      throw new NotFoundException();
    }
    return idBook;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: number): Promise<any> {
    return await this.bookRepository.delete(id);
  }
}
