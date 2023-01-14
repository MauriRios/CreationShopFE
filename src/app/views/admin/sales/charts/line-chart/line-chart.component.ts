import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Expenses } from 'src/app/models/expenses.model';
import { Sales } from 'src/app/models/sales.model';
import { ValanceService } from 'src/app/services/valance.service';
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
  expenses: Expenses [] = [];
  monthlyExpenses: number [] = [];

  constructor(private valanceService : ValanceService,
    
  ) { this.salesMonthlyValance();
      this.expenseMnthlyValance(); }

  ngOnInit(): void {
    
  }
  

  salesMonthlyValance(){
    this.valanceService.getSales().subscribe
    (data => {
      this.salesArr = data;  
      this.months = this.salesArr.map(data => data.month);
      this.monthlySales = this.salesArr.map(data => data.saleMonthlyValance);

            // Crear y actualizar gráfico
            this.renderChart();
    });
  }

  expenseMnthlyValance(){
    this.valanceService.getExpenses().subscribe
    (data => {
      this.expenses = data;  
      this.monthlyExpenses = this.expenses.map(data => data.monthsExpensesValance);
    
            // Crear y actualizar gráfico
            this.renderChart();
          })
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
    myChart.data.labels = this.months;
    myChart.data.datasets[0].data = this.monthlySales;
    myChart.data.datasets[1].data = this.monthlyExpenses;
    myChart.update();
  }

}
