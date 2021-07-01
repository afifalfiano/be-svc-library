import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return `This action returns all member`;
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

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
