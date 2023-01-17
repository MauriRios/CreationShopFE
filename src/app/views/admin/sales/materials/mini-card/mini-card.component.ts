import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { Expenses } from 'src/app/models/expenses.model';
import { Sales } from 'src/app/models/sales.model';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit, OnDestroy {


  private unsubscribe$ = new Subject<void>();
  
    isIncrease!: boolean;
   // balance 
    salesOExpenses!: number;
    annualEarnings!: number;
    //ventas
    salesArr: Sales [] = [];
    monthsSales: string[] = [];
    monthlySales: number[] = [];
  
    //gastos
    expensesArr: Expenses [] = [];
    monthsExpenses: string[] = [];
    monthlyExpenses: number [] = [];
  
  constructor( private balanceService : BalanceService )
  { 
    this.salesAndExpenseMonthlyBalance();
  }

  ngOnInit(): void {
    
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('destroy balance')
  }

  salesAndExpenseMonthlyBalance(){
    forkJoin([this.balanceService.getSales(),
              this.balanceService.getExpenses()
    ]).pipe(
      takeUntil(this.unsubscribe$))
      .subscribe(([sales, expenses]) => {
      //fetch ventas
      this.salesArr = sales;  
      this.monthsSales = this.salesArr.map(data => data.month);
      this.monthlySales = this.salesArr.map(data => data.saleMonthlyBalance);
      //fetch gastos
      this.expensesArr = expenses; 
      this.monthsExpenses = this.expensesArr.map(data => data.month);
      this.monthlyExpenses = expenses.map(data => data.expenseMonthlyBalance);

      this.annualEarning();
      this.salesOverExpenses();

      if(this.salesOExpenses > 0 ){
        this.isIncrease = true
        console.log(this.isIncrease)
      }
    });
}

  annualEarning(){   
    this.annualEarnings = this.balanceService.annualEarnings(this.monthlySales, this.monthlyExpenses);
      console.log(this.annualEarnings);
      console.log(this.monthlyExpenses)
      console.log(this.salesArr)
  }

  salesOverExpenses(){
    this.salesOExpenses = this.balanceService.salesOverExpenses(this.monthlySales, this.monthlyExpenses) 
  }



}
