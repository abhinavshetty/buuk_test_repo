import { Test, TestingModule } from '@nestjs/testing';
import { ResultsControllerController } from './results-controller.controller';
import { ResultsControllerService } from './results-controller.service';

describe('ResultsControllerController', () => {
  let controller: ResultsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultsControllerController],
      providers: [ResultsControllerService],
    }).compile();

    controller = module.get<ResultsControllerController>(ResultsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
