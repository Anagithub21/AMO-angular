import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string
  @Input() type:string
  @Input() disabl:boolean
  

}
