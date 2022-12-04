import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Products } from 'src/app/models/products.model';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ 'brand', 'style', 'volume', 'category', 'price','stock', 'clearance', 'acciones' ];
  dataSource = new MatTableDataSource<any>();
  products: Products[] = [];
  clearance = false

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

  editProduct(product: Products) {
    localStorage.setItem("idPerfil", product.id!.toString());
    this.router.navigate(["/admin/perfiles-editar"]);
  }

  openDialog(product: Products): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '250px',
    });
    localStorage.setItem("idPerfilBorrar", product.id!.toString());
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}