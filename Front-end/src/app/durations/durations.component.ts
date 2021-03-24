import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min';
import { ResultsService } from '../common/results.service';

@Component({
  selector: 'app-durations',
  templateUrl: './durations.component.html',
  styleUrls: ['./durations.component.css']
})
export class DurationsComponent implements OnInit {
  chart = new CanvasJS.Chart("durationChartContainer", {
    animationEnabled: true,
    exportEnabled: true,
    data: [{
      type: "pie",
      indexLabel: "{label} {y}",
      dataPoints: [

      ]
    }]
  });
  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    let resultSetSize = 0;
    let lowTime = 0;
    let mediumLowTime = 0;
    let mediumHighTime = 0;
    let highTime = 0;
    this.resultsService.getDurations().subscribe(response => {
      if (response != null && response != undefined && response.length != 0) {
        resultSetSize = response.length;
        response.forEach(item => {
          if (item < 5) {
            lowTime = lowTime + 1;
          } else if (item >= 5 && item < 10) {
            mediumLowTime = mediumLowTime + 1;
          } else if (item >= 10 && item < 15) {
            mediumHighTime = mediumHighTime + 1;
          } else {
            highTime = highTime + 1;
          }
        });
        let dataPoints = [
          { y: (100 * lowTime / resultSetSize), label: "Less than 5 minutes" },
          { y: (100 * mediumLowTime / resultSetSize), label: "Between 5 and 10 minutes" },
          { y: (100 * mediumHighTime / resultSetSize), label: "Between 10 and 15 minutes" },
          { y: (100 * highTime / resultSetSize), label: "Over 15 minutes" }
        ];
        this.chart = new CanvasJS.Chart("durationChartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          data: [{
            type: "pie",
            indexLabel: "{label} {y}",
            dataPoints: dataPoints
          }]
        });
        this.chart.render();
      }
    });
  }



}
