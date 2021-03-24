import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestsControllerService } from './tests-controller.service';
import { AnswerPaper } from './dto/answer-paper';

@Controller('test')
export class TestsControllerController {
  constructor(private readonly testsControllerService: TestsControllerService) {}

  @Post('submitAnswers')
  submitAnswers(@Body() answerPaper: AnswerPaper) {
    return this.testsControllerService.submitAnswers(answerPaper);
  }

  @Get('getQuestionPaper')
  getQuestionPaper() {
    return this.testsControllerService.getQuestionPaper();
  }
}
