import { Injectable } from '@nestjs/common';
import { AllResults } from 'src/results-controller/dto/allResults';
import { AnswerPaper } from './dto/answer-paper';
import { Question } from './dto/question';
import { QuestionPaper } from './dto/question-paper';
@Injectable()
export class TestsControllerService {

  questionSet = [
    { question: '1 + 1 = ?', options: ['1', '0', '2', '3'], correct: '2' },
    { question: '(a + b)^2 = ?', options: ['a^2 + b^2 + 2*a*b', 'a^2 + b^2', '2*(a^2)*(b^2)'], correct: 'a^2 + b^2 + 2*a*b' },
    { question: 'sin(x)^2 + cos(x)^2 = ?', options: ['0', 'tan(x)^2', '1', 'cot(x)^2'], correct: '1' },
    { question: 'The sum of the first 100 natural numbers can be written as ?', options: ['100*100', '100*99', '100*101', '100*101/2'], correct: '100*101/2' },
    { question: '2 + 3 = ?', options: ['7', '23', '32', '5'], correct: '5' },
    { question: 'dx^2/dx = ?', options: ['x', '1', '2x', '0'], correct: '2x' },
    { question: 'd(1/x)/dx = ?', options: ['1', '-1/x^2', '1/2x', '-1/2x'], correct: '-1/x^2' },
    { question: '1 + 2 + 4 + 8 + 16 + ...', options: ['x', '1', '2x', '0'], correct: '2x' }
  ];

  submitAnswers(answerPaper: AnswerPaper) {
    let score = 0;
    answerPaper.answers.forEach(item => {
      let questionFromSet = null;
      this.questionSet.forEach(questionInSet => {
        if (questionInSet.question == item.question) {
          questionFromSet = questionInSet;
        }
      });
      if (item.answer == questionFromSet.correct) {
        score = score + 25;
        item.prompt = 'Correct!';
      } else {
        item.prompt = 'Incorrect! Please check your calculation..';
      }
    });

    answerPaper.finalScore = score;
    AllResults.results.push(answerPaper);
    return answerPaper;
  }

  getQuestionPaper() {
    let questionPaper = new QuestionPaper();
    questionPaper.questions = [];
    while (questionPaper.questions.length < 4) {
      let chosenItem = this.questionSet[Math.floor(Math.random() * this.questionSet.length)];
      if (questionPaper.questions.some(item => item.question == chosenItem.question)) {

      } else {
        let question = new Question();
        question.question = chosenItem.question;
        question.options = chosenItem.options;
        questionPaper.questions.push(question);
      }
    }
    return questionPaper;
  }
}
