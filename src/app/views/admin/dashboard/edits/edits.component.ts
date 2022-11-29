import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Products } from 'src/app/models/products.model';
import { ProductsDataService } from 'src/app/services/products-data.service';


@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.css']
})
export class EditsComponent implements OnInit, AfterViewInit   {

  displayedColumns: string[] = ['id', 'brand', 'style', 'volume', 'category', 'price','stock', 'clearance' ];
  dataSource = new MatTableDataSource<any>();
  products: Products[] = [];
  subscription!: Subscription;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productsDataService: ProductsDataService, private router: Router,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getProducts();

    this.subscription = this.productsDataService.refresh$.subscribe(() => {
      this.getProducts();
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getProducts(): void {
    this.productsDataService.getProducts().subscribe(
      data => {
        this.products = data;
        this.dataSource.data = data;
        this.dataSource.paginator! = this.paginator;
        this.dataSource.sort! = this.sort;
      });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

