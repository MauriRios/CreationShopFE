import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

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
    AlifeFileToBase64Module,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
