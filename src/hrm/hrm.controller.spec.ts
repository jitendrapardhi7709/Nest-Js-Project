import { Test, TestingModule } from '@nestjs/testing';
import { HrmController } from './hrm.controller';

describe('HrmController', () => {
  let controller: HrmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HrmController],
    }).compile();

    controller = module.get<HrmController>(HrmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
