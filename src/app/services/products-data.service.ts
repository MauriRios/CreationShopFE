import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../models/products.model';



const URL = 'http://localhost:8080/'; 
const apiMP = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private _productsList : Products[] = [];
  private _productsSubjects : BehaviorSubject<Products[]> = new BehaviorSubject(this._productsList);
  public products : Observable<Products[]> = this._productsSubjects.asObservable();
  
  constructor(private http: HttpClient) { 
    this.http.get<Products[]>(URL + 'productos/traer').subscribe(data => {
      this._productsList.push(...data);
    });
  }

    public getProducts():Observable<Products[]>{
      return this.http.get<Products[]>(URL + 'productos/traer');
    }

    public postBuyProducts(listProduct: Products[]) {
      return this.http.post<Products[]>(URL + '/process_payment', listProduct);
    }
  }

  // create(product: Products): void{
  //   this.http.post<Products>(URL, product).subscribe({
  //     error: error => {
  //       console.error('There was an error!', error);
  //   },
  //     next: data => {
  //       this._productsList.push(data)
  //     }
  //   });
  // }


