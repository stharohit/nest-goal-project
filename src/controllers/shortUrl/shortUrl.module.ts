import { Module } from '@nestjs/common';
import { ShortUrlController } from './controllers/shortUrl.controller';
import { CreateShortUrlHandler } from '../../handler/shortUrl/createShortUrlHandler';
import { GetMainUrlHandler } from '../../handler/shortUrl/getMainUrlHandler';
import { ShortUrlRepository } from '../../repositories/shortUrl/ShortUrlRepository';
import { MongooseModule } from '@nestjs/mongoose';

import {
  ShortUrl,
  ShortUrlSchema,
} from '../../repositories/shortUrl/shortUrl.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShortUrl.name, schema: ShortUrlSchema },
    ]),
  ],
  controllers: [ShortUrlController],
  providers: [
    ShortUrlRepository,
    CreateShortUrlHandler,
    GetMainUrlHandler,
    JwtService,
  ],
  exports: [CreateShortUrlHandler, GetMainUrlHandler],
})
export class ShortUrlModule {}
