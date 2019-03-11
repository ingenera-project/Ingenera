import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipes
import {
  OrderBy,
  TranslatePipe
} from './pipes';
const PIPES = [TranslatePipe, OrderBy]



@NgModule({
  declarations: [...PIPES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...PIPES,    
    FormsModule,
    ReactiveFormsModule,]

})
export class SharedModule { }
