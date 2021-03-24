import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestsControllerService } from './tests-controller.service';
import { AnswerPaper } from './dto/answer-paper';

@Controller('tests-controller')
export class TestsControllerController {
  constructor(private readonly testsControllerService: TestsControllerService) {}

  @Post()
  submitAnswers(@Body() answerPaper: AnswerPaper) {
    return this.testsControllerService.submitAnswers(answerPaper);
  }

  @Get()
  getQuestionPaper() {
    return this.testsControllerService.getQuestionPaper();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testsControllerService.remove(+id);
  }
}
