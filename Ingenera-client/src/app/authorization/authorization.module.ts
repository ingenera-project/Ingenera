import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule} from '@angular/router';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import { AuthContainerComponent } from './auth-container/auth-container.component'
import { SharedModule}  from '../shared/shared.module'


import {Authervice} from './auth.service'


@NgModule({

  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    RouterModule,
    SharedModule
    
  ],
  declarations: [
    LoginComponent, 
    SignupComponent, 
    ForgetPasswordComponent, 
    ResetPasswordComponent, AuthContainerComponent
  ],
  providers:[Authervice]
})
export class AuthorizationModule { }
