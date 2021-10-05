import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { SortDirective } from 'src/app/signup-form/directive/sort.directive';




@NgModule({
  declarations: [TableComponent,SortDirective],
  exports:[
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
