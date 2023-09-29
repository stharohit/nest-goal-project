import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { CreateUserHandler } from '../../../handler/auth/createUserHandler';
import { SignUpDto } from '../dto/SignUp.dto';
import { LoginDto } from '../dto/Login.dto';
import { LoginUserHandler } from '../../../handler/auth/loginUserHandler';
import { Request } from 'express';
import { RefreshTokenHandler } from '../../../handler/auth/refreshTokenHandler';

@Controller('auth')
export class AuthController {
  constructor(
    private createUserHandler: CreateUserHandler,
    private loginUserHandler: LoginUserHandler,
    private refreshTokenHandler: RefreshTokenHandler,
  ) {}

  @Post('signup')
  async signUp(@Body() request: SignUpDto) {
    return await this.createUserHandler.execute(request);
  }

  @Post('login')
  async login(@Body() request: LoginDto) {
    return await this.loginUserHandler.execute(request);
  }

  @Get('refresh-token')
  async refreshToken(@Req() req: Request) {
    return await this.refreshTokenHandler.getRefreshToken({
      refreshToken: req ? req.headers.authorization : 'undefined',
    });
  }
}
