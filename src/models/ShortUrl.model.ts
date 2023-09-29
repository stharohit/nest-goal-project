import { uuid } from 'uuidv4';

export class ShortUrlModel {
  readonly _id: string;

  readonly creatorId: string;

  readonly shortUrl: string;

  readonly mainUrl: string;

  constructor(init: Pick<ShortUrlModel, 'mainUrl' | 'creatorId'>) {
    this._id = uuid();
    this.shortUrl = this.createShortUrlPath(this._id);
    this.mainUrl = init.mainUrl;
    this.creatorId = init.creatorId;
  }

  private createShortUrlPath(id: string) {
    return `/su/${id}`;
  }
}
