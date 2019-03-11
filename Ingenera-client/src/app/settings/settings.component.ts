import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  setTheme(theme){
   let currentTheme=localStorage.getItem('theme');     
    localStorage.setItem('theme',theme); 
    this.document.body.classList.remove(currentTheme);
    this.document.body.classList.add(theme);
  }

}
