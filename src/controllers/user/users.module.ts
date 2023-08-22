import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from '../../repositories/user/UserRepository';
import { CreateUserHandler } from '../../handler/user/createUserHandler';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserScheme } from '../../repositories/user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserScheme }]),
  ],
  controllers: [UserController],
  providers: [UserRepository, CreateUserHandler],
  exports: [CreateUserHandler],
})
export class UsersModule {}
