import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AperitivosCatalogComponent } from './filters/aperitivos-catalog/aperitivos-catalog.component';
import { CervezasCatalogComponent } from './filters/cervezas-catalog/cervezas-catalog.component';
import { CombosCatalogComponent } from './filters/combos-catalog/combos-catalog.component';
import { DestiladosCatalogComponent } from './filters/destilados-catalog/destilados-catalog.component';
import { RegalosCatalogComponent } from './filters/regalos-catalog/regalos-catalog.component';
import { SinAlcoholCatalogComponent } from './filters/sin-alcohol-catalog/sin-alcohol-catalog.component';
import { VinosCatalogComponent } from './filters/vinos-catalog/vinos-catalog.component';
import { WhiskysCatalogComponent } from './filters/whiskys-catalog/whiskys-catalog.component';


import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  { path: 'home', component: UsersComponent },

  {path: 'combos',component: CombosCatalogComponent },
  {path: 'vinos',component: VinosCatalogComponent},
  {path: 'sinalcohol',component: SinAlcoholCatalogComponent },
  {path: 'regalos',component: RegalosCatalogComponent},
  {path: 'whiskys',component: WhiskysCatalogComponent },
  {path: 'cervezas',component: CervezasCatalogComponent},
  {path: 'aperitivos',component: AperitivosCatalogComponent },
  {path: 'destilados',component: DestiladosCatalogComponent },
  {path: 'carrito',component: CartComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
