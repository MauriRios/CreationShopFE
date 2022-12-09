import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SliderConfig } from '../models/slider-config.model';



@Injectable({
  providedIn: 'root'
})


export class SliderConfigService {
  
  URL = 'http://localhost:8080/sliderconfig'; 

  constructor(private http:HttpClient) { }

  public getSliderConfig(): Observable<SliderConfig[]>  {
    return this.http.get<SliderConfig[]>(this.URL + '/traer');
  }

  public updateSliderConfig(sliderConfig: SliderConfig) {
    return this.http.put<SliderConfig>(this.URL + '/editar/' + sliderConfig.id, sliderConfig)
  }
}
