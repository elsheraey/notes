import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDTO } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // @UseGuards(JwtGuard)
  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@CurrentUser('id') userId: number, @Body() dto: EditUserDTO) {
    return this.userService.editUser(userId, dto);
  }
}
