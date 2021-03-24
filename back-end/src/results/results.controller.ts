import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get('getResults')
  getResults() {
    return this.resultsService.getResults();
  }

  @Get('getDurations')
  getDurations() {
    return this.resultsService.getDurations();
  }
}
