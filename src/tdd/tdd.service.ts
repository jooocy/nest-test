import { Injectable } from '@nestjs/common';
import { CreateTddDto } from './dto/create-tdd.dto';
import { UpdateTddDto } from './dto/update-tdd.dto';

@Injectable()
export class TddService {
  create(createTddDto: CreateTddDto) {
    return 'This action adds a new tdd';
  }

  findAll() {
    return `This action returns all tdd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tdd`;
  }

  update(id: number, updateTddDto: UpdateTddDto) {
    return `This action updates a #${id} tdd`;
  }

  remove(id: number) {
    return `This action removes a #${id} tdd`;
  }
}
