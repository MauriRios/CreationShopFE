import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaterogyFilterService {
  
  //TODO REFACTORIZAR LOS FILTROS
  
  categorySelected = new EventEmitter<string>();

  constructor() { }

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
