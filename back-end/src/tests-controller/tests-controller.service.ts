import { Injectable } from '@nestjs/common';
import { AnswerPaper } from './dto/answer-paper';
@Injectable()
export class TestsControllerService {

  questionSet = [
    {question: '1 + 1 = ?', options : ['1', '0', '2', '3'], correct: '2'},
    {question: '(a + b)^2 = ?', options : ['a^2 + b^2 + 2*a*b', 'a^2 + b^2', '2*(a^2)*(b^2)'], correct: 'a^2 + b^2 + 2*a*b'},
    {question: 'sin(x)^2 + cos(x)^2 = ?', options : ['0', 'tan(x)^2', '1', 'cot(x)^2'], correct: '1'},
    {question: 'The sum of the first 100 natural numbers can be written as ?', options : ['100*100', '100*99', '100*101', '100*101/2'], correct: '100*101/2'},
    {question: '2 + 3 = ?', options : ['7', '23', '32', '5'], correct: '5'},
    {question: 'dx^2/dx = ?', options : ['x', '1', '2x', '0'], correct: '2x'},
    {question: 'd(1/x)/dx = ?', options : ['1', '-1/x^2', '1/2x', '-1/2x'], correct: '-1/x^2'},
    {question: '1 + 2 + 4 + 8 + 16 + ...', options : ['x', '1', '2x', '0'], correct: '2x'}
  ];

  submitAnswers(answerPaper: AnswerPaper) {
    return 'This action adds a new testsController';
  }

  getQuestionPaper() {
    return `This action returns all testsController`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testsController`;
  }

  remove(id: number) {
    return `This action removes a #${id} testsController`;
  }
}
