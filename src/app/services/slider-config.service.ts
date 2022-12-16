import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SliderConfig } from '../models/slider-config.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SliderConfigService {

  constructor(private http:HttpClient) { }

  public getSliderConfig(): Observable<SliderConfig[]>  {
    return this.http.get<SliderConfig[]>(environment.URL + 'sliderconfig/traer');
  }

  public updateSliderConfig(sliderConfig: SliderConfig) {
    return this.http.put<SliderConfig>(environment.URL + 'sliderconfig/editar/' + sliderConfig.id, sliderConfig)
  }
}
