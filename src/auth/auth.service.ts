import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Member } from 'src/member/entities/member.entity';
import { MemberService } from 'src/member/member.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto): Promise<any> {
    const user = await this.validateUser(authLoginDto);

    const payload = {
      userId: user.id,
    };

    const token = {
      user: {
        nama: user.nama,
        email: user.email,
        roles: user.roles,
      },
      access_token: this.jwtService.sign(payload),
    };

    await this.memberService.update(user.id, {
      jwt_token: token.access_token,
    });

    return token;
  }

  async logout(email: string): Promise<any> {
    const user = await this.memberService.findByEmail(email);

    await this.memberService.update(user.id, {
      jwt_token: null,
    });

    return {
      status: true,
      message: 'Success Logout',
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<Member> {
    const { email, password } = authLoginDto;

    const user = await this.memberService.findByEmail(email);
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
