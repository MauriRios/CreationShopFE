import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogConfig } from '../models/catalog-config.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogConfigService {

  URL = 'http://localhost:8080/catalogconfig'; 

  constructor(private http:HttpClient) { }

  public getCatalogConfig(): Observable<CatalogConfig[]>  {
    return this.http.get<CatalogConfig[]>(this.URL + '/traer');
  }

  public updateCatalogConfig(CatalogConfig: CatalogConfig) {
    return this.http.put<CatalogConfig>(this.URL + '/editar/' + CatalogConfig.id, CatalogConfig)
  }
}
