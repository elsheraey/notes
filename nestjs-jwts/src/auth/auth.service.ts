import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        { secret: 'at-secret', expiresIn: '15m' },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        { secret: 'rt-secret', expiresIn: '7d' },
      ),
    ]);
    return { access_token: at, refresh_token: rt };
  }

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);

    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    const tokens = await this.getTokens(newUser.id, newUser.email);

    return tokens;
  }

  signinLocal() {
    return;
  }

  logout() {
    return;
  }

  refreshToken() {
    return;
  }
}
