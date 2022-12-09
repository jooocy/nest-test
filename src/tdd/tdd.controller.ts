import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TddService } from './tdd.service';
import { CreateTddDto } from './dto/create-tdd.dto';
import { UpdateTddDto } from './dto/update-tdd.dto';

@Controller('tdd')
export class TddController {
  constructor(private readonly tddService: TddService) {}

  @Post()
  create(@Body() createTddDto: CreateTddDto) {
    return this.tddService.create(createTddDto);
  }

  @Get()
  findAll() {
    return this.tddService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tddService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTddDto: UpdateTddDto) {
    return this.tddService.update(+id, updateTddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tddService.remove(+id);
  }
}
