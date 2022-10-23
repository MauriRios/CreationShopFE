import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-destilados-catalog',
  templateUrl: './destilados-catalog.component.html',
  styleUrls: ['./destilados-catalog.component.css']
})
export class DestiladosCatalogComponent implements OnInit {
  
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
    },
    {
      id: 5,
      name: "asddd",
      marca: "fsasdasdad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  filterMarca(products : any){
    this.products.filter((products => products.marca == products.marca ),
    );
    return products.marca
  }
}
