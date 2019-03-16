import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable()
export class Authervice {


  constructor() { }

  login(email: string, password: string) {
    console.log('login with ', email, ' and ', password)
    return Axios.post('/api/auth/login', { email, password })
  }

  signup(user: object) {
    return Axios.post('api/auth/signup', user)
  }

}