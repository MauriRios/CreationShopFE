import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AperitivosCatalogComponent } from './views/users/filters/aperitivos-catalog/aperitivos-catalog.component';
import { CervezasCatalogComponent } from './views/users/filters/cervezas-catalog/cervezas-catalog.component';
import { CombosCatalogComponent } from './views/users/filters/combos-catalog/combos-catalog.component';
import { DestiladosCatalogComponent } from './views/users/filters/destilados-catalog/destilados-catalog.component';
import { RegalosCatalogComponent } from './views/users/filters/regalos-catalog/regalos-catalog.component';
import { SinAlcoholCatalogComponent } from './views/users/filters/sin-alcohol-catalog/sin-alcohol-catalog.component';
import { VinosCatalogComponent } from './views/users/filters/vinos-catalog/vinos-catalog.component';
import { WhiskysCatalogComponent } from './views/users/filters/whiskys-catalog/whiskys-catalog.component';
import { HomeComponent } from './views/users/home/home.component';
import { UsersComponent } from './views/users/users.component';


const routes: Routes=[

  { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },

  { path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule) },

  // {path: 'login', component: LoginComponent},
  // {path: 'registro', component: RegistroComponent}

  {path: '',redirectTo:'/home', pathMatch:'full'},

  { path: 'home', component: HomeComponent },

  {path: 'combos',component: CombosCatalogComponent },
  {path: 'vinos',component: VinosCatalogComponent},
  {path: 'sinalcohol',component: SinAlcoholCatalogComponent },
  {path: 'regalos',component: RegalosCatalogComponent},
  {path: 'whiskys',component: WhiskysCatalogComponent },
  {path: 'cervezas',component: CervezasCatalogComponent},
  {path: 'aperitivos',component: AperitivosCatalogComponent },
  {path: 'destilados',component: DestiladosCatalogComponent },



];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
