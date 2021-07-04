import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorBookService } from './author-book.service';
import { CreateAuthorBookDto } from './dto/create-author-book.dto';
import { UpdateAuthorBookDto } from './dto/update-author-book.dto';
import { AuthorBook } from './entities/author-book.entity';

@ApiTags('Author Book')
@Controller('author-book')
export class AuthorBookController {
  constructor(private readonly authorBookService: AuthorBookService) {}

  @Post()
  async create(@Body() createAuthorBookDto: CreateAuthorBookDto): Promise<any> {
    const newAuthor = await this.authorBookService.create(createAuthorBookDto);

    return {
      status: true,
      message: 'Success',
      data: newAuthor,
    };
  }

  @Get()
  async findAll(): Promise<any> {
    const data = await this.authorBookService.findAll();
    return {
      status: true,
      data: data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    const authorId = await this.authorBookService.findOne(+id);
    return {
      status: true,
      data: authorId,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAuthorBookDto: UpdateAuthorBookDto,
  ): Promise<any> {
    const updateAuthor = await this.authorBookService.update(
      +id,
      updateAuthorBookDto,
    );
    return {
      status: true,
      message: 'Success',
      data: updateAuthor,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    const data = this.authorBookService.remove(+id);
    return {
      status: true,
      message: 'Success delete data',
    };
  }
}
