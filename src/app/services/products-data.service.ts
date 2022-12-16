import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Products } from '../models/products.model';

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
    this.http.get<Products[]>(environment.URL + 'productos/traer').subscribe(data => {
      this._productsList.push(...data);
      console.log(data)
    });
  }

    public getProducts():Observable<Products[]>{
      return this.http.get<Products[]>(environment.URL + 'productos/traer');
    }

    public getProductById(id: number): Observable<Products> {
      return this.http.get<Products>(environment.URL + 'producto/traer/' + (1+id));
    }

    public postBuyProducts(products: Products[]): Observable<Products[]> {
      return this.http.post<Products[]>('http://localhost:8080/' + 'cart/buy', products);
    }

    public deleteProduct(id: number): Observable<Products> {
      return this.http.delete<Products>(environment.URL + 'producto/borrar/' + id)
      .pipe(
        tap(()=> {
            this._refresh$.next();
        })
      );
    }

    public createProduct(product: Products): Observable<Products> {
      return this.http.post<Products>(environment.URL + 'producto/crear', product)
      .pipe(
        tap(()=> {
            this._refresh$.next();
        })
      );
    }

    public updateProduct(id: number, product: Products): Observable<Products> {
      return this.http.put<Products>(environment.URL + 'producto/editar/' + id, product)
      .pipe(
        tap(()=> {
            this._refresh$.next();
        })
      );
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


