import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserHandler } from '../../handler/user/createUserHandler';
import { CreateUserDto } from './CreateUser.dto';

@Controller('/api/signup')
export class UserController {
  constructor(private createUserHandler: CreateUserHandler) {}

  @Post()
  async createUser(@Body() request: CreateUserDto) {
    return await this.createUserHandler.execute(request);
  }
}
