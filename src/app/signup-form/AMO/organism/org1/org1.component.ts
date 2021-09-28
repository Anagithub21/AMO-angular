import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ank-org1',
  templateUrl: './org1.component.html',
  styleUrls: ['./org1.component.scss']
})
export class Org1Component implements OnInit {
  formlabel="Enter Name"
  namelabel="first_name"
  buttonlabel="click me"
  headerlabel="Sign up form"
  constructor() { }

  ngOnInit(): void {
  }

}
