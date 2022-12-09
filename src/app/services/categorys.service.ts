import { Injectable } from '@angular/core';
import { Category } from '../models/categorys.model';
import { Products } from '../models/products.model';
import { ProductsDataService } from './products-data.service';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {


  // products:Products[]=[];

  constructor(private productsDataService: ProductsDataService,) { }

  categorys: Category[] = [

    {name: "Whiskys"},
    {name: "Aperitivos"},
    {name: "Vinos"},
    {name: "Cervezas"},
    {name: "Regalo"},
    {name: "Combos"},
    {name: "SinAlcohol"},
    {name: "Destilados"},
    
]

public get getCategorys(): Category[] {
  return this.categorys
}


}
