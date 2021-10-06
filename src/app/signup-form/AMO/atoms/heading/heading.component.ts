import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ank-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  @Input() text:string;
  @Input() type:string;

}
