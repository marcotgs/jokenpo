import { GameStatus } from '@core/constants';

export interface CreateGameDTO {
  readonly title: string;
  readonly private: boolean;
  readonly rounds: number;
  readonly winnerId: number;
  readonly status: GameStatus;
  readonly created_date: Date;
}
