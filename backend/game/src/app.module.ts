import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { DBModule } from '@core/db/db.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameResolvers } from './core/graph';

@Module({
  imports: [
    DBModule,
    GraphQLFederationModule.forRoot({
      typePaths: ['**/types/*.graphql'],
    }),
    ConfigModule.forRoot({
      expandVariables: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    // MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [AppController],
  providers: [AppService, GameResolvers],
})
export class AppModule {}
