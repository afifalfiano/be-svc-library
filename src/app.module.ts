import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MemberModule } from './member/member.module';
import { OfficerModule } from './officer/officer.module';
import { AuthModule } from './auth/auth.module';
import { AuthorBookModule } from './author-book/author-book.module';
import { PublisherModule } from './publisher/publisher.module';
import { BorrowerModule } from './borrower/borrower.module';
import config from 'ormconfig';
import { Auth } from './auth/entities/auth.entity';
import { AuthorBook } from './author-book/entities/author-book.entity';
import { Book } from './book/entities/book.entity';
import { Borrower } from './borrower/entities/borrower.entity';
import { Member } from './member/entities/member.entity';
import { Officer } from './officer/entities/officer.entity';
import { Publisher } from './publisher/entities/publisher.entity';

@Module({
  imports: [TypeOrmModule.forRoot(config), MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
