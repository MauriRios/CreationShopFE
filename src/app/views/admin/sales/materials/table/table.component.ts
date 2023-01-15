import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { Expenses } from 'src/app/models/expenses.model';
import { Products } from 'src/app/models/products.model';
import { Sales } from 'src/app/models/sales.model';
import { ValanceService } from 'src/app/services/valance.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [ 'N°', 'icon', 'ID', 'Month','Expenses' ];
  dataSource = new MatTableDataSource<any>();
  //gastos
  expensesArr: any [] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private valanceService: ValanceService,
              public dialog: MatDialog,
              config: NgbModalConfig,
    ) {
              config.backdrop = 'static',
              config.keyboard = false
  }

  ngOnInit(): void {
    this.salesAndExpenseMonthlyValance();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  salesAndExpenseMonthlyValance(){
      this.valanceService.getExpenses().subscribe((expenses) => {
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
