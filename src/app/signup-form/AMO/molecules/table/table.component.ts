import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../../model/data'
@Component({
  selector: 'ank-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableData: Data[]
  @Input() header: Data[]
  type: any = []
  getpwd(i) {
    this.type[i] = this.type[i] == 'show' ? 'hide' : 'show'
  }
}
