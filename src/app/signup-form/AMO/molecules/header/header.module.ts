import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LabelModule } from '../../atoms/label/label.module';




@NgModule({
  declarations: [HeaderComponent],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LabelModule
  ]
})
export class HeaderModule { }
