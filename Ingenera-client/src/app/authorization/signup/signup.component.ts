import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authervice } from '../auth.service';
import { ToastService } from '../../toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  role: "pm"
  // 2 = bm(looking for missions) , 
  // 1 =client"Project Manager" (looking for talents)


  constructor(private fb: FormBuilder,
    private _auth: Authervice,
    private router: Router,
    public toast: ToastService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      let user = { ...this.registerForm.value, role: this.role }
      return this._auth.signup(user)
        .then(({ data }) => {
          if (data.status === 409) {
            this.toast.showErorr(data.message)
          } else {
            localStorage.setItem("token", data.token)
            localStorage.setItem("loggedIn", 'true')
            data.role === "pm" ? this.router.navigate(['client']) : this.router.navigate(['bm'])
            this.toast.presentToast(data.message)
          }
        }).catch(err => {
          console.log(err)
          this.toast.showErorr('Error Occurred, please check your internet')
          this.registerForm.reset();
        })

    }
  }

  checkRole(roleType) {
    this.role = roleType
  }


  public checkDuplicate(fieldName, field, registerForm): void {

    // this._auth.checkDuplicate(fieldName, field).subscribe(data => {
    //   if (data['isDuplicate']) {
    //     registerForm.controls[fieldName].setErrors({ 'incorrect': true });
    //   }
    // });

  }

}
