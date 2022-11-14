//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routing } from '../app-routing.module';

//Home components
import { CatalogsComponent } from '../components/catalogs/catalogs.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HotsComponent } from '../components/hots/hots.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { OffersComponent } from '../components/offers/offers.component';
import { SliderComponent } from '../components/slider/slider.component';
import { SponsorshipComponent } from '../components/sponsorship/sponsorship.component';

//Filter components
import { AperitivosCatalogComponent } from './filters/aperitivos-catalog/aperitivos-catalog.component';
import { CervezasCatalogComponent } from './filters/cervezas-catalog/cervezas-catalog.component';
import { CombosCatalogComponent } from './filters/combos-catalog/combos-catalog.component';
import { DestiladosCatalogComponent } from './filters/destilados-catalog/destilados-catalog.component';
import { RegalosCatalogComponent } from './filters/regalos-catalog/regalos-catalog.component';
import { SinAlcoholCatalogComponent } from './filters/sin-alcohol-catalog/sin-alcohol-catalog.component';
import { VinosCatalogComponent } from './filters/vinos-catalog/vinos-catalog.component';
import { WhiskysCatalogComponent } from './filters/whiskys-catalog/whiskys-catalog.component';

//Pipes
import { FilterPipe } from './filters/filter.pipe';

//Views
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { EditsComponent } from './dashboard/edits/edits.component';
import { SalesComponent } from './dashboard/sales/sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainPageComponent,
    SliderComponent,
    CatalogsComponent,
    OffersComponent,
    ContactComponent,
    FooterComponent,
    CartComponent,
    HotsComponent,
    SponsorshipComponent,
    VinosCatalogComponent,
    CervezasCatalogComponent,
    WhiskysCatalogComponent,
    RegalosCatalogComponent,
    CombosCatalogComponent,
    DestiladosCatalogComponent,
    AperitivosCatalogComponent,
    SinAlcoholCatalogComponent,
    FilterPipe,
    HomeComponent,
    LoginComponent,
    EditsComponent,
    SalesComponent,
    DashboardComponent,

  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    
  ]
})
export class ViewsModule { }
