import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/products.model';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  subscription!: Subscription;
  product!:Products;

  constructor(private productsDataService : ProductsDataService,
              private router : Router,
              public dialogRef: MatDialogRef<DeleteProductComponent>,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProduct();

    this.subscription =  this.productsDataService.refresh$.subscribe(()=>{
      this.delete();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getProduct():void{
    let id = localStorage.getItem('idproductDelete');
    this.productsDataService.getProductById(+id!).subscribe(
      data => {
        this.product = data;
        console.log(data);
      }
    );
  }

  delete():void{
  this.productsDataService.deleteProduct(this.product.id).subscribe(
    data => {
      this._snackBar.open('Producto Eliminado', 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
      )
      this.dialogRef.close()
    }
  );
 // window.location.reload();
  }

}
