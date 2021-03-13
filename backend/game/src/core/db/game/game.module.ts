import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GameSchema } from './game.schema';
import { GameService } from './game.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}
