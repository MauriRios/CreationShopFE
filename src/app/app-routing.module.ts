import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes=[

  { path: 'home', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },

  { path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule) },

  { path: 'auth', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule) },

];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
