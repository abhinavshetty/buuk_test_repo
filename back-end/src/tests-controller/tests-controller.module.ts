import { Module } from '@nestjs/common';
import { TestsControllerService } from './tests-controller.service';
import { TestsControllerController } from './tests-controller.controller';

@Module({
  controllers: [TestsControllerController],
  providers: [TestsControllerService]
})
export class TestsControllerModule {}
