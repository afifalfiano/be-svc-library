import { Module } from '@nestjs/common';
import { AuthorBookService } from './author-book.service';
import { AuthorBookController } from './author-book.controller';

@Module({
  controllers: [AuthorBookController],
  providers: [AuthorBookService],
})
export class AuthorBookModule {}
