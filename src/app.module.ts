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

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([
      BookModule,
      MemberModule,
      OfficerModule,
      AuthModule,
      AuthorBookModule,
      PublisherModule,
      BorrowerModule,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
