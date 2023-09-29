import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { UserRepository } from '../../repositories/user/UserRepository';
import { CreateUserHandler } from '../../handler/auth/createUserHandler';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserScheme } from '../../repositories/user/user.schema';
import { LoginUserHandler } from '../../handler/auth/loginUserHandler';
import { AuthService } from '../../services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenHandler } from '../../handler/auth/refreshTokenHandler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserScheme }]),
  ],
  controllers: [AuthController],
  providers: [
    UserRepository,
    CreateUserHandler,
    LoginUserHandler,
    AuthService,
    JwtService,
    RefreshTokenHandler,
  ],
  exports: [CreateUserHandler, LoginUserHandler, RefreshTokenHandler],
})
export class AuthModule {}
