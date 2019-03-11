import { Injectable } from '@angular/core';

@Injectable()
export class Authervice {


  constructor() {}

  login(email: string, password: string) {
      console.log('login with ',email,' and ',password)
    return true
  }

}