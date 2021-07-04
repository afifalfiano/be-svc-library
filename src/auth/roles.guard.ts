import { ExecutionContext } from '@nestjs/common';
import { CanActivate, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Member } from 'src/member/entities/member.entity';
import { MemberService } from 'src/member/member.service';
import { Role } from './entities/role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private memberService: MemberService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log(requiredRoles, 'role');
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const member = await this.memberService.findByEmail(request.body.email);
    return requiredRoles.some((role) => member.roles?.includes(role));
  }
}
