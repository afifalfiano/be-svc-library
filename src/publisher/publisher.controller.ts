import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { ApiTags } from '@nestjs/swagger';
import { Publisher } from './entities/publisher.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/entities/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Publisher')
@Controller('api/publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPublisherDto: CreatePublisherDto): Promise<any> {
    const newPublisher = await this.publisherService.create(createPublisherDto);

    return {
      status: true,
      message: 'Succes',
      data: newPublisher,
    };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get()
  async findAll(): Promise<any> {
    const data = await this.publisherService.findAll();
    return {
      status: true,
      data: data,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    const publisherById = await this.publisherService.findOne(+id);
    return {
      status: true,
      data: publisherById,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ): Promise<any> {
    const updatePublisher = await this.publisherService.update(
      +id,
      updatePublisherDto,
    );
    return {
      status: true,
      message: 'Success',
      data: updatePublisher,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    const data = this.publisherService.remove(+id);
    return {
      status: true,
      message: 'Success delete data',
    };
  }
}
