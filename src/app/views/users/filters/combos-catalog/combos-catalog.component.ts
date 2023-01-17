import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { CategorysService } from 'src/app/services/categorys.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-combos-catalog',
  templateUrl: './combos-catalog.component.html',
  styleUrls: ['./combos-catalog.component.css']
})
export class CombosCatalogComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  products: Products[] = [];
  buyQuantity: Products[] = [];

  constructor(private cartService: CartService,
    private productsDataService: ProductsDataService,
    private categoryService: CategorysService) { }

    ngOnInit(): void {
      this.categoryFilter('Combos');
    }

    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
    private categoryFilter(parameter: string) {
      this.productsDataService.getProducts()
      .pipe(
        takeUntil(this.unsubscribe$))
      .subscribe(data => {
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
