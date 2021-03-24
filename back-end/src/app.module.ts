import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsControllerModule } from './tests-controller/tests-controller.module';
import { ResultsControllerModule } from './results-controller/results-controller.module';
import { ResultsModule } from './results/results.module';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [TestsControllerModule, ResultsControllerModule, ResultsModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
