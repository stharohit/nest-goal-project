import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ShortUrl, ShortUrlDocument } from './shortUrl.schema';
import mongoose from 'mongoose';
import { ShortUrlModel } from '../../models/ShortUrl.model';
import { JwtUserPayload } from '../../services/auth/type';

@Injectable()
export class ShortUrlRepository {
  constructor(
    @InjectModel(ShortUrl.name)
    private shortUrlModel: mongoose.Model<ShortUrlDocument>,
  ) {}

  async saveShortUrl(url: string, user: JwtUserPayload) {
    const shortUrlModel = new ShortUrlModel({
      mainUrl: url,
      creatorId: user.userId,
    });

    const { shortUrl, mainUrl } = await this.shortUrlModel.create(
      shortUrlModel,
    );

    return { shortUrl, mainUrl };
  }

  // async redirectToMainUrl(urlId: string) {
  //   return this.shortUrlModel.findOne({ _id: urlId }).exec();
  // }

  async getAllUrls(userId: string) {
    return this.shortUrlModel.find({ creatorId: userId }).exec();
  }
}
