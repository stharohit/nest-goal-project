import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use() {
    throw new HttpException('Not Authorized', HttpStatus.FORBIDDEN);
  }
}
