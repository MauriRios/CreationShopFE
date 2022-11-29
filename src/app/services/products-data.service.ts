import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Products } from '../models/products.model';



const URL = 'http://localhost:8080/'; 
const apiMP = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  private _productsList : Products[] = [];
  private _productsSubjects : BehaviorSubject<Products[]> = new BehaviorSubject(this._productsList);
  public products : Observable<Products[]> = this._productsSubjects.asObservable();
  
  constructor(private http: HttpClient) { 
    this.http.get<Products[]>(URL + 'productos/traer').subscribe(data => {
      this._productsList.push(...data);
      console.log(data)
    });
  }

    public getProducts():Observable<Products[]>{
      return this.http.get<Products[]>(URL + 'productos/traer');
    }

    public postBuyProducts(products: Products[]): Observable<Products[]> {
      return this.http.post<Products[]>('http://localhost:8080/' + 'cart/buy', products);
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


