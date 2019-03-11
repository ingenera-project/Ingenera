import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
    })
  }


  onResetPassword() {
    if (this.resetPasswordForm.valid) {
      this.router.navigate(['/auth']);
      return;
    }
  }
}


