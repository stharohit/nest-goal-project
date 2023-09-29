import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

export type ShortUrlDocument = mongoose.HydratedDocument<ShortUrl>;

@Schema({
  _id: false,
})
export class ShortUrl {
  @Prop()
  _id: string;

  @Prop()
  creatorId: Types.ObjectId;

  @Prop()
  mainUrl: string;

  @Prop()
  shortUrl: string;
}

export const ShortUrlSchema = SchemaFactory.createForClass(ShortUrl);
