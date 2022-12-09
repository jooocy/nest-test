import { Test, TestingModule } from '@nestjs/testing';
import { TddService } from './tdd.service';

describe('TddService', () => {
  let service: TddService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TddService],
    }).compile();

    service = module.get<TddService>(TddService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
