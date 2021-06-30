import { Injectable } from '@nestjs/common';
import { CreateAuthorBookDto } from './dto/create-author-book.dto';
import { UpdateAuthorBookDto } from './dto/update-author-book.dto';

@Injectable()
export class AuthorBookService {
  create(createAuthorBookDto: CreateAuthorBookDto) {
    return 'This action adds a new authorBook';
  }

  findAll() {
    return `This action returns all authorBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorBook`;
  }

  update(id: number, updateAuthorBookDto: UpdateAuthorBookDto) {
    return `This action updates a #${id} authorBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorBook`;
  }
}
