import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Org2Component } from './org2.component';
import { TableModule } from '../../atoms/table/table.module';



@NgModule({
  declarations: [Org2Component],
  exports:[
    Org2Component
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class Org2Module { }
