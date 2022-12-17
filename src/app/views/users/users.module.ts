//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, UsersRoutingModule } from './users-routing.module';

//view
import { UsersComponent } from './users.component';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HotsComponent } from './components/hots/hots.component';
import { OffersComponent } from './components/offers/offers.component';
import { SliderComponent } from './components/slider/slider.component';
import { SponsorshipComponent } from './components/sponsorship/sponsorship.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';

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

//angular material modules
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';


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
    FiltersComponent,
    FilterPipe,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
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
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    UsersRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    routing,
    SharedModule
  ]
})
export class UsersModule { }
