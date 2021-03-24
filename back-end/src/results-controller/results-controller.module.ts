import { Module } from '@nestjs/common';
import { ResultsControllerService } from './results-controller.service';
import { ResultsControllerController } from './results-controller.controller';

@Module({
  controllers: [ResultsControllerController],
  providers: [ResultsControllerService]
})
export class ResultsControllerModule {}
