import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subject, takeUntil } from 'rxjs';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})


export class OffersComponent implements OnInit, OnDestroy {
  
  private unsubscribe$ = new Subject<void>();
  
  products!:Products[];
  isLogged!: boolean;

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
              private tokenService: TokenService,
              ) { 
                this.getToken();
              }

  ngOnInit(): void {
    this.filterProducts();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('destroy')
  }

  private  getToken(){
    //si esta logeado
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };
}

  private filterProducts() {
    this.productsDataService.getProducts()
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(data => {
      this.products = data.filter((products => products.clearance == true));
    });
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
