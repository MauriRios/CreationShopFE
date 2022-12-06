import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotConfig } from '../models/hot-config.model';

@Injectable({
  providedIn: 'root'
})
export class HotsConfigService {

  URL = 'http://localhost:8080/hotconfig'; 

  constructor(private http:HttpClient) { }

  public getHotConfig(): Observable<HotConfig[]>  {
    return this.http.get<HotConfig[]>(this.URL + '/traer');
  }

  public updateHotConfig(hotConfig: HotConfig) {
    return this.http.put<HotConfig>(this.URL + '/editar/' + hotConfig.id, hotConfig)
  }
}
