import { Module } from '@nestjs/common';

import { GameModule } from './game/game.module';

@Module({
  imports: [GameModule],
  exports: [GameModule],
})
export class DBModule {}
