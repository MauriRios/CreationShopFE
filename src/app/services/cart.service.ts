import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList : Products[] = [];
  private _cartListSubjects : BehaviorSubject<Products[]> = new BehaviorSubject(this._cartList);
  public products : Observable<Products[]> = this._cartListSubjects.asObservable();
  buyQuantity: Products[] = [];
  
  constructor() { }

  addToCart(newProduct:Products){
    let index = this._cartList.findIndex(prod => prod.id == newProduct.id);
    if (index == -1)
      this._cartList.push(newProduct),
      alert("Producto agregado al carrito");
    // else
    //   this._cartList[index].quantity =+ newProduct.quantity;
    // if (newProduct.quantity == 0){
    //   this._cartList.splice(index,1);
    // }
  }

  
  upQuantity(product : Products): void{
    if(product.stock > product.quantity) {
      this.buyQuantity.push(product) && product.quantity ++;
      console.log(this.buyQuantity)

    }
  }

  downQuantity(product : Products): void{
    if(product.quantity > 0) {
      product.quantity --;
    }
  }

  verifyBeerQuantity(product : Products): void {
    if(product.stock < product.quantity) {
      alert("No se pueden pedir más productos  de los que hay en stock");
      product.quantity = product.stock;
    }
    if(product.quantity < 0) {
      alert("No se pueden pedir menos que 0 productos");
      product.quantity = 0;
    }
  }

}
