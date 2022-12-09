import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Products } from '../models/products.model';
import { ProductsDataService } from './products-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList : Products[] = [];
  private _cartListSubjects : BehaviorSubject<Products[]> = new BehaviorSubject(this._cartList);
  public products : Observable<Products[]> = this._cartListSubjects.asObservable();
  buyQuantity: Products[] = [];
  

  constructor(private productsDataService: ProductsDataService) { }

  addToCart(newProduct:Products){
    let index = this._cartList.findIndex(prod => prod.id === newProduct.id);
    if (index === -1){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
      this._cartList.push(newProduct);
    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Producto actualizado, ahora tienes ' + newProduct.quantity + ' en tu carrito',
        showConfirmButton: false,
        timer: 2500
      })
      this._cartList[index].quantity = newProduct.quantity;
      console.log(newProduct);
    }
    if (newProduct.quantity == 0) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Elige la cantidad ',
        showConfirmButton: false,
        timer: 2500
      })
      //this._cartList.splice(index,1);
    };
  }

  pay(listProduct: Products[]){
    this.productsDataService.postBuyProducts(this._cartList);
  }

  
  upQuantity(product : Products): void{
    //(product.quantity > 0 && product.quantity < 0)
    if(product.stock > product.quantity) {
      this.buyQuantity.push(product) && product.quantity ++;
    }
  }

  downQuantity(product : Products): void{
    if(product.quantity > 0) {
      product.quantity --;
    }
  }

  verifyProductQuantity(product : Products): void {
    if(product.stock < product.quantity) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No se pueden pedir más productos  de los que hay en stock',
        showConfirmButton: false,
        timer: 2500
      })
      product.quantity = product.stock;
    }
    if(product.quantity < 0) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No se pueden pedir menos que 0 productos',
        showConfirmButton: false,
        timer: 2500
      })
      product.quantity = 0;
    }
  }

}
