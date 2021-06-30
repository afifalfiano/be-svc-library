import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorBookDto } from './create-author-book.dto';

export class UpdateAuthorBookDto extends PartialType(CreateAuthorBookDto) {}
