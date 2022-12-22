import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routesAuth: Routes = [

  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  { path: 'auth', component: AuthComponent, children:[

    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent }

  ]}


];

export const routingAuth = RouterModule.forChild(routesAuth);

@NgModule({
  imports: [RouterModule.forChild(routesAuth)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
