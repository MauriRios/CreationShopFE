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
  
  constructor() { }

  addToCart(cartList:Products){
    let index = this._cartList.findIndex(p => p.id === cartList.id);
    if(index === -1)
      this._cartList.push(cartList);
    else
      this._cartList[index].quantity = cartList.quantity;
    if (cartList.quantity == 0){
      this._cartList.splice(index,1);
    }
  }
}
