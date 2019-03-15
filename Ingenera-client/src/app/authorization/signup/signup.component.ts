import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  role: 1
  // 2 = bm(looking for missions) , 
  // 1 =client"Project Manager" (looking for talents)


  constructor(private fb: FormBuilder, ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")])],
    });
  }

  onRegister() {
    let user = { ...this.registerForm.value, role: this.role }
    console.log('New user data : ', user)
  }

  checkRole(roleId) {
    this.role = roleId
  }


  public checkDuplicate(fieldName, field, registerForm): void {

    // this._auth.checkDuplicate(fieldName, field).subscribe(data => {
    //   if (data['isDuplicate']) {
    //     registerForm.controls[fieldName].setErrors({ 'incorrect': true });
    //   }
    // });

  }

}
