import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-combos-catalog',
  templateUrl: './combos-catalog.component.html',
  styleUrls: ['./combos-catalog.component.css']
})
export class CombosCatalogComponent implements OnInit {

  products : Products[] = [
    {
      id: 1,
      name: "asddd",
      marca: "fsad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 2,
      name: "asddd",
      marca: "fsad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 3,
      name: "asddd",
      marca: "fsad",
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 4,
      name: "asddd",
      marca: "fsad",
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

}
