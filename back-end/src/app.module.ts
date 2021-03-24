import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResultsModule } from './results/results.module';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [ResultsModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
