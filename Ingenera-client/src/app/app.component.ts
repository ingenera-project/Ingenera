import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {TranslateService} from '../app/shared/translate.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document)  {
    let currentTheme=localStorage.getItem('theme') || 'light'
    this.setTheme(currentTheme)
  }
 
  setTheme(theme){
    localStorage.setItem('theme',theme) 
    this.document.body.classList.add(theme);
  }
}
