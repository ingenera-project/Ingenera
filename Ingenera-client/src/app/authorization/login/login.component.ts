import { Component, OnInit } from '@angular/core';
import { Authervice } from '../auth.service'
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


  constructor(private _auth: Authervice, private router: Router) { }

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
      this._auth
        .login(
          this.loginForm.value.email,
          this.loginForm.value.password,
        )
        // .then(result => {
        //     if (result === true) {
        //       // login successful
        this.router.navigate(['client']);
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
