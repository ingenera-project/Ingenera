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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;


  constructor(
    private _auth: Authervice,
    private router: Router,
    public toast: ToastService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.compose([
          Validators.required, Validators.email
        ])
      ]),
      password: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ])

    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      return this._auth.login(
        this.loginForm.value.email,
        this.loginForm.value.password,
      ).then(({ data }) => {
        console.log("check data:- ", data)
        if (data.code === 409) {
          this.toast.showErorr(data.message)
        } else {
          localStorage.setItem("token", data.token)
          localStorage.setItem("loggedIn", 'true')
         data.role === "pm" ? this.router.navigate(['client']) : this.router.navigate(['bm'])
          this.toast.presentToast(data.message)
        }
      })
        .catch(err => {
          console.log(err)
          this.toast.showErorr('Error Occurred, please check your internet')
          this.loginForm.reset();
        })
      // .then(result => {
      //     if (result === true) {
      //       // login successful
      // this.router.navigate(['client']);
      //     } else {
      //       // login failed
      //       this.error = 'Username or password is incorrect';
      //       this.loginForm.reset();
      //     }
      //   },
      //   err => {
      //     this.error = err
      //     this.loginForm.reset();
      //   }
      //);
    }
  }

}
