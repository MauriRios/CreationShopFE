import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../users/home/home.component';
import { AdminComponent } from './admin.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { SalesComponent } from './sales/sales.component';


export const routesA: Routes = [

  {
    path: 'admin',
    redirectTo: 'admin/productos',
    pathMatch: 'full'
  },

  {path: 'admin', component: AdminComponent, children:[

    {path: 'ventas', component: SalesComponent},
    {path: 'productos', component: ProductCrudComponent},
    {path: 'home',component: HomeComponent },

  ]},

];

export const routing = RouterModule.forChild(routesA);

@NgModule({
  imports: [RouterModule.forChild(routesA)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
