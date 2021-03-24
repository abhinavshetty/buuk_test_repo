import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RadioControlRegistry } from 'primeng/radiobutton';
import { runInThisContext } from 'vm';
import { TestsService } from '../common/tests.service';
import { Answer } from '../results/models/answer';
import { AnswerPaper } from '../results/models/answer-paper';
import { Question } from './models/question';
import { QuestionPaper } from './models/question-paper';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
  providers: [RadioControlRegistry]
})
export class TestsComponent implements OnInit {

  @Output() testCloseAction = new EventEmitter<boolean>();
  questions = ['a', 'b', 'c'];
  questionPaper: QuestionPaper;
  currentQuestion: number;
  currentAnswer: Answer;
  answerPaper: AnswerPaper;

  constructor(private testsService: TestsService) { }

  ngOnInit() {
    this.answerPaper = new AnswerPaper();
    this.testsService.getQuestionPaper().subscribe(response => {
      this.questionPaper = response;
      this.currentQuestion = 0;

      this.answerPaper.answers = [];
      let answer1 = new Answer();
      answer1.question = this.questionPaper.questions[this.currentQuestion].question;
      this.answerPaper.answers.push(answer1);
      this.currentAnswer = answer1;
      this.answerPaper.testStartTime = new Date();
    });
  }

  nextQuestion() {
    if (this.currentQuestion !== 3) {
      this.currentQuestion = this.currentQuestion + 1;
    }

    this.currentAnswer = null;
    this.answerPaper.answers.forEach(answer => {
      if (answer.question === this.questionPaper.questions[this.currentQuestion].question) {
        this.currentAnswer = answer;
      }
    });
    if (this.currentAnswer === null) {
      let newAnswer = new Answer();
      newAnswer.question = this.questionPaper.questions[this.currentQuestion].question;
      this.answerPaper.answers.push(newAnswer);
      this.currentAnswer = newAnswer;
    }
  }

  previousQuestion() {
    if (this.currentQuestion !== 0) {
      this.currentQuestion = this.currentQuestion - 1;
    }

    this.currentAnswer = null;
    this.answerPaper.answers.forEach(answer => {
      if (answer.question === this.questionPaper.questions[this.currentQuestion].question) {
        this.currentAnswer = answer;
      }
    });
    if (this.currentAnswer === null) {
      let newAnswer = new Answer();
      newAnswer.question = this.questionPaper.questions[this.currentQuestion].question;
      this.answerPaper.answers.push(newAnswer);
      this.currentAnswer = newAnswer;
    }
  }

  completeTest() {
    // make service call to send the test result
    let endTime = new Date();
    let duration = endTime.getTime() - this.answerPaper.testStartTime.getTime();
    duration = duration / 60000;
    this.answerPaper.testDuration = duration;
    this.answerPaper.id = Math.floor(Math.random() * 1000);
    this.testsService.submitAnswers(this.answerPaper).subscribe(response => {
      this.answerPaper = response;
    });
  }

  closeTest() {
    this.testCloseAction.emit(true);
  }

}
