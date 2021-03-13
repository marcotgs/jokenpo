import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateGameDTO, GameService, Game } from '@core/db/game';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly gameService: GameService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/game')
  async create(@Body() createGameDto: CreateGameDTO) {
    await this.gameService.create(createGameDto);
  }

  @Get('/games')
  async games(): Promise<Game[]> {
    return this.gameService.findAll();
  }
}
