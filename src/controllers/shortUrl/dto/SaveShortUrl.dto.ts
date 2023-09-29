import { UserDocument } from '../../../repositories/user/user.schema';

export class SaveShortUrlDto {
  mainUrl: string;
  user: UserDocument;
}
