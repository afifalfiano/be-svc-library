import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorBookDto } from './dto/create-author-book.dto';
import { UpdateAuthorBookDto } from './dto/update-author-book.dto';
import { AuthorBook } from './entities/author-book.entity';

@Injectable()
export class AuthorBookService {
  constructor(
    @InjectRepository(AuthorBook)
    private authorRepositorty: Repository<AuthorBook>,
  ) {}
  async create(createAuthorBookDto: CreateAuthorBookDto): Promise<AuthorBook> {
    const user = await this.authorRepositorty.create(createAuthorBookDto);
    return await this.authorRepositorty.save(user);
  }

  async findAll(): Promise<AuthorBook[]> {
    const allAuthor = await this.authorRepositorty
      .createQueryBuilder('author-book')
      .innerJoinAndSelect('author-book.book', 'book')
      .getMany();
    return allAuthor;
  }

  async findOne(id: number): Promise<AuthorBook> {
    const author = await this.authorRepositorty.findOneOrFail(id);
    if (!author.id) {
      throw new NotFoundException();
    }
    return author;
  }

  async update(
    id: number,
    updateAuthorBookDto: UpdateAuthorBookDto,
  ): Promise<AuthorBook> {
    const idAuthor = await this.findOne(id);
    await this.authorRepositorty.update(id, updateAuthorBookDto);
    return this.findOne(idAuthor.id);
  }

  async remove(id: number): Promise<any> {
    return await this.authorRepositorty.delete(id);
  }
}
