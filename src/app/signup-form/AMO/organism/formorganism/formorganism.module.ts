import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormorganismComponent } from './formorganism.component';
import { FormModule } from '../../molecules/form/form.module';
import { HeaderModule } from '../../molecules/header/header.module';



@NgModule({
  declarations: [FormorganismComponent],
  exports:[
    FormorganismComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    HeaderModule
  
  ]
})
export class FormorganismModule { }
