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
              private router:Router,) 
              { 
                this.createForm();
              }

  ngOnInit(): void {
    
  }

  createForm(){
    this.addProductForm = this.formBuilder.group({
      brand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      style: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      category: ['', Validators.required],
      volume: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      price: ['', [Validators.required, Validators.min(1)] ],
      stock: ['', [Validators.required, Validators.min(1)] ],
      clearance: [''],
      image: ['', Validators.required],
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
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Hubo un Error',
        showConfirmButton: false,
        timer: 2500
      })
      this.addProductForm.markAllAsTouched();
    }
  }
  
//Volver a top luego de cambiar de vista/componente
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
}


//Form getters
get brandField(){
  return this.addProductForm.get('brand')
};
get styleField(){
  return this.addProductForm.get('style')
};
get categoryField(){
  return this.addProductForm.get('category')
};
get volumeField(){
  return this.addProductForm.get('volume')
};
get priceField(){
  return this.addProductForm.get('price')
};
get stockField(){
  return this.addProductForm.get('stock')
};
get imageField(){
  return this.addProductForm.get('image')
};

}
