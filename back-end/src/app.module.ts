import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsControllerModule } from './tests-controller/tests-controller.module';

@Module({
  imports: [TestsControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
