import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H2headingComponent } from './h2heading.component';



@NgModule({
  declarations: [H2headingComponent],
  exports:[
    H2headingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class H2headingModule { }
