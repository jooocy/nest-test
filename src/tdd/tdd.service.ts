import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTddDto } from './dto/create-tdd.dto';
import { UpdateTddDto } from './dto/update-tdd.dto';
import { Tdd } from './entities/tdd.entity';

@Injectable()
export class TddService {
  constructor(
    @InjectRepository(Tdd)
    private tddRepository: Repository<Tdd>,
  ) {}
  create(createTddDto: CreateTddDto) {
    const newTdd = this.tddRepository.create(createTddDto);
    return this.tddRepository.save(newTdd);
  }

  findAll() {
    return this.tddRepository.find();
  }

  findOne(id: number) {
    const tdd = this.tddRepository.findOneByOrFail({ id });
    return tdd;
  }

  update(id: number, updateTddDto: UpdateTddDto) {
    return `This action updates a #${id} tdd`;
  }

  remove(id: number) {
    return `This action removes a #${id} tdd`;
  }
}
