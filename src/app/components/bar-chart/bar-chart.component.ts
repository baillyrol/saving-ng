import {Component, OnInit} from '@angular/core';

import Chart from 'chart.js/auto';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  imports: [
    MatCardModule
  ],
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit{

  public chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Janvier', 'Février', 'Mars','Avril',
          'Mai', 'Juin', 'Juillet','Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
        datasets: [
          {
            label: "CashFlow",
            data: ['-10','200', '-200', '79', '92', '10', '120', '330'],
            backgroundColor: 'lightblue'
          },
        ]
      },
      options: {
        aspectRatio: 4
      }
    });
  }


}
