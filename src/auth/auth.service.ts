import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDTO } from "./dto/auth.dto";
import * as argon from "argon2"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  async signup(dto: AuthDTO) {
    try {
      // generate password hash
      const hash = await argon.hash(dto.password);
      // save the new user in db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash
        },
        // select: {
        //   id: true,
        //   email: true,
        //   createdAt: true,
        // },
      });

      delete user.hash;

      // return saved user
      return user;
    }
    catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken");
        }
      }
      throw error;
    }
  }

  signin() {
    return { msg: "I am signed in" };
  }
}