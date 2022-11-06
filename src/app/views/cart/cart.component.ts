import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Products[] = [];
  buyQuantity: Products[] = [];
  productNum: number = 0; 
  success = true

  constructor(private cartService: CartService,
              private productsDataService: ProductsDataService) 
                {   } 

  ngOnInit(): void {
    this.cartService.products
    .subscribe(data => this.products = data);

  }

  // upQuantity(product : Products): void{
  //   if(product.stock > product.quantity) {
  //   this.buyQuantity.push(product) && product.quantity ++;
  //     console.log()
  //   }
  // }

  // downQuantity(product : Products): void{
  //   if(product.quantity > 0) {
  //     product.quantity --;

  //     let index = this.products.findIndex(prod => prod.id === product.id);
  //     if (product.quantity == 0){
  //       this.products.splice(index,1);
  //       }
  //   }
  // }
  
  verifyBeerQuantity(product : Products): void {
    if(product.stock < product.quantity) {
      alert("No se pueden pedir más productos  de los que hay en stock");
      product.quantity = product.stock;
    }
    if(product.quantity < 0) {
      alert("No se pueden pedir menos que 0 productos");
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
    if ( this.success = true ) {
      for(let product of this.products){
        if( product.id === product.id){
        product.stock -= product.quantity, console.log(product.stock)
        }
      }
    }
  }

}
