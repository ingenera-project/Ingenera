import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BusinessRoutingModule} from './business-routing.module'
import {BusinessDashboardComponent,BusinessProfileComponent,ConsultansComponent} from '../business-managers'

@NgModule({
  declarations: [BusinessProfileComponent, ConsultansComponent, BusinessDashboardComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessManagersModule { }
