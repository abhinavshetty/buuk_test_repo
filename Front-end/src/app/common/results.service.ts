import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerPaper } from '../results/models/answer-paper';
import { SharedConfig } from './sharedConfig';

@Injectable({
    providedIn: 'root'
})
export class ResultsService {

    private resultsBaseUrl = '/results';

    constructor(private http: HttpClient) {

    }

    getResults(): Observable<AnswerPaper[]> {
        let request = {};
        return this.http.get<AnswerPaper[]>(SharedConfig.apiUrl + this.resultsBaseUrl + '/getResults', request);
    }

    getDurations(): Observable<number[]> {
        let request = {};

        return this.http.get<number[]>(SharedConfig.apiUrl + this.resultsBaseUrl + '/getDurations', request);
    }

}