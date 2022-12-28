import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordChangerComponent } from './word-changer/word-changer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WordChangerComponent, 
  ],
  imports: [
    CommonModule, 
  ],
  exports: [
    WordChangerComponent, 
    SharedModule
  ],
})
export class PagesModule {}
