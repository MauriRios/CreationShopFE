import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-vinos-catalog',
  templateUrl: './vinos-catalog.component.html',
  styleUrls: ['./vinos-catalog.component.css']
})
export class VinosCatalogComponent implements OnInit {

  filter = '';
  products : Products[] = [
    {
      id: 1,
      name: "asddd",
      marca: 'stella',
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 2,
      name: "addd",
      marca: 'quilmes',
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 3,
      name: "asdd",
      marca: 'brama',
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 4,
      name: "asd",
      marca: 'brama',
      img: "assets/img/slide.jpg",
      category: "combos",
      price: 220,
      stock: 20,
      quantity: 0,
    },
    {
      id: 5,
      name: "asd",
      marca: 'asd',
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
