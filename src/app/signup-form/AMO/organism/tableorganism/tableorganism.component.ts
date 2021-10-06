import { Component, Input, OnInit } from '@angular/core';
import{Data} from '../../../model/data'
@Component({
  selector: 'ank-tableorganism',
  templateUrl: './tableorganism.component.html',
  styleUrls: ['./tableorganism.component.scss']
})
export class TableorganismComponent {
  @Input() tableData: Data[]
  @Input() header: Data[]

}
