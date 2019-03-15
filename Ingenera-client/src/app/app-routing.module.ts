import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//containers 
import { 
   GuestLayoutComponent,
   ClientLayoutComponent, 
   BusinessLayoutComponent 
  } from './core/containers'
  import { RoleGuardService } from './core/guards/role.guard';
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
    loadChildren: '../app/clients/clients.module#ClientsModule',
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'bm'
    }
  },
  {
    path: 'bm',component:BusinessLayoutComponent,
    loadChildren: '../app/business-managers/business.module#BusinessManagersModule',
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'bm'
    }
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
