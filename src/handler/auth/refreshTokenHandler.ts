import { Injectable } from '@nestjs/common';
import { RefreshTokenDto } from '../../controllers/auth/dto/RefreshToken.dto';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class RefreshTokenHandler {
  constructor(private authService: AuthService) {}

  async getRefreshToken(data: RefreshTokenDto) {
    return await this.authService.getRefreshToken(data.refreshToken);
  }
}
