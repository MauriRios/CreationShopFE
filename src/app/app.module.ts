import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
