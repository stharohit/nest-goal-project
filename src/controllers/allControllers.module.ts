import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ShortUrlModule } from './shortUrl/shortUrl.module';

@Module({
  imports: [AuthModule, ShortUrlModule],
})
export class AllControllersModule {}
