import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/products.model';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  subscription!: Subscription;
  product!:Products;
  roles!: string[];
  isAdmin!: boolean;

  constructor(private productsDataService : ProductsDataService,
              private router : Router,
              public dialogRef: MatDialogRef<DeleteProductComponent>,
              private tokenService: TokenService,
              ) { }

  ngOnInit(): void {
    this.getProduct();

    this.subscription =  this.productsDataService.refresh$.subscribe(()=>{
      this.delete();
    });
    

    (this.roles = this.tokenService.getAuthorities());
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto Eliminado con éxito',
        showConfirmButton: false,
        timer: 2500
      }),
      // this._snackBar.open('Producto Eliminado', 'Cerrar', {
      //   horizontalPosition: this.horizontalPosition,
      //   verticalPosition: this.verticalPosition,
      // }
      // )
      this.dialogRef.close();
      this.clearStorage();
    }
  );
  }

  clearStorage():void {
    window.localStorage.clear();
  }

}
