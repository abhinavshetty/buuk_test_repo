import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { TestsService } from '../common/tests.service';
import { Question } from './models/question';
import { QuestionPaper } from './models/question-paper';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  @Output() testCloseAction = new EventEmitter<boolean>();
  questions = ['a', 'b', 'c'];
  questionPaper: QuestionPaper;
  currentQuestion: number;

  constructor(private testsService: TestsService) { }

  ngOnInit() {
    this.testsService.getQuestionPaper().subscribe(response => {
      this.questionPaper = response;
      this.currentQuestion = 0;
    });
  }

  nextQuestion() {

  }

  completeTest() {
    // make service call to send the test result
    this.testCloseAction.emit(true);
  }

  closeTest() {
    this.testCloseAction.emit(true);
  }

}
