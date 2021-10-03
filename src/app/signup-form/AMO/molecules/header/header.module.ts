import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { H1headingModule } from '../../atoms/h1heading/h1heading.module';
import { H2headingModule } from '../../atoms/h2heading/h2heading.module';




@NgModule({
  declarations: [HeaderComponent],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    H1headingModule,
    H2headingModule
  ]
})
export class HeaderModule { }
