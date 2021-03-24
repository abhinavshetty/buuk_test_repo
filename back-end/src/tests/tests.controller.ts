import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnswerPaper } from './dto/answer-paper';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post('submitAnswers')
  submitAnswers(@Body() answerPaper: AnswerPaper) {
    return this.testsService.submitAnswers(answerPaper);
  }

  @Get('getQuestionPaper')
  getQuestionPaper() {
    return this.testsService.getQuestionPaper();
  }
}
