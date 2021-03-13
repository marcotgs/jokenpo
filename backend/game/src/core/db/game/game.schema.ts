import { Document, model } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GameStatus } from '@core/constants';

@Schema()
export class Game extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  private: boolean;

  @Prop({ required: true })
  rounds: number;

  @Prop({ required: true })
  winnerId: number;

  @Prop({
    required: true,
    type: String,
    enum: [GameStatus.created, GameStatus.complete, GameStatus.inProgress],
  })
  status: GameStatus;

  @Prop()
  finish_date: Date;

  @Prop({ required: true })
  created_date: Date;
}

export const GameSchema = SchemaFactory.createForClass(Game);

export default model<Game>('Game', GameSchema);
