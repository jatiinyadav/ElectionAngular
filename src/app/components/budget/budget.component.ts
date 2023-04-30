import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  pieChartDelhiRevenue : any;
  pieChartDelhiExpenditure: any;
  pieChartMumbaiRevenue: any;
  pieChartMumbaiExpenditure: any

  ngOnInit(): void {
    this.pieChartDelhiRevenue = new Chart('pieChartDelhiRevenue', {
      type: 'pie',
      plugins: [ChartDataLabels],
      data: {
        labels: ['State Transfer', 'Rental income from municipal properties', 'Property Tax', 'Others'],
        datasets: [{
          label: "Revenue of MCD",
          data: [32.8, 19.8, 13.5, 33.9],
          backgroundColor: ['#088F8F', '#AAFF00', '#AFE1AF', '#5F8575'],
          barThickness: 10,
        }]
      },
      options: {
        aspectRatio: 1.6,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            color: '#ffffff',
            font: {
              size: 13,
            }
          },
        },
      }
    })
    this.pieChartDelhiExpenditure = new Chart('pieChartDelhiExpenditure', {
      type: 'pie',
      plugins: [ChartDataLabels],
      data: {
        labels: ['Establishment Express', 'Operation & Maintenance', 'Interest & Financial Charges', 'Others'],
        datasets: [{
          label: "Revenue of MCD",
          data: [64.9, 24.3, 5.4, 5.4],
          backgroundColor: ['#87CEFA', '#0000FF', '	#1E90FF', '	#6495ED'],
          barThickness: 10,
        }]
      },
      options: {
        aspectRatio: 1.6,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            color: '#ffffff',
            font: {
              size: 13,
            }
          },
        },
      }
    })
    this.pieChartMumbaiRevenue = new Chart('pieChartMumbaiRevenue', {
      type: 'pie',
      plugins: [ChartDataLabels],
      data: {
        labels: ['Octroi', 'Property Tax', 'Receipts from Development Plan Dept.', 'Others'],
        datasets: [{
          label: "Revenue of MCD",
          data: [36, 20, 14, 30],
          backgroundColor: ['#088F8F', '#AAFF00', '#AFE1AF', '#5F8575'],
          barThickness: 10,
        }]
      },
      options: {
        aspectRatio: 1.6,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            color: '#ffffff',
            font: {
              size: 13,
            }
          },
        },
      }
    })
    this.pieChartMumbaiExpenditure = new Chart('pieChartMumbaiExpenditure', {
      type: 'pie',
      plugins: [ChartDataLabels],
      data: {
        labels: ['Establishment Expenses', 'Contribution to Capital Account', 'Operation & Maintenance', 'Others'],
        datasets: [{
          label: "Revenue of MCD",
          data: [48, 23, 18, 11],
          backgroundColor: ['#87CEFA', '#0000FF', '	#1E90FF', '	#6495ED'],
          barThickness: 10,
        }]
      },
      options: {
        aspectRatio: 1.6,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            color: '#ffffff',
            font: {
              size: 13,
            }
          },
        },
      }
    })
  }
  
}
