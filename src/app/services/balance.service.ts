import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expenses } from '../models/expenses.model';
import { Sales } from '../models/sales.model';


@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  
  private _refresh$ = new Subject<void>();

    //ventas
    salesArr: Sales [] = [];
    monthsSales: string[] = [];
    monthlySales: number[] = [];
  
    //gastos
    expensesArr: Expenses [] = [];
    monthsExpenses: string[] = [];
    monthlyExpenses: number [] = [];

  get refresh$() {
    return this._refresh$;
  }
  constructor(private http: HttpClient) {
    this.salesAndExpenseMonthlyBalance();
  }

  getSales(): Observable<Sales[]>  {
      return this.http.get<Sales[]>(environment.URL + 'balance/ventas/traer');
  }

  getExpenses(): Observable<Expenses[]>  {
      return this.http.get<Expenses[]>(environment.URL + 'balance/gastos/traer');
  }

    //combina ambos valances y puedo iterar ambas data
    salesAndExpenseMonthlyBalance(){
      forkJoin([
          this.getSales(),
          this.getExpenses()
      ]).subscribe(([sales, expenses]) => {
        //ventas
        this.salesArr = sales;  
        this.monthsSales = this.salesArr.map(data => data.month);
        this.monthlySales = this.salesArr.map(data => data.saleMonthlyBalance);
        //gastos
        this.expensesArr = expenses; 
        this.monthsExpenses = this.expensesArr.map(data => data.month);
        this.monthlyExpenses = expenses.map(data => data.expenseMonthlyBalance);

      });
  }
  
  findBestProfitMonth(expenses: Expenses[], sales: Sales[]): {month: string; profit: number;} {
    let bestProfit = 0;
    let bestProfitMonth = "";
  
    for (const expense of expenses) {
      for (const sale of sales) {
        if (expense.month === sale.month) {
          let profit = sale.saleMonthlyBalance - expense.expenseMonthlyBalance;
          if (profit > bestProfit) {
            bestProfit = profit;
            bestProfitMonth = expense.month;
          }
        }
      }
    }
  
    return {month: bestProfitMonth, profit: bestProfit};
  }

      annualEarnings(sales: number[], expenses: number[]) : number {
        let totalSales = 0;
        let totalExpenses = 0;
        for (const sale of sales) {
            totalSales += sale
        }
        for (const expense of expenses) {
            totalExpenses += expense
        }
        return totalSales - totalExpenses;    
    }

      salesOverExpenses(sales: number[], expenses: number[]) : number {
        let totalSales = 0;
        let totalExpenses = 0;
        for (const sale of sales) {
            totalSales += sale
          }
          console.log(totalSales)
          for (const expense of expenses) {
            totalExpenses += expense
          }
          console.log(totalExpenses)
          const balance = totalSales - totalExpenses;
        const percentage = (balance / totalExpenses) * 100;
        console.log(percentage)
        return percentage;
    }

}
