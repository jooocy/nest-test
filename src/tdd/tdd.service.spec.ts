import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Tdd } from './entities/tdd.entity';
import { TddService } from './tdd.service';

describe('TddService', () => {
  let service: TddService;

  const mockTddRepository = {
    create: jest.fn().mockImplementation((dto) => dto), //dto를 보고 만들기에
    save: jest
      .fn()
      .mockImplementation((tdd) => Promise.resolve({ id: Date.now(), ...tdd })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TddService,
        {
          provide: getRepositoryToken(Tdd),
          useValue: mockTddRepository,
        }, // controller에서 했던 init이랑 비슷하다. getRepositoryToken을 통해 TddRepository를 mockTddRepository로 override 시켜준다.
      ],
    }).compile();

    service = module.get<TddService>(TddService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user record and return that', async () => {
    const dto = { name: 'test' };
    expect(await service.create({ name: dto.name })).toEqual({
      id: expect.any(Number),
      name: dto.name,
    });
  });
});
