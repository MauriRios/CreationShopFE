import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { CategorysService } from 'src/app/services/categorys.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-regalos-catalog',
  templateUrl: './regalos-catalog.component.html',
  styleUrls: ['./regalos-catalog.component.css']
})
export class RegalosCatalogComponent implements OnInit {

  products: Products[] = [] ;
  buyQuantity: Products[] = [];
  
  constructor(private cartService: CartService,
    private productsDataService: ProductsDataService,
    private categoryService: CategorysService) { }

    ngOnInit(): void {
      this.categoryFilter('Regalos');
    }

    private categoryFilter(parameter: string) {
      this.productsDataService.getProducts().subscribe(data => {
        this.products = data.filter((products => products.category == parameter));
      });
    }

    upQuantity(product : Products): void{
      this.cartService.upQuantity(product),
      console.log(product)
    }
  
    downQuantity(product : Products): void{
      this.cartService.downQuantity(product),
      console.log(product)
    }
  
    addCart(product: Products){
      this.cartService.addToCart(product)
    }
  
    verifyBeerQuantity(product : Products): void {
      this.cartService.verifyBeerQuantity(product);
    }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}

}
