import { Component, OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';
import { ResultsService } from '../common/results.service';
import { AnswerPaper } from './models/answer-paper';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [ FilterService ]
})
export class ResultsComponent implements OnInit {

  allResults : AnswerPaper[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.resultsService.getResults().subscribe(response => {
      this.allResults = response;
    });
  }
}
