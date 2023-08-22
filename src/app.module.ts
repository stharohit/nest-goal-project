import { Module } from '@nestjs/common';
import { MongodbModule } from './database';
import { AllControllersModule } from './controllers/allControllers.module';

@Module({
  imports: [MongodbModule, AllControllersModule],
})
export class AppModule {}
