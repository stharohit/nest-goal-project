import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user/UserRepository';
import { UserModel } from '../../models/User.model';
import { SignUpDto } from '../../controllers/auth/dto/SignUp.dto';
import { encryptPassword } from '../../helper/bcrypt';

@Injectable()
export class CreateUserHandler {
  constructor(private userRepository: UserRepository) {}

  async execute(request: SignUpDto) {
    try {
      request.password = await encryptPassword(request.password);
      const user = new UserModel(request);

      await this.userRepository.save(user);

      return {
        email: user.email,
        message: `${user.email} has been registered successfully. You can login now.`,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
