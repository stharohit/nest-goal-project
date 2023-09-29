import { Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePassword } from '../../helper/bcrypt';
import { UserRepository } from '../../repositories/user/UserRepository';
import { LoginDto } from '../../controllers/auth/dto/Login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtUserPayload } from './type';
import { UserDocument } from '../../repositories/user/user.schema';
import { configuration } from '../../config';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDto) {
    try {
      const user = await this.verifyCredential(loginDTO);

      return await this.generateToken(this.generateJwtPayload(user));
    } catch (e) {
      throw e;
    }
  }

  async generateToken(payload: JwtUserPayload) {
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: configuration().jwtSecretKey,
        expiresIn: '15m',
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        secret: configuration().refreshSecret,
        expiresIn: '1d',
      }),
    };
  }

  async getRefreshToken(refreshToken: string) {
    try {
      const token = this.extractToken(refreshToken);
      await this.jwtService.verifyAsync(token, {
        secret: configuration().refreshSecret,
      });
      const { email } = this.jwtService.decode(token) as JwtUserPayload;
      const user = await this.userRepository.getUser(email);

      return await this.generateToken(this.generateJwtPayload(user));
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async verifyCredential(loginDTO: LoginDto) {
    const credential = await this.userRepository.getUser(loginDTO.email);
    const isPasswordMatch = await comparePassword(
      loginDTO.password,
      credential.password,
    );

    if (!credential || !isPasswordMatch) {
      throw new UnauthorizedException(
        'Either email or password is not correct.',
      );
    }

    return credential;
  }

  private generateJwtPayload(user: UserDocument): JwtUserPayload {
    return {
      email: user.email,
      userId: user.id,
    };
  }

  private extractToken(refreshToken: string): string | undefined {
    const [type, token] = refreshToken.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
