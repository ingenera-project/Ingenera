import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDashboardComponent, BusinessProfileComponent, ConsultansComponent } from '../business-managers'
const routes: Routes = [
  { path: '', component: BusinessDashboardComponent },
  { path: 'dashboard', component: BusinessDashboardComponent },
  { path: 'profile', component: BusinessProfileComponent },
  { path: 'consultants', component: ConsultansComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
