import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsControllerService } from './results-controller.service';

@Controller('results-controller')
export class ResultsControllerController {
  constructor(private readonly resultsControllerService: ResultsControllerService) {}

  @Get('getResults')
  getResults() {
    return this.resultsControllerService.getResults();
  }

  @Get('getDurations')
  getDurations() {
    return this.resultsControllerService.getDurations();
  }
}
