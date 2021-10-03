import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-h1heading',
  templateUrl: './h1heading.component.html',
  styleUrls: ['./h1heading.component.scss']
})
export class H1headingComponent  {
@Input() text:string;

}
