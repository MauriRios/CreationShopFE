import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Category } from 'src/app/models/categorys.model';
import { Products } from 'src/app/models/products.model';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

addProductForm!:FormGroup;
newProduct!:Products;

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

  constructor(private formBuilder:FormBuilder,
              private productsDataService: ProductsDataService,
              private router:Router,) { }

  ngOnInit(): void {
    this.createForm();

  }

  createForm(){
    this.addProductForm = this.formBuilder.group({
      brand: new FormControl('', [Validators.minLength(3)]),
      style: new FormControl('', [Validators.minLength(3)]),
      category: new FormControl(''),
      volume: new FormControl('', [Validators.minLength(2)]),
      price: new FormControl(''),
      stock: new FormControl(''),
      clearance: new FormControl(),
      image: new FormControl('', [Validators.minLength(10)]),
    });
  }


  onSubmit(newProduct: Products){
    this.productsDataService.createProduct(this.addProductForm.value)
    .subscribe(newProduct => {
      alert("creado con eeeeeeeeexito!");
      window.scrollTo(0, 0);
      this.createForm();
    });
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}

}
