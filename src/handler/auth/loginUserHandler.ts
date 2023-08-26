import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user/UserRepository';
import { LoginDto } from '../../controllers/auth/dto/Login.dto';

@Injectable()
export class LoginUserHandler {
  constructor(private userRepository: UserRepository) {}

  async execute(loginDTO: LoginDto) {
    return await this.userRepository.getUser(loginDTO.email);
  }
}
