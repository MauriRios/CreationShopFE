import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Products[] = [];
  buyQuantity: Products[] = [];
  productNum: number = 0; 
  paySuccess = true

  constructor(private cartService: CartService,
              private productsDataService: ProductsDataService) 
                {   } 

  ngOnInit(): void {

    this.cartService.products
    .subscribe(data => this.products = data);

  }
  
  verifyBeerQuantity(product : Products): void {
    if(product.stock < product.quantity) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se pueden pedir más productos de los que hay en stock',
        showConfirmButton: false,
        timer: 2500
      })
      product.quantity = product.stock;
    }
    if(product.quantity < 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se pueden pedir menos que 0 productos',
        showConfirmButton: false,
        timer: 2500
      })
      product.quantity = 0;
    }
  }

  total(){
    let sum=0;
    this.products.forEach(products => {
      sum += products.quantity * products.price
    });
    return sum;
  }

  pay(){
    if ( this.paySuccess = true ) {
      for(let product of this.products){
        if( product.id === product.id && product.stock > product.quantity -1){
        product.stock -= product.quantity
        }
        else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No se pudo realizar la compra',
            showConfirmButton: false,
            timer: 2500
          });}
      }
    }
    this.cartService.pay(this.products)
    console.log(this.products)
  }
  

}
