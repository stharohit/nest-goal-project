import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from '../config';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.url, {
      dbName: mongoConfig.dbName,
    }),
  ],
})
export class MongodbModule {}
