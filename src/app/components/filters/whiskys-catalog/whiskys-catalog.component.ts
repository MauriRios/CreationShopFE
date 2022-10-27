import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-whiskys-catalog',
  templateUrl: './whiskys-catalog.component.html',
  styleUrls: ['./whiskys-catalog.component.css']
})
export class WhiskysCatalogComponent implements OnInit {

  filter = '';
  products: Products[] = [] ;
  
  constructor(private cartService: CartService,
    private productsDataService: ProductsDataService) { }

  ngOnInit(): void {
    this.productsDataService.getProducts().subscribe(data => {
    this.products = data, console.log(this.products)});
    }

  filterMarca(products : any){
    this.products.filter((products => products.brand == products.brand ),
    );
    return products.marca
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}
}
