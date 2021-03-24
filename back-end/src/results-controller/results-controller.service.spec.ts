import { Test, TestingModule } from '@nestjs/testing';
import { ResultsControllerService } from './results-controller.service';

describe('ResultsControllerService', () => {
  let service: ResultsControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultsControllerService],
    }).compile();

    service = module.get<ResultsControllerService>(ResultsControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
