import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Publisher)
    private publisherRepository: Repository<Publisher>,
  ) {}
  async create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    const publisher = await this.publisherRepository.create(createPublisherDto);

    return await this.publisherRepository.save(publisher);
  }

  findAll() {
    return this.publisherRepository.find();
  }

  async findOne(id: number): Promise<Publisher> {
    const publisher = await this.publisherRepository.findOneOrFail(id);
    if (!publisher.id) {
      throw new NotFoundException();
    }

    return publisher;
  }

  async update(
    id: number,
    updatePublisherDto: UpdatePublisherDto,
  ): Promise<Publisher> {
    const idPublisher = await this.findOne(id);
    await this.publisherRepository.update(id, updatePublisherDto);
    return this.findOne(idPublisher.id);
  }

  async remove(id: number): Promise<any> {
    return await this.publisherRepository.delete(id);
  }
}
