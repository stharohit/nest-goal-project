import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { UserRepository } from '../../repositories/user/UserRepository';
import { CreateUserHandler } from '../../handler/auth/createUserHandler';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserScheme } from '../../repositories/user/user.schema';
import { LoginUserHandler } from '../../handler/auth/loginUserHandler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserScheme }]),
  ],
  controllers: [AuthController],
  providers: [UserRepository, CreateUserHandler, LoginUserHandler],
  exports: [CreateUserHandler],
})
export class AuthModule {}
