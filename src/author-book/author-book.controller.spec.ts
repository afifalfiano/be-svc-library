import { Test, TestingModule } from '@nestjs/testing';
import { AuthorBookController } from './author-book.controller';
import { AuthorBookService } from './author-book.service';

describe('AuthorBookController', () => {
  let controller: AuthorBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorBookController],
      providers: [AuthorBookService],
    }).compile();

    controller = module.get<AuthorBookController>(AuthorBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
