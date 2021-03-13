import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Game } from './game.schema';
import { CreateGameDTO } from './dto';

@Injectable()
export class GameService {
  constructor(@InjectModel('Game') private readonly GameModel: Model<Game>) {}

  async create(createGameDTO: CreateGameDTO): Promise<Game> {
    const createdCat = new this.GameModel(createGameDTO);
    return createdCat.save();
  }

  async findAll(): Promise<Game[]> {
    return this.GameModel.find().exec();
  }
}
