import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EditsComponent } from './dashboard/edits/edits.component';
import { SalesComponent } from './dashboard/sales/sales.component';

export const routesA: Routes = [

  {path: 'admin', component: AdminComponent, children:[

    {path: 'ventas', component: SalesComponent},
    {path: 'editar', component: EditsComponent},
    {path: 'dashboard', component: DashboardComponent},

]},
];

export const routing = RouterModule.forRoot(routesA);

@NgModule({
  imports: [RouterModule.forChild(routesA)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
