import { Component, OnInit } from '@angular/core';
import { Authervice } from '../auth.service'
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

  constructor(private _auth: Authervice, private router: Router) { }

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
      this.router.navigate(['auth/resetPassword']);
      return true
    }
  }

}
