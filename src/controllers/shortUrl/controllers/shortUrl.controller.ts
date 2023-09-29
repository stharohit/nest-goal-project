import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateShortUrlHandler } from '../../../handler/shortUrl/createShortUrlHandler';
import { GetMainUrlHandler } from '../../../handler/shortUrl/getMainUrlHandler';
import { SaveShortUrlDto } from '../dto/SaveShortUrl.dto';
import { AuthGuard } from '../../../auth/auth.guard';

@Controller()
export class ShortUrlController {
  constructor(
    private createShortUrlHandler: CreateShortUrlHandler,
    private getMainUrlHandler: GetMainUrlHandler,
  ) {}

  @UseGuards(AuthGuard)
  @Post('url/shortener')
  async createShortUrl(@Req() req: Request, @Body() body: SaveShortUrlDto) {
    const { mainUrl } = body;

    return await this.createShortUrlHandler.execute(mainUrl, req['user']);
  }

  @UseGuards(AuthGuard)
  @Get('user/urls')
  async getAllUserUrls(@Req() req: Request) {
    return await this.getMainUrlHandler.execute(req['user'].userId);
  }
}
