import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ShortUrlModule } from './shortUrl/shortUrl.module';
import { HomeController } from './home.controller';

@Module({
  controllers: [HomeController],
  imports: [AuthModule, ShortUrlModule],
})
export class AllControllersModule {}
