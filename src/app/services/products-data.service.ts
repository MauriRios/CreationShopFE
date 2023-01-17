import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Products } from '../models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService{

  private _refresh$ = new Subject<void>();
  
  private _productsList : Products[] = [];
  private _productsSubjects : BehaviorSubject<Products[]> = new BehaviorSubject(this._productsList);
  products : Observable<Products[]> = this._productsSubjects.asObservable();
  
  
  get refresh$() {
    return this._refresh$;
  }
  constructor(private http: HttpClient) { 
    
    this.http.get<Products[]>(environment.URL + 'productos/traer').subscribe(data => {
      this._productsList.push(...data);
      console.log(data)
    });
  }

    getProducts():Observable<Products[]>{
      return this.http.get<Products[]>(environment.URL + 'productos/traer');
    }

    getProductById(id: number): Observable<Products> {
      return this.http.get<Products>(environment.URL + 'producto/traer/'+id);
    }

    postBuyProducts(products: Products[]): Observable<Products[]> {
      return this.http.post<Products[]>('http://localhost:8080/' + 'cart/buy', products);
    }

    deleteProduct(id: number): Observable<Products> {
      return this.http.delete<Products>(environment.URL + 'producto/borrar/' + id)
      .pipe(
        tap(()=> {
            this._refresh$.next();
        })
      );
    }

    createProduct(product: Products): Observable<Products> {
      return this.http.post<Products>(environment.URL + 'producto/crear', product)
      .pipe(
        tap(()=> {
            this._refresh$.next();
        })
      );
    }

    updateProduct(id: number, product: Products): Observable<Products> {
      return this.http.put<Products>(environment.URL + 'producto/editar/' + id, product)
      .pipe(
        tap(()=> {
            this._refresh$.next();
        })
      );
    }


  }