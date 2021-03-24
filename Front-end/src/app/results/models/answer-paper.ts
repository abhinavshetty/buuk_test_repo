import { Answer } from "./answer";

export class AnswerPaper {
    id: number;
    name: string;
    testStartTime: Date;
    testDuration: number;
    answers: Answer[];
    finalScore: number;
}