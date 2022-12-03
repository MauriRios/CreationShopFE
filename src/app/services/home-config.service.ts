import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeConfig } from '../models/homeConfig.model';



@Injectable({
  providedIn: 'root'
})


export class HomeConfigService {
  
  URL = 'http://localhost:8080/config'; 

  constructor(private http:HttpClient) { }

  public getHomeConfigs(): Observable<HomeConfig[]>  {
    return this.http.get<HomeConfig[]>(this.URL + '/traer');
  }

  public getHomeConfig(id: any): Observable<HomeConfig> {
    return this.http.get<HomeConfig>(this.URL + '/traer/' + id);
  }

  public updateHomeConfig(homeConfig: HomeConfig) {
    return this.http.put<HomeConfig>(this.URL + '/editar/' + homeConfig.id, homeConfig)
  }
}
