import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { LabelModule } from '../../atoms/label/label.module';
import { TextModule } from '../../atoms/text/text.module';
import { ButtonModule } from '../../atoms/button/button.module';


@NgModule({
  declarations: [FormComponent],
  exports:[
    FormComponent
  ],
  imports: [
    CommonModule,
    LabelModule,
    TextModule,
    ButtonModule
  ]
})
export class FormModule { }
