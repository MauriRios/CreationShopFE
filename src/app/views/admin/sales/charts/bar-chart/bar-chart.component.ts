import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BalanceService } from 'src/app/services/balance.service';
Chart.register(...registerables)

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  expensesArr: any [] = [];
  monthlyExpenses: number [] = [];
  months: string [] = [];


  constructor( private balanceService : BalanceService, ) {
    this.expenseMonthlyBalance();
  }

  ngOnInit(): void {

  }

  expenseMonthlyBalance(){
    this.balanceService.getExpenses().subscribe((expenses) => {
    //ventas
    this.expensesArr = expenses; 
    this.months = this.expensesArr.map(data => data.month); 
    this.monthlyExpenses = expenses.map(data => data.expenseMonthlyBalance);
    //renderiza y actualiza el grafico
    this.renderChart();
  });
}

  renderChart(){
    let myChart = new Chart("bar", {
      type: 'bar',
      data: {
        labels: [...this.months],
        datasets: [{
          label: 'Gastos',
          data: [...this.monthlyExpenses],
          borderWidth: 1,
          backgroundColor: "rgb(220, 148, 148)",
          borderColor: "red",
        },]
      },

      options: {
        scales: {
          y: {
            max:1000,
            border:{
              display: true
            },
            beginAtZero: true,
            grid: {
              display: true,
            },
            ticks: {
              display: true
          }
          },
          x: {
            border:{
              display: true
            },
            beginAtZero: true,
            grid: {
              display: true,
            }
          },
        },
        plugins:{
          legend:{
            display: true
          }
        }
      }
    });

    // hago un update de la data que le llega al campo de dataset, necesario para que renderize bien el grafico
    myChart.data.labels = this.months;
    myChart.data.datasets[0].data = this.monthlyExpenses;
    myChart.update();
  }
}
