import { Injectable } from '@angular/core';
import Axios from '../../../e2e/src/api';
import decode from 'jwt-decode';
@Injectable()
export class Authervice {


  constructor() { }

  login(email: string, password: string) {
    console.log('login with ', email, ' and ', password)
    return Axios.post('/auth/login', { email, password })
  }

  signup(user: object) {
    console.log('lets signup')
    return Axios.post('/auth/signup', user)
  }

  forgetPassword(email: String) {
    return Axios.post('/auth/forget', { email })
  }

  resetPassword(newPass: String, id: String) {
    return Axios.post('/auth/reset', { newPass, id })
  }

  getUser() {
    const token = localStorage.getItem('token');
    const user = decode(token);
    return user
  }

}