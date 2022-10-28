import { Component, Input, OnInit } from '@angular/core';
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

  products: Products[] = [];

  constructor(private cartService: CartService,
    private productsDataService: ProductsDataService,
    private categoryService: CategorysService) { }

    ngOnInit(): void {
      this.categoryFilter('Combos');
    }

    private categoryFilter(parameter: string) {
      this.productsDataService.getProducts().subscribe(data => {
        this.products = data.filter((products => products.category == parameter));
      });
    }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}

}
