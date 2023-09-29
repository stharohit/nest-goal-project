import { Injectable } from '@nestjs/common';
import { ShortUrlRepository } from '../../repositories/shortUrl/ShortUrlRepository';
import { JwtUserPayload } from '../../services/auth/type';

@Injectable()
export class CreateShortUrlHandler {
  constructor(private shortUrlRepository: ShortUrlRepository) {}

  async execute(url: string, user: JwtUserPayload) {
    return await this.shortUrlRepository.saveShortUrl(url, user);
  }
}
