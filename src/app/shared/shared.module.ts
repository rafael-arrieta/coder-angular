import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';



@NgModule({
  declarations: [
    Example1Component,
    Example2Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Example1Component,
    Example2Component,
  ]
})
export class SharedModule { }
