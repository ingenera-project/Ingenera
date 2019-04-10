import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  public isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!!JSON.parse(loggedIn)) {
      console.log("lmaooo")
      return true;
    } else {
      return false;
    }
  }
}