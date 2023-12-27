import {Component, OnInit} from '@angular/core';

import Chart from 'chart.js/auto';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  imports: [
    MatCardModule
  ],
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit{

  public chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("line-chart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Janvier', 'Février', 'Mars','Avril',
          'Mai', 'Juin', 'Juillet','Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
        datasets: [
          {
            label: "Trésorie",
            data: ['1000','1100', '900', '500', '1200', '2000', '1500', '1440'],
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
          },
        ]
      },
      options: {
        aspectRatio: 7,
        backgroundColor: 'lightblue',
        borderColor: 'lightblue',

      }
    });
  }


}
