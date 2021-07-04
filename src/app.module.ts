import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { AuthorBookModule } from './author-book/author-book.module';
import { PublisherModule } from './publisher/publisher.module';
import config from 'ormconfig';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/src/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      migrations: ['dist/src/db/migrations/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src/**/*.entity{.ts,.js}',
        migrationsDir: 'src/db/migrations',
      },
    }),
    MemberModule,
    PublisherModule,
    AuthModule,
    AuthorBookModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
