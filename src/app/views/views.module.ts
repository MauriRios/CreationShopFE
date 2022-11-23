//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routing } from '../app-routing.module';


//Views
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';






@NgModule({
  declarations: [
    
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminModule,
    UsersModule

  ],
  providers: [
    
  ]
})
export class ViewsModule { }
