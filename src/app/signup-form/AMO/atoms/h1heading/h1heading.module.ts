import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H1headingComponent } from './h1heading.component';



@NgModule({
  declarations: [H1headingComponent],
  exports:[
    H1headingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class H1headingModule { }
