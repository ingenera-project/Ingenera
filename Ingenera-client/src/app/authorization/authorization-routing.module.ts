import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, SignupComponent, ResetPasswordComponent, ForgetPasswordComponent } from '../authorization';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'resetPassword/:id', component: ResetPasswordComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'signup', component: SignupComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
