import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientController } from './controllers/client.controller';
import { ClientService } from './services/client.service';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ClientSchema } from './schemas/client.schema';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { ClientProfile } from './profiles/client.profile';
import { HttpModule } from '@nestjs/axios';
import { SwapiService } from './services/swapi.service';
import { SwapiController } from './controllers/swapi.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
    }),
    DynamooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        aws: {
          accessKeyId: config.get<string>('AWS_ACCESS_KEY'),
          secretAccessKey: config.get<string>('AWS_SECRET_ACCESS'),
          region: config.get<string>('AWS_REGION'),
        },
      }),
    }),
    DynamooseModule.forFeature([
      {
        name: 'Client',
        schema: ClientSchema,
      },
    ]),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    HttpModule,
  ],
  controllers: [ClientController, SwapiController],
  providers: [ClientProfile, ClientService, SwapiService],
})
export class AppModule {}
