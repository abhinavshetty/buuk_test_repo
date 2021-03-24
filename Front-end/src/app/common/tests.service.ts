import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerPaper } from '../results/models/answer-paper';
import { SharedConfig } from './sharedConfig';
import { QuestionPaper } from '../tests/models/question-paper';

@Injectable({
    providedIn: 'root'
})
export class TestsService {

    private testsBaseUrl = '/tests';

    constructor(private http: HttpClient) {

    }

    getQuestionPaper(): Observable<QuestionPaper> {
        let request = {};
        return this.http.get<QuestionPaper>(SharedConfig.apiUrl + this.testsBaseUrl + '/getQuestionPaper', request);
    }

    submitAnswers(answerPaper: AnswerPaper): Observable<AnswerPaper> {
        let request = answerPaper;
        return this.http.post<AnswerPaper>(SharedConfig.apiUrl + this.testsBaseUrl + '/submitAnswers', request);
    }

}