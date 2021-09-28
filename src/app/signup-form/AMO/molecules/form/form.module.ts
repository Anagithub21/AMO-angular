import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { LabelModule } from '../../atoms/label/label.module';



@NgModule({
  declarations: [FormComponent],
  exports:[
    FormComponent
  ],
  imports: [
    CommonModule,
    LabelModule
  ]
})
export class FormModule { }
