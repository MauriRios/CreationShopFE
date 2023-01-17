import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { CaterogyFilterService } from 'src/app/services/caterogy-filter.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  selectedCategory!: string;
  filter = '';
  products: Products[] = [];
  buyQuantity: Products[] = [];
  
  constructor(private cartService: CartService,
              private productsDataService: ProductsDataService,
              public categoryFilterService: CaterogyFilterService,
              ) {                
                this.categoryFilterService.categorySelected.subscribe(category => {
                this.categoryFilter(category);
                }); }

              ngOnInit() {

                }

                //TODO REFACTORIZAR PARA QUE SEA UN COMPONENTE REUTILIZABLE 


  private categoryFilter(parameter: string) {
    this.productsDataService.getProducts().subscribe(data => {
    this.products = data.filter((products => products.category === parameter));
    });
  }

  upQuantity(product : Products): void{
    this.cartService.upQuantity(product);
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
