import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { CategorysService } from 'src/app/services/categorys.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-cervezas-catalog',
  templateUrl: './cervezas-catalog.component.html',
  styleUrls: ['./cervezas-catalog.component.css']
})
export class CervezasCatalogComponent implements OnInit{

  filter = '';
  products: Products[] = [];
  
  constructor(private cartService: CartService,
              private productsDataService: ProductsDataService,
              private categoryService: CategorysService) { }

  ngOnInit(): void {
    this.categoryFilter('Cervezas');
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