import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/categorys.model';
import { Products } from 'src/app/models/products.model';
import { ProductsDataService } from 'src/app/services/products-data.service';
import Swal from 'sweetalert2';

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
              private router:Router,) { 
                this.createForm();
              }

  ngOnInit(): void {
    
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

  onResetForm(){
    this.addProductForm.reset();
  }


  onSubmit(newProduct: Products){
    if(this.addProductForm.valid){
      const value = this.addProductForm.value;
      console.log(value);
    this.productsDataService.createProduct(this.addProductForm.value)
    .subscribe(newProduct => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto Agregado con éxito',
        showConfirmButton: false,
        timer: 2500
      }),
      window.scrollTo(0, 0);
      this.onResetForm();
      });
    } else 
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Hubo un Error',
        showConfirmButton: false,
        timer: 2500
      })
  }
  

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
}

}
