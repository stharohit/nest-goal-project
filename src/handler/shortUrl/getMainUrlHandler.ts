import { Injectable } from '@nestjs/common';
import { ShortUrlRepository } from '../../repositories/shortUrl/ShortUrlRepository';

@Injectable()
export class GetMainUrlHandler {
  constructor(private shortUrlRepository: ShortUrlRepository) {}

  async execute(userId: string) {
    return await this.shortUrlRepository.getAllUrls(userId);
  }
}
