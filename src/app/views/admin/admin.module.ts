import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, routing } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditsComponent } from './dashboard/edits/edits.component';
import { SalesComponent } from './dashboard/sales/sales.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    EditsComponent,
    SalesComponent

  ],
  exports: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    routing
  ],

  bootstrap: [AdminComponent]
})
export class AdminModule { }
