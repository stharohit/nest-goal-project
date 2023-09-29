import { Injectable } from '@nestjs/common';
import { LoginDto } from '../../controllers/auth/dto/Login.dto';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class LoginUserHandler {
  constructor(private authService: AuthService) {}

  async execute(loginDTO: LoginDto) {
    try {
      return await this.authService.login(loginDTO);
    } catch (e) {
      throw e;
    }
  }
}
