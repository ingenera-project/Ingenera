import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//containers 
import { GuestLayoutComponent, ClientLayoutComponent, BusinessLayoutComponent } from './core/containers'

const routes: Routes = [
  { path: 'settings',    redirectTo: 'Home',
  pathMatch: 'full'},
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: GuestLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:
          '../app/home/home.module#HomeModuleModule',
      },

    ]
  },
  {
    path: 'client', component: ClientLayoutComponent,
    loadChildren: '../app/clients/clients.module#ClientsModule'
  },
  {
    path: 'bm',component:BusinessLayoutComponent,
    loadChildren: '../app/business-managers/business.module#BusinessManagersModule'
  },
  {
    path: 'auth', component: GuestLayoutComponent,
    loadChildren: '../app/authorization/authorization.module#AuthorizationModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
