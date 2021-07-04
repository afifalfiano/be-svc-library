import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('Book Module')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<any> {
    const book = await this.bookService.create(createBookDto);
    return {
      status: true,
      message: 'Success',
      data: book,
    };
  }

  @Get()
  async findAll(): Promise<any> {
    const allBook = await this.bookService.findAll();
    return {
      status: true,
      data: allBook,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    const idBook = await this.bookService.findOne(+id);
    return {
      status: true,
      data: idBook,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    const idBook = await this.bookService.remove(+id);
    return {
      status: true,
      message: 'Success delete data',
    };
  }
}
