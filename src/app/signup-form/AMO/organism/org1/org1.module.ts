import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Org1Component } from './org1.component';
import { FormModule } from '../../molecules/form/form.module';
import { HeaderModule } from '../../molecules/header/header.module';



@NgModule({
  declarations: [Org1Component],
  exports:[
    Org1Component
  ],
  imports: [
    CommonModule,
    FormModule,
    HeaderModule
  
  ]
})
export class Org1Module { }
