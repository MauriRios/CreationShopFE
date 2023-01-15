import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expenses } from '../models/expenses.model';
import { Sales } from '../models/sales.model';


@Injectable({
  providedIn: 'root'
})
export class BalanceService {


  constructor(private http: HttpClient) { }

  getSales(): Observable<Sales[]>  {
      return this.http.get<Sales[]>(environment.URL + 'balance/ventas/traer');
  }

  getExpenses(): Observable<Expenses[]>  {
      return this.http.get<Expenses[]>(environment.URL + 'balance/gastos/traer');
  }


}
