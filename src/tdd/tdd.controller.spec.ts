import { Test, TestingModule } from '@nestjs/testing';
import { TddController } from './tdd.controller';
import { TddService } from './tdd.service';

describe('TddController', () => {
  let controller: TddController;

  const mockTddService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn((id, dto) => {
      return { id, ...dto };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TddController],
      providers: [TddService],
    })
      .overrideProvider(TddService)
      .useValue(mockTddService)
      .compile();
    // 1. controller에 의존성이 있는 것을 분리(isolate)시켜준다.
    // (nest에서는 controller의 constructor 부분만 보면된다.)
    // TddService를 mockService로 override 시켜준다. (useValue를 쓴이유는 그냥 간단해서. useFactory, useClass도 있다.)

    controller = module.get<TddController>(TddController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const dto = { name: 'jojoo' };
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      name: dto.name,
    });
  });

  it('should update a tdd', () => {
    const dto = { name: 'jojoo' };
    expect(controller.update('1', dto)).toEqual({
      id: 1,
      name: dto.name,
    });
  });

  // expect(mockTddService.create).toHaveBeenCalledWith({ name: 'jojoo' });
});
