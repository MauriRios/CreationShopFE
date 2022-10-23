import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-cervezas-catalog',
  templateUrl: './cervezas-catalog.component.html',
  styleUrls: ['./cervezas-catalog.component.css']
})
export class CervezasCatalogComponent implements OnInit{

  filter = '';
  products = [
    {
      id: 1,
      name: "asddd",
      marca: "quilmes",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 2,
      name: "addd",
      marca: "brahma",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 3,
      name: "asdd",
      marca: "artois",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 4,
      name: "asd",
      marca: "colas",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 5,
      name: "asd",
      marca: "chauy",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    }
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
