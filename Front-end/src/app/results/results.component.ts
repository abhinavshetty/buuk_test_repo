import { Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ResultsComponent implements OnInit, OnChanges {
  @Input() testCloseEvent: boolean;

  allResults : AnswerPaper[];

  constructor(private resultsService: ResultsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.resultsService.getResults().subscribe(response => {
      this.allResults = response;
    });
  }

  ngOnInit() {
    this.resultsService.getResults().subscribe(response => {
      this.allResults = response;
    });
  }
}
