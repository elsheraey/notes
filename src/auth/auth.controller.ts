import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto/auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post("signup")
  signup(@Body() dto: AuthDTO) {
    console.log(dto)
    return this.authService.signin();
  }

  @Post("signin")
  signin() {
    return this.authService.signup();
  }
}