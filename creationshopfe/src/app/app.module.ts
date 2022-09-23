import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { OffersComponent } from './components/offers/offers.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { HotsComponent } from './components/hots/hots.component';
import { SponsorshipComponent } from './components/sponsorship/sponsorship.component';
import { VinosCatalogComponent } from './components/filters/vinos-catalog/vinos-catalog.component';
import { CervezasCatalogComponent } from './components/filters/cervezas-catalog/cervezas-catalog.component';
import { WhiskysCatalogComponent } from './components/filters/whiskys-catalog/whiskys-catalog.component';
import { RegalosCatalogComponent } from './components/filters/regalos-catalog/regalos-catalog.component';
import { CombosCatalogComponent } from './components/filters/combos-catalog/combos-catalog.component';
import { DestiladosCatalogComponent } from './components/filters/destilados-catalog/destilados-catalog.component';
import { AperitivosCatalogComponent } from './components/filters/aperitivos-catalog/aperitivos-catalog.component';
import { SinAlcoholCatalogComponent } from './components/filters/sin-alcohol-catalog/sin-alcohol-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
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
    SinAlcoholCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
