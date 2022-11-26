//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


//Views
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    
  ],
  exports: [
    AdminModule,
    UsersModule
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
