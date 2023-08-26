import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserHandler } from '../../../handler/auth/createUserHandler';
import { SignUpDto } from '../dto/SignUp.dto';
import { LoginDto } from '../dto/Login.dto';
import { LoginUserHandler } from '../../../handler/auth/loginUserHandler';

@Controller('auth')
export class AuthController {
  constructor(
    private createUserHandler: CreateUserHandler,
    private loginUserHandler: LoginUserHandler,
  ) {}

  @Post('signup')
  async signUp(@Body() request: SignUpDto) {
    return await this.createUserHandler.execute(request);
  }

  @Post('login')
  async login(@Body() request: LoginDto) {
    return await this.loginUserHandler.execute(request);
  }
}
