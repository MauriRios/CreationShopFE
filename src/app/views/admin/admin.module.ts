import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule, routing } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { SalesComponent } from './sales/sales.component';
import { AddProductComponent } from './product-crud/add-product/add-product.component';
import { DeleteProductComponent } from './product-crud/delete-product/delete-product.component';
import { EditProductComponent } from './product-crud/edit-product/edit-product.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';

//angular material modules
import { SharedModule } from 'src/app/shared/shared.module';

//charts 
import { LineChartComponent } from './sales/charts/line-chart/line-chart.component';
import { BarChartComponent } from './sales/charts/bar-chart/bar-chart.component';
//material
import { TableComponent } from './sales/materials/table/table.component';

@NgModule({
  declarations: [
    AdminComponent,
    SalesComponent,
    AddProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    ProductCrudComponent,
    LineChartComponent,
    BarChartComponent,
    TableComponent,
    
  ],
  exports: [
    AdminComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    routing
  ],

  bootstrap: [AdminComponent]
})
export class AdminModule { }
