/* eslint-disable class-methods-use-this */
import {
  Query,
  Resolver,
  ResolveReference,
  Args,
  ResolveField,
} from '@nestjs/graphql';

const games = [
  {
    name: 'Game #1',
    id: 1,
  },
  {
    name: 'Game #2',
    id: 2,
  },
];

@Resolver('Game')
export class GameResolvers {
  @Query('game')
  getGame(@Args('id') id: string) {
    return games.find((game) => game.id === Number(id));
  }

  @ResolveField('games')
  getGames() {
    return games;
  }

  @ResolveReference()
  resolveReference({ id }: { __typename: string; id: string }) {
    return games.find((game) => game.id === Number(id));
  }
}
