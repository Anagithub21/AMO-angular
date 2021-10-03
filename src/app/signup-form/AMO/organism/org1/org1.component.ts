import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ank-org1',
  templateUrl: './org1.component.html',
  styleUrls: ['./org1.component.scss']
})
export class Org1Component {
  headerlabel="Sign up form"
  subheaderlabel="Please fill in the form to create an Account"
  namelabel="first_name"
  buttonlabel="click me"
  message:any
  @Output() messageEvent = new EventEmitter<string>();

  receiveMessage($event) {
    this.messageEvent.emit($event)
  }
}
