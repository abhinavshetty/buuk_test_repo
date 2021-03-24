import { Test, TestingModule } from '@nestjs/testing';
import { TestsControllerController } from './tests-controller.controller';
import { TestsControllerService } from './tests-controller.service';

describe('TestsControllerController', () => {
  let controller: TestsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestsControllerController],
      providers: [TestsControllerService],
    }).compile();

    controller = module.get<TestsControllerController>(TestsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
