import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/categorys.model';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = new FormGroup({
    brand: new FormControl(''),
    style: new FormControl(''),
    category: new FormControl(''),
    volume: new FormControl(''),
    price: new FormControl(0),
    stock: new FormControl(0),
    clearance: new FormControl(false),
    image: new FormControl(''),
  });

  categorys: Category[] = [
    {name: 'Aperitivos'},
    {name: 'Cervezas'},
    {name: 'Sin Alcohol'},
    {name: 'Destilados'},
    {name: 'Whiskys'},
    {name: 'Combos'},
    {name: 'Regalos'},
    {name: 'Vinos'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){

  }
}
