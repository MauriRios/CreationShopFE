import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotConfig } from '../models/hot-config.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotsConfigService {


  constructor(private http:HttpClient) { }

  public getHotConfig(): Observable<HotConfig[]>  {
    return this.http.get<HotConfig[]>(environment.URL + 'hotconfig/traer');
  }

  public updateHotConfig(hotConfig: HotConfig) {
    return this.http.put<HotConfig>(environment.URL + 'hotconfig/editar/' + hotConfig.id, hotConfig)
  }
}
