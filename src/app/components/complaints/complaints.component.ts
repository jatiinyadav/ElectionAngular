import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit{

  complaintsChart: any;

  edmcData: any[] = [55638, 78153, 68511, 70657];
  ndmcData: any[] = [138079, 176170, 165021, 140704];
  sdmcData: any[] = [151917, 197171, 154952, 126787];

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit(): void {
    this.complaintsChart = new Chart('complaintsChart', {
      type: 'bar',

      data: {
        labels: ['2015', '2016', '2017', '2018'],
        datasets: [
          {
          label: "EDMC",
          data: this.edmcData,
          backgroundColor: this.getRandomColor(),
          barThickness: 30
          },
          {
          label: "NDMC",
          data: this.ndmcData,
          backgroundColor: this.getRandomColor(),
          barThickness: 30
          },
          {
          label: "SDMC",
          data: this.sdmcData,
          backgroundColor: this.getRandomColor(),
          barThickness: 30
          }
        ]
      },
      options: {
        aspectRatio: 1.4,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            color: '#ffffff',
            font: {
              size: 13,
            }
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    })
  }

}
