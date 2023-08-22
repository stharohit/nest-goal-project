import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../repositories/user/user.schema';
import { UserRepository } from '../../repositories/user/UserRepository';
import { UserModel } from '../../models/User.model';
import { CreateUserDto } from '../../controllers/user/CreateUser.dto';
import { MongoError } from 'mongodb';

@Injectable()
export class CreateUserHandler {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserDto): Promise<User> {
    const user = new UserModel(request);

    try {
      return await this.userRepository.save(user);
    } catch (error) {
      if (error instanceof MongoError && error.code === 11000) {
        console.log('here');
        throw new HttpException(
          'Email already in use. If you have an existing account, please log in. If not, please use a different email.',
          HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
