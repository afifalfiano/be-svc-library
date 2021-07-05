import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { Helper } from 'src/shared/helper';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('Book Module')
@Controller('api/book')
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

  @Post('cover/:id')
  @UseInterceptors(
    FileInterceptor('picture', {
      storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
      }),
    }),
  )
  async uploadCover(
    @Param('id') id: string,
    @UploadedFile() files,
  ): Promise<any> {
    console.log(files);
    const updateCover = await this.bookService.update(+id, {
      cover: files.filename,
    });

    console.log(updateCover, 'update');

    return {
      status: true,
      message: 'Success upload cover book',
    };
  }

  @Get('cover/:covername')
  seeCoverBook(@Param('covername') cover: string, @Res() res) {
    return res.sendFile(cover, { root: './images/cover-book/' });
  }
}
