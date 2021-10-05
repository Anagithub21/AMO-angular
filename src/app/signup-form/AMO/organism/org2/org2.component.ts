import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-org2',
  templateUrl: './org2.component.html',
  styleUrls: ['./org2.component.scss']
})
export class Org2Component {
  @Input() tableData: []
  @Input() header: []


}
