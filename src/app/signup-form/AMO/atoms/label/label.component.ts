import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() text: any;
 

}
