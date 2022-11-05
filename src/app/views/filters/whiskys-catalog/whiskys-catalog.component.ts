import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { CategorysService } from 'src/app/services/categorys.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-whiskys-catalog',
  templateUrl: './whiskys-catalog.component.html',
  styleUrls: ['./whiskys-catalog.component.css']
})
export class WhiskysCatalogComponent implements OnInit {

  filter = '';
  products: Products[] = [] ;
  buyQuantity: Products[] = [];
  
  constructor(private cartService: CartService,
    private productsDataService: ProductsDataService,
    private categoryService: CategorysService) { }

    ngOnInit(): void {
      this.categoryFilter('Whiskys');
    }

    private categoryFilter(parameter: string) {
      this.productsDataService.getProducts().subscribe(data => {
        this.products = data.filter((products => products.category == parameter));
      });
    }

    upQuantity(product : Products): void{
      this.cartService.upQuantity(product)
    }
  
    downQuantity(product : Products): void{
      this.cartService.downQuantity(product)
    }
  
    addCart(product: Products){
      this.cartService.addToCart(product)
    }
  
    verifyProductQuantity(product : Products): void {
      this.cartService.verifyProductQuantity(product);
    }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}
}
