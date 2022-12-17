import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesA } from '../admin/admin-routing.module';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { AperitivosCatalogComponent } from './filters/aperitivos-catalog/aperitivos-catalog.component';
import { CervezasCatalogComponent } from './filters/cervezas-catalog/cervezas-catalog.component';
import { CombosCatalogComponent } from './filters/combos-catalog/combos-catalog.component';
import { DestiladosCatalogComponent } from './filters/destilados-catalog/destilados-catalog.component';
import { RegalosCatalogComponent } from './filters/regalos-catalog/regalos-catalog.component';
import { SinAlcoholCatalogComponent } from './filters/sin-alcohol-catalog/sin-alcohol-catalog.component';
import { VinosCatalogComponent } from './filters/vinos-catalog/vinos-catalog.component';
import { WhiskysCatalogComponent } from './filters/whiskys-catalog/whiskys-catalog.component';
import { HomeComponent } from './home/home.component';


import { UsersComponent } from './users.component';

const routesU: Routes = [

  { path: 'admin', loadChildren: () => import('src/app/views/admin/admin.module').then(m => m.AdminModule) },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  { path: '', component: UsersComponent, children:[
    
    {path: 'home',component: HomeComponent },
    {path: 'combos',component: CombosCatalogComponent },
    {path: 'vinos',component: VinosCatalogComponent},
    {path: 'sinalcohol',component: SinAlcoholCatalogComponent },
    {path: 'regalos',component: RegalosCatalogComponent},
    {path: 'whiskys',component: WhiskysCatalogComponent },
    {path: 'cervezas',component: CervezasCatalogComponent},
    {path: 'aperitivos',component: AperitivosCatalogComponent },
    {path: 'destilados',component: DestiladosCatalogComponent },
    {path: 'carrito',component: CartComponent },
    {path: 'contacto', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent }
  ] },

];

export const routing = RouterModule.forRoot(routesU);

@NgModule({
  imports: [
  RouterModule.forChild(routesU)
],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
