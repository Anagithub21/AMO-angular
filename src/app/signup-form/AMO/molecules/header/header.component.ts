import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerlabel: string
  @Input() subheaderlabel:string


}
