import { Injectable } from '@nestjs/common';
import { AllResults } from './dto/allResults';

@Injectable()
export class ResultsControllerService {
  getResults() {
    return AllResults.results;
  }

  getDurations() {
    let durations = [];
    AllResults.results.forEach(result => {
      durations.push(result.testDuration);
    });
    return durations;
  }
}
