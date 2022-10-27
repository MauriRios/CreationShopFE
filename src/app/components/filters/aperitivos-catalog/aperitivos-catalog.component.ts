import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-aperitivos-catalog',
  templateUrl: './aperitivos-catalog.component.html',
  styleUrls: ['./aperitivos-catalog.component.css']
})
export class AperitivosCatalogComponent implements OnInit {


  filter = '';
  products: Products[] = [];
  
  constructor(private cartService: CartService,
              private productsDataService: ProductsDataService) { }

  ngOnInit(): void {
    this.productsDataService.getProducts().subscribe(data => {
      this.products = data, console.log(this.products)});
  }

  // filterMarca(){
  //   this.products.filter((data => this.category == data.category ),
  //   );
  //   return this.products
  // }

  upQuantity(product : Products): void{
    if(product.stock > product.quantity) {
      product.quantity ++;
      // this.cartService.addToCart(product);
    }
  }

  downQuantity(product : Products): void{
    if(product.quantity > 0) {
      product.quantity --;
      // this.cartService.addToCart(product);
    }
  }

  verifyBeerQuantity(product : Products): void {
    if(product.stock < product.quantity) {
      alert("No se pueden pedir más productos  de los que hay en stock");
      product.quantity = product.stock;
    }
    if(product.quantity < 0) {
      alert("No se pueden pedir menos que 0 productos");
      product.quantity = 0;
    }
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}


}
