import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeadingModule } from '../../atoms/heading/heading.module';




@NgModule({
  declarations: [HeaderComponent],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeadingModule
  ]
})
export class HeaderModule { }
