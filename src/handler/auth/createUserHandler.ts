import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../repositories/user/user.schema';
import { UserRepository } from '../../repositories/user/UserRepository';
import { UserModel } from '../../models/User.model';
import { SignUpDto } from '../../controllers/auth/dto/SignUp.dto';

@Injectable()
export class CreateUserHandler {
  constructor(private userRepository: UserRepository) {}

  async execute(request: SignUpDto): Promise<User> {
    const user = new UserModel(request);

    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
