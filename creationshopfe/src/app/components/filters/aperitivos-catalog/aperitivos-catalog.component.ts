import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-aperitivos-catalog',
  templateUrl: './aperitivos-catalog.component.html',
  styleUrls: ['./aperitivos-catalog.component.css']
})
export class AperitivosCatalogComponent implements OnInit {


  filter = '';
  products = [
    {
      id: 1,
      name: "asddd",
      marca: "fsasdasdad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
      clearance: false,
    },
    {
      id: 2,
      name: "addd",
      marca: "fsasdad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
      clearance: false,
    },
    {
      id: 3,
      name: "asdd",
      marca: "fasdsad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
      clearance: false,
    },
    {
      id: 4,
      name: "asd",
      marca: "fsad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
      clearance: false,
      
    }
  ];
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.products.subscribe( products => this.products = products);
  }

  filterMarca(products : any){
    this.products.filter((products => products.marca == products.marca ),
    );
    return products.marca
  }

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

}
