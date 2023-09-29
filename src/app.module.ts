import { Module } from '@nestjs/common';
import { MongodbModule } from './database';
import { AllControllersModule } from './controllers/allControllers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { configuration } from './config';

@Module({
  imports: [
    MongodbModule,
    AllControllersModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService],
})
export class AppModule {}
