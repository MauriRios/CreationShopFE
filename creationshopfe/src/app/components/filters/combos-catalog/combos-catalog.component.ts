import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-combos-catalog',
  templateUrl: './combos-catalog.component.html',
  styleUrls: ['./combos-catalog.component.css']
})
export class CombosCatalogComponent implements OnInit {

  products : Products[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    
  }


}
