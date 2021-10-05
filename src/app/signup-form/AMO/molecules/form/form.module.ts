import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { LabelModule } from '../../atoms/label/label.module';
import { TextModule } from '../../atoms/text/text.module';
import { ButtonModule } from '../../atoms/button/button.module';
import { InputModule } from '../../atoms/input/input.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../../atoms/select/select.module';


@NgModule({
  declarations: [FormComponent],
  exports:[
    FormComponent
  ],
  imports: [
    CommonModule,
    TextModule,
    ButtonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule
    
  ]
})
export class FormModule { }
