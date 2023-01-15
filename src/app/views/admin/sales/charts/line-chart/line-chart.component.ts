import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { forkJoin } from 'rxjs';
import { Expenses } from 'src/app/models/expenses.model';
import { Sales } from 'src/app/models/sales.model';
import { BalanceService } from 'src/app/services/balance.service';
Chart.register(...registerables)

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  //ventas
  salesArr: Sales [] = [];
  months: string[] = [];
  monthlySales: number[] = [];

  //gastos
  expensesArr: Expenses [] = [];
  monthlyExpenses: number [] = [];

  constructor(private balanceService : BalanceService,
    
  ) { this.salesAndExpenseMonthlyBalance(); }

  ngOnInit(): void {
    
  }

  //combina ambos valances y puedo iterar ambas data y luego  renderizo el grafico chart y lo lleno
  salesAndExpenseMonthlyBalance(){
    forkJoin([
        this.balanceService.getSales(),
        this.balanceService.getExpenses()
    ]).subscribe(([sales, expenses]) => {
      //ventas
      this.salesArr = sales;  
      this.months = this.salesArr.map(data => data.month);
      this.monthlySales = this.salesArr.map(data => data.saleMonthlyBalance);
      //gastos
      this.expensesArr = expenses; 
      this.monthlyExpenses = expenses.map(data => data.expenseMonthlyBalance);
      //renderiza y actualiza el grafico
      this.renderChart();
      
    });
}

  renderChart(){
    let myChart = new Chart("linechart", {
      type: 'line',
      data: {
        labels: [...this.months],
        datasets: [{
          label: 'Ventas',
          data: [...this.monthlySales],
          borderWidth: 1,
          backgroundColor: "blue",
          borderColor: "blue",
          pointRadius: 3,
          tension: 0.5,
        },
        {
          label: 'Gastos',
          data: [... this.monthlyExpenses],
          borderWidth: 1,
          backgroundColor: "red",
          borderColor: "red",
          pointRadius: 3,
          tension: 0.5,
        }]
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
    myChart.data.datasets[0].data = this.monthlySales;
    myChart.data.datasets[1].data = this.monthlyExpenses;
    myChart.update();
  }

}
