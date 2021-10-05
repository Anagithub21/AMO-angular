import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  @Input() tableData: []
  @Input() header:any= []

}
