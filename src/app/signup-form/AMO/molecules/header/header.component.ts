import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerlabel: string
  constructor() { }

  ngOnInit(): void {
  }

}
