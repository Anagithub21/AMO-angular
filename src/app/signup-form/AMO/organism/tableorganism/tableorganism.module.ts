import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableorganismComponent } from './tableorganism.component';
import { TableModule } from '../../molecules/table/table.module';



@NgModule({
  declarations: [TableorganismComponent],
  exports:[
    TableorganismComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class TableorganismModule { }
