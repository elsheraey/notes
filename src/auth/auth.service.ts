import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDTO } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  signup(dto: AuthDTO) {
    return { msg: "I am signed up" };
  }

  signin() {
    return { msg: "I am signed in" };
  }
}