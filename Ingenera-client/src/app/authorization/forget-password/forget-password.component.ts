import { Component, OnInit } from '@angular/core';
import { Authervice } from '../auth.service';
import { ToastService } from '../../toast.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  emailForm: FormGroup;
  error: string;

  constructor(
    private _auth: Authervice,
    private router: Router,
    public toast: ToastService
  ) { }

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl('', [
        Validators.compose([
          Validators.required, Validators.email
        ])
      ])
    });
  }

  onSend() {
    if (this.emailForm.valid) {
      return this._auth.forgetPassword(
        this.emailForm.value.email
      )
        .then(({ data }) => {
          if (data.code === 200) {
            this.toast.presentToast(data.message)
          } else {
            this.toast.showErorr(data.message)
          }
        })
        .catch(err => {
          console.log(err);
          this.toast.showErorr('Error Occurred, please check your internet')
          this.emailForm.reset();
        })

    }
  }

}
