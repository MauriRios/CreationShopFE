import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatalogConfig } from '../models/catalog-config.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogConfigService {


  constructor(private http:HttpClient) { }

  public getCatalogConfig(): Observable<CatalogConfig[]>  {
    return this.http.get<CatalogConfig[]>(environment.URL + 'catalogconfig/traer');
  }

  public updateCatalogConfig(CatalogConfig: CatalogConfig) {
    return this.http.put<CatalogConfig>(environment.URL + 'catalogconfig/editar/' + CatalogConfig.id, CatalogConfig)
  }
}
