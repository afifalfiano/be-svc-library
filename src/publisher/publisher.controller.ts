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
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { ApiTags } from '@nestjs/swagger';
import { Publisher } from './entities/publisher.entity';

@ApiTags('Publisher')
@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  async create(@Body() createPublisherDto: CreatePublisherDto): Promise<any> {
    const newPublisher = await this.publisherService.create(createPublisherDto);

    return {
      status: true,
      message: 'Succes',
      data: newPublisher,
    };
  }

  @Get()
  async findAll(): Promise<any> {
    const data = await this.publisherService.findAll();
    return {
      status: true,
      data: data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    const publisherById = await this.publisherService.findOne(+id);
    return {
      status: true,
      data: publisherById,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ): Promise<any> {
    const updatePublisher = await this.publisherService.update(+id, updatePublisherDto);
    return {
      status: true,
      message: 'Success',
      data: updatePublisher,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const data = this.publisherService.remove(+id);
    return {
      status: true,
      message: 'Success delete data',
    };
  }
}
