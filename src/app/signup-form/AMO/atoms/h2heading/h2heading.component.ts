import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-h2heading',
  templateUrl: './h2heading.component.html',
  styleUrls: ['./h2heading.component.scss']
})
export class H2headingComponent {
  @Input() text: string
}
