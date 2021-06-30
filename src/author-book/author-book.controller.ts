import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorBookService } from './author-book.service';
import { CreateAuthorBookDto } from './dto/create-author-book.dto';
import { UpdateAuthorBookDto } from './dto/update-author-book.dto';

@ApiTags('Author Book')
@Controller('author-book')
export class AuthorBookController {
  constructor(private readonly authorBookService: AuthorBookService) {}

  @Post()
  create(@Body() createAuthorBookDto: CreateAuthorBookDto) {
    return this.authorBookService.create(createAuthorBookDto);
  }

  @Get()
  findAll() {
    return this.authorBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorBookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorBookDto: UpdateAuthorBookDto) {
    return this.authorBookService.update(+id, updateAuthorBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorBookService.remove(+id);
  }
}
