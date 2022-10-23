import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Products[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.products
    .subscribe(data => this.products = data);
  }

  total(){
    let sum=0;
    this.products.forEach(products => {
      sum += products.quantity * products.price
    });
    return sum;
  }
}
