import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/categorys.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

addProductForm!:FormGroup;

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

  constructor(private formBuilder:FormBuilder,) { }

  ngOnInit(): void {

    this.addProductForm = this.formBuilder.group({
      brand: new FormControl('', [Validators.minLength(3)]),
      style: new FormControl('', [Validators.minLength(3)]),
      category: new FormControl(''),
      volume: new FormControl('', [Validators.minLength(3)]),
      price: new FormControl(0),
      stock: new FormControl(0),
      clearance: new FormControl(),
      image: new FormControl('', [Validators.minLength(10)]),
    });
  }


  onSubmit(){
    console.log(this.addProductForm.value)
  }
}
