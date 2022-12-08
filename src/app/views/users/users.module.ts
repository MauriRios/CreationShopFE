//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, UsersRoutingModule } from './users-routing.module';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

//view
import { UsersComponent } from './users.component';

//components
import { CatalogsComponent } from 'src/app/components/catalogs/catalogs.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HotsComponent } from 'src/app/components/hots/hots.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { OffersComponent } from 'src/app/components/offers/offers.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { SponsorshipComponent } from 'src/app/components/sponsorship/sponsorship.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//filters components
import { AperitivosCatalogComponent } from './filters/aperitivos-catalog/aperitivos-catalog.component';
import { CervezasCatalogComponent } from './filters/cervezas-catalog/cervezas-catalog.component';
import { CombosCatalogComponent } from './filters/combos-catalog/combos-catalog.component';
import { DestiladosCatalogComponent } from './filters/destilados-catalog/destilados-catalog.component';
import { FilterPipe } from './filters/filter.pipe';
import { RegalosCatalogComponent } from './filters/regalos-catalog/regalos-catalog.component';
import { SinAlcoholCatalogComponent } from './filters/sin-alcohol-catalog/sin-alcohol-catalog.component';
import { VinosCatalogComponent } from './filters/vinos-catalog/vinos-catalog.component';
import { WhiskysCatalogComponent } from './filters/whiskys-catalog/whiskys-catalog.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';





@NgModule({
  declarations: [
    UsersComponent,
    NavbarComponent,
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
  ],
  exports: [
    UsersComponent,
    NavbarComponent,
    SliderComponent,
    CatalogsComponent,
    OffersComponent,
    ContactComponent,
    FooterComponent,
    HotsComponent,
    SponsorshipComponent,
  ],
  imports: [
    SweetAlert2Module,
    AlifeFileToBase64Module,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    UsersRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    routing,

  ]
})
export class UsersModule { }
