import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isError } from 'util';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
  ) {}
  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const member = this.memberRepository.create({ ...createMemberDto });
    return await this.memberRepository.save(member);
  }

  findAll() {
    return this.memberRepository.find();
  }

  async findOne(id: number): Promise<any> {
    const user = await this.memberRepository.findOne(id);

    delete user.password;
    return user;
  }

  async findByEmail(email: string): Promise<any> {
    const user = await this.memberRepository.findOne({
      where: { email: email },
    });
    return user;
  }

  async update(id: number, updateMemberDto: UpdateMemberDto): Promise<Member> {
    const user = await this.memberRepository.findOneOrFail(id);
    if (!user.id) {
      throw new HttpException('Member not found', 404);
    }
    await this.memberRepository.update(id, updateMemberDto);
    return await this.memberRepository.findOne(id);
  }

  remove(id: number) {
    const user = this.memberRepository.delete(id);
    return user;
  }
}
