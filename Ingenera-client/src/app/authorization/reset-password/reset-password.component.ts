import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authervice } from '../auth.service';
import { ToastService } from '../../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _auth: Authervice,
    private router: Router,
    public toast: ToastService) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
    })
  }


  onResetPassword() {
    if (this.resetPasswordForm.valid) {
      let id = this.router.url.split('/')[3]
      return this._auth.resetPassword(this.resetPasswordForm.value.password, id)
        .then(({ data }) => {
          if (data.code === 409) {
            this.toast.showErorr(data.message)
          } else {
            this.toast.presentToast(data.message)
            this.router.navigate(['auth']);
          }
        }).catch(err => {
          console.log(err)
          this.toast.showErorr('Error Occurred, please check your internet');
          this.resetPasswordForm.reset();
        })

    }
  }
}


