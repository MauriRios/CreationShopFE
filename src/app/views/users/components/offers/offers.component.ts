import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})


export class OffersComponent implements OnInit {
  

  products!:Products[];
  offersProducts!:Products[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      },
      1500: {
        items: 6
      },
    },
    nav: true
  }


  constructor( private cartService: CartService,
              private productsDataService: ProductsDataService,
              ) { }

  ngOnInit(): void {
    this.productsDataService.getProducts().subscribe(data => {
      this.products = data})
    

    console.log(this.offersProducts);
  }

  filterProducts(product: Products):void{
        if (product.clearance = true){
          this.offersProducts.push(product)
        }
      }


  upQuantity(product : Products): void{
    this.cartService.upQuantity(product);
  }

  downQuantity(product : Products): void{
    this.cartService.downQuantity(product)
  }

  addCart(product: Products){
    this.cartService.addToCart(product);
  }

  verifyProductQuantity(product : Products): void {
    this.cartService.verifyProductQuantity(product);
  }
  

}
