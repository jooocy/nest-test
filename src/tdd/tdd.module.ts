import { Module } from '@nestjs/common';
import { TddService } from './tdd.service';
import { TddController } from './tdd.controller';

@Module({
  controllers: [TddController],
  providers: [TddService]
})
export class TddModule {}
