import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  // @UseGuards(JwtGuard)
  @Get("me")
  getMe(@CurrentUser() user: User) {
    return user;
  }
} 
