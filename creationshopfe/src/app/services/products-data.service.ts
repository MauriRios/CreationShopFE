import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../models/products.model';
import { environment } from 'src/environments/environment';


const URL = environment + 'beers'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private _productsList : Products[] = [];
  private _productsSubjects : BehaviorSubject<Products[]> = new BehaviorSubject(this._productsList);
  public products : Observable<Products[]> = this._productsSubjects.asObservable();
  
  constructor(private http: HttpClient) { 
    this.http.get<Products[]>(URL).subscribe(data => {
      this._productsList.push(...data);
    });
  }

  create(product: Products): void{
    this.http.post<Products>(URL, product).subscribe({
      error: error => {
        console.error('There was an error!', error);
    },
      next: data => {
        this._productsList.push(data)
      }
    });
  }

}
