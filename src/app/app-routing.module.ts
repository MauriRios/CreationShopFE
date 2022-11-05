import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { AperitivosCatalogComponent } from './views/filters/aperitivos-catalog/aperitivos-catalog.component';
import { CervezasCatalogComponent } from './views/filters/cervezas-catalog/cervezas-catalog.component';
import { CombosCatalogComponent } from './views/filters/combos-catalog/combos-catalog.component';
import { DestiladosCatalogComponent } from './views/filters/destilados-catalog/destilados-catalog.component';
import { RegalosCatalogComponent } from './views/filters/regalos-catalog/regalos-catalog.component';
import { SinAlcoholCatalogComponent } from './views/filters/sin-alcohol-catalog/sin-alcohol-catalog.component';
import { VinosCatalogComponent } from './views/filters/vinos-catalog/vinos-catalog.component';
import { WhiskysCatalogComponent } from './views/filters/whiskys-catalog/whiskys-catalog.component';
import { HomeComponent } from './views/home/home.component';



const routes: Routes=[


  {path: '',redirectTo:'/home', pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'combos',component: CombosCatalogComponent },
  {path: 'vinos',component: VinosCatalogComponent},
  {path: 'sinalcohol',component: SinAlcoholCatalogComponent },
  {path: 'regalos',component: RegalosCatalogComponent},
  {path: 'whiskys',component: WhiskysCatalogComponent },
  {path: 'cervezas',component: CervezasCatalogComponent},
  {path: 'aperitivos',component: AperitivosCatalogComponent },
  {path: 'destilados',component: DestiladosCatalogComponent },
  {path: 'carrito',component: CartComponent },
  // {path: 'login', component: LoginComponent},
  // {path: 'registro', component: RegistroComponent}

];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
