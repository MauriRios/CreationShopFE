import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';

//views
import { ViewsModule } from './views/views.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
