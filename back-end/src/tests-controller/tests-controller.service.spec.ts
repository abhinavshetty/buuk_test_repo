import { Test, TestingModule } from '@nestjs/testing';
import { TestsControllerService } from './tests-controller.service';

describe('TestsControllerService', () => {
  let service: TestsControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestsControllerService],
    }).compile();

    service = module.get<TestsControllerService>(TestsControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
