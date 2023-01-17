import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  private unsubscribe$ = new Subject<void>();

  displayedColumns: string[] = [ 'N°', 'icon', 'ID', 'Month','Expenses' ];
  dataSource = new MatTableDataSource<any>();
  //gastos
  expensesArr: any [] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private balanceService: BalanceService,
              public dialog: MatDialog,
              public config: NgbModalConfig,
              ) {
                config.backdrop = 'static',
                config.keyboard = false
  }

  ngOnInit(): void {
    this.salesAndExpenseMonthlyBalance();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('destroy')
  }

  salesAndExpenseMonthlyBalance(){
      this.balanceService.getExpenses()
      .pipe(
        takeUntil(this.unsubscribe$))
      .subscribe((expenses) => {
      //ventas
      this.expensesArr = expenses;  
      this.dataSource.data = expenses;
      this.dataSource.paginator! = this.paginator;
      this.dataSource.sort! = this.sort;
    });
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}