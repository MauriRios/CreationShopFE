//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Views
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    
  ],
  exports: [
    AdminModule,
    UsersModule,
    AuthModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminModule,
    UsersModule,
    AuthModule

  ],
  providers: [
    
  ]
})
export class ViewsModule { }
