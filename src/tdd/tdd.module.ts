import { Module } from '@nestjs/common';
import { TddService } from './tdd.service';
import { TddController } from './tdd.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tdd } from './entities/tdd.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tdd])],
  controllers: [TddController],
  providers: [TddService],
})
export class TddModule {}
